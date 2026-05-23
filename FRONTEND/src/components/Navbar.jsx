import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Navbar(){

let precio = 25000;
let logeado = false;


    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    
    
     <Link to="/">
            <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
     </Link>
   




    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          
         
          <Link to="/">
                <Button variant="dark"> 🍕 Home</Button>
             </Link>
          
        </li>

        {logeado == true ? <li className="nav-item">
         <Button variant="dark">🔒Profile</Button>
        </li> 
        :  <li className="nav-item">

             <Link to="/Register">
                <Button variant="dark">🔐Register</Button>
             </Link>
            
        </li>}

        {logeado == true ? <li className="nav-item">
         <Button variant="dark">🔒Logout</Button>
        </li> 
        :  <li className="nav-item">
         
         <Link to="/Login">
         <Button variant="dark">🔐Login</Button>
        </Link>
        
        
        </li>}

      </ul>
    </div>
   
    <div className="Carrito">
        
        <Link to="/Cart" className="nav-link" variant="dark">
        
        <Button variant="dark">🛒 Total: ${precio.toLocaleString()} 
        </Button>

        </Link>
         </div>
  </div>
</nav>
        </>
    )
}

export default Navbar