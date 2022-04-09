
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    
    <div className="App">
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BusCare+</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/"> <a class="nav-link " aria-current="page" href="#">Home</a></Link>
        </li>
        <li class="nav-item">
        <Link to="/safety"><a class="nav-link" href="#">Safety</a></Link>
        </li>
        <li class="nav-item">
        <Link to="/maintenance"><a class="nav-link" href="#">Maintenance</a></Link>
        </li>
        <li class="nav-item">
        <Link to="/map"><a class="nav-link" href="#">Map</a></Link>
        </li>
      </ul>
    </div>
</div>
</nav>
<Outlet></Outlet>
</div>

    
  );
}

export default NavBar;
