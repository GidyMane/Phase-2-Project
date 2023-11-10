import "../navbar.css"
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart"


function NavBar({loggedIn}){
    const { totalItems }= useCart();
    let buttons;
    if(loggedIn){
        buttons=(
            <Link to="/logout" className="btn btn-outline-dark ms-2"> <i className="fa fa-sign-in me-1"></i>Logout</Link>
        )
    }else{
        
    }
    return(
       <div> 
        <nav class="navbar navbar-expand-lg navbar-light py-10" style={{
            backgroundColor:"#0d0d0d"
        }}>
            <div className="container">
            <a class="navbar-brand" href="#" style={{ fontSize: "1.5rem", textDecoration:"none" , color: "green"}}>
              PLANT STORE
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse links" id="navbarSupportedContent" style={{
                display:"flex",
                justifyContent:"space-between"
            }}>
                <ul class="navbar-nav mw-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Products</a>
                </li>
                </ul>
               <div className="buttons" >

                    {buttons}
                   
                    <Link to="/cart" className="btn btn-outline-dark"> <i className="fa fa-shopping-cart ms-2"></i>Cart ({totalItems})</Link>
               </div>
            </div>
            </div>
        </nav>
        </div>
    )

}

export default NavBar;