import "./BackTop.css"
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CgEnter } from "react-icons/cg";
const BackTop=()=>{
    return <div style={{marginTop:"200px"}}>
           <h3 style={{marginLeft:"600px"}}><td>Back To Top</td></h3>
           <table cellPadding="20px" >
            <tr style={{color:"grey"}}>
                <td>Help&Support</td>
                <td>Contact Us</td>
                <td>Volvo Cars App</td>
            </tr>
<tr>
    <td>Book a Service</td>
    <td>Contact Volvo</td>
    <td>App store</td>
</tr>
<tr>
    <td>Support & Manuals</td>
    <td>Find a Dealer</td>
    <td>Google play</td>
</tr>
<tr>
    <td></td>
    <td>Book a test drive</td>
</tr>
            </table>
            <ul className="gridTop">
                <li><IoLogoFacebook /></li>
                <li><FaYoutube /></li>
                <li><FaThreads /></li>
                <li><FaInstagram/></li>
            </ul>
            <ul className="Blist">
                <li className="Blist1">Cookies</li>
                <li className="Blist1">Legal</li>
                <li className="Blist1">Privacy</li>
            </ul>
            <p>Copyright © 2024 Volvo Car Corporation (or its affiliates or licensors)</p>
    </div>
}
export default BackTop