
import { child,ref,get,getDatabase } from 'firebase/database';
import { doc } from 'firebase/firestore';
import firebaseApp from '../utils/firebase'


let busNum = 36
const Maintenance = () => {
  const ini = firebaseApp;
  const btnclick = () =>{
    busNum = document.querySelector("#busNumField").value

    console.log("Bus Value: " +busNum)
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Canada`)).then((snapshot) => {
      if (snapshot.exists()) {
        let busData = snapshot.child(`TTC/Data/${busNum}`)
        console.log(busData.val())
        console.log(busData.child("/Maintenance/Temperature").val());
        document.querySelector("#co2Reading").innerHTML = " " + busData.child("/Maintenance/Co2").val();
        document.querySelector("#tempReading").innerHTML = " " + busData.child("/Maintenance/Temperature").val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  //  console.log(Database)

  }
  // ref.push("test");
    return(
      <div>
      <h1>Maintenance</h1>
      <input  id='busNumField' type={"text"}></input>
      
      <button onClick ={btnclick}>Check</button><h2 >Co2</h2>
      <div id='co2Reading'></div>
      <h2>Temperature</h2>
      <div id='tempReading'></div>
      </div>
    )
  };
  
  export default Maintenance;