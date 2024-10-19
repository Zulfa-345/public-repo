import "./Hero.css"
import { Button } from "react-bootstrap"
const Hero=()=>{
    return <div className="vdo">
    <video width="100%" src="https://www.volvocars.com/files/cs/v3/assets/blt618dcb179a89242d/blt67d06c56ca6d4f5b/6572f9b3cc2f77000dc17180/homepage-hero-video-desktop-21x9.mp4?branch=prod_alias" alt="video" loop autoPlay muted/>

    <div className="textontop">
        <h4>A new era for safety</h4>
        <h2>Does How you Feel Affect How You Drive</h2>
        <Button variant="light">Learn More </Button>
        </div>
    </div>
}
export default Hero