
import { child,ref,get,getDatabase,onValue} from 'firebase/database';
import { doc } from 'firebase/firestore';
import firebaseApp from '../utils/firebase'


let busList = []
let counter = 0
let busNum = 36
let primaryPath = "TTC/Data/"
let carbonValue = ""
let tempValue = ""

const getBusNum =(info) =>{

  busList[counter] = info.key
  counter ++
  // return busList

}
const getBusData = (snap) =>{
  
  // console.log(snap.key, snap.child("Maintenance/Co2").val())
  carbonValue += " " + snap.key + " : " + snap.child("/Maintenance/Co2").val() + "<br>";
  document.querySelector("#co2Reading").innerHTML = carbonValue 
  
  // console.log(snap.key, snap.child("Maintenance/Temperature").val())
  tempValue += " "  + snap.key + " : " + snap.child("/Maintenance/Temperature").val() + "<br>";
  document.querySelector("#tempReading").innerHTML = tempValue 
 

}
const Maintenance = () => {
  const ini = firebaseApp;
  const btnclick = () =>{
    // busNum = document.querySelector("#busNumField").value
  
    console.log("Bus Value: " +busNum)
    const dbRef = ref(getDatabase(),"Canada/TTC/Data/");
    onValue(dbRef, (snapshot) => {
      carbonValue = " ";
      tempValue = " ";
        snapshot.forEach((snap)=>{ return getBusNum(snap)})
        snapshot.forEach((snap)=>{ return getBusData(snap)})
      const data = snapshot.val();
      console.log("test", data)
    });
    // get(child(dbRef, `Canada`)).then((snapshot) => {
    //   if (snapshot.exists()) {  
    //     snapshot.child(`TTC/Data/`).forEach((snap)=>{ return getBusNum(snap)})
    //     snapshot.child(`TTC/Data/`).forEach((snap)=>{ return getBusData(snap)})
    //     let busDataSnap = snapshot.child(`TTC/Data/${busNum}`);   
    //     let busData = busDataSnap.val()
    //     console.log("Bus Data" , busDataSnap)
    //     console.log(busDataSnap.child("/Maintenance/Temperature").val());
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });
  //  console.log(Database)

  }
  // ref.push("test");
    return(
      <div>
      <h1>Maintenance</h1>
      {/* <input  id='busNumField' type={"text"}></input> */}
      {btnclick()}
      {/* <button onClick ={btnclick}>Check</button> */}
      <h2 >Co2</h2>
      <div id='co2Reading'></div>
      <h2>Temperature</h2>
      <div id='tempReading'></div>
      </div>
    )
  };
  
  export default Maintenance;