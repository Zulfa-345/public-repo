import "./Quicklink.css" 
const Quicklink=()=>{
    return <div className="imgstyle">
       <img src="./volvocar.jpg" width="100%" height="auto" alt="volvooo"></img>
        <div className="overimg"> <h1>XC40 Recharge. Pure Electric.</h1>
         <button className="buttonstyle">Book a test drive</button>
     </div>

        <div style={{marginTop:"60px"}}>
            <h3>Quick Link</h3>
         <div className="quickGrid">
            <div class="h4 pb-2 mb-4 text-info border-bottom border-info">
             Test Drive
             </div>
             <div class="h4 pb-2 mb-4 text-info border-bottom border-info">
             Buy Online
             </div>
         </div>
         <div className="quickGrid">
         <div class="h4 pb-2 mb-4 text-info border-bottom border-info">
           Retailers
           </div>
           <div class="h4 pb-2 mb-4 text-info border-bottom border-info">
           Support
           </div>
         </div>
            <h6 style={{color:"grey"}}>*Above mentioned prices are Ex-Showroom Prices. Subject to change</h6>
        </div>
    </div>
}
export default Quicklink