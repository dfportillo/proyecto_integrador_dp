import './navbar.css'
import {Link} from 'react-router-dom'


function Navbar({isCart=false}){
    return(
        <>
            <nav>
                <div className="nav-wrapper">
                    <span className="logo">MioMio</span>
                    {
                        (isCart)? (<Link className="cart-button" to='/Cart'>carrito</Link>):
                        (<span className="sub-title">Tu Compra</span>)
                    }
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar