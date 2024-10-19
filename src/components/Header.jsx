import "./Header.css"
import { FaRegUserCircle } from "react-icons/fa";
const Header=()=>{
    return <div className="container">
        <div className="header-logo"><img src="https://www.volvocars.com/static/shared/images/volvo-spread-wordmark.svg" width="120" alt="volvocar"/></div>
   <div> 
    <ul className="nav">
<li>Our Cars</li>
<li>Shop</li>
<li>Owners</li>
<li>About us</li>
    </ul>
    </div>
    <div><div className="icons"><FaRegUserCircle />
        <button>Sign Up</button></div></div>
   </div>
}
export default Header 