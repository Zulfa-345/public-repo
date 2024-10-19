import "./electrify.css"
const electrify=()=>{
return <div style={{marginTop:"200px"
}}>
    <h1 style={{textAlign:"center"}}> Are you ready to electrify your ride?</h1>
    <p>Here’s what you need to know to confidently go electric and find the right Volvo electric car for you.</p>
    <div className="grid">
        <div>
        <h3>Fully electric cars</h3>
        <p>Our fully electric cars offer emissions-free driving without compromising range and power.</p>
        </div>
        <div>
      <h3 >Electric charging</h3>
      <p>Charging your electric car at home and on the road can be easy, fast and cost-effective.</p>
        </div>
    </div>

        <ul className="Elist">
            <li className="Elist1">Fully Electric cars</li>
            <li className="Elist1">Charging your car</li>
        </ul>
    <div className="gridnew">
        <img className="image" src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt392be036ddf001f4/65d480fbc33ff1000d625582/ex40_tilesbundle_16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1920&imdensity=1" alt="car1"></img>
        <img className="image" src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt59ccd4cc6e3b4e18/6583d8bae209f3000db84729/c40-taillightandcharging.png?branch=prod_alias&auto=webp&iar=0&w=1920&imdensity=1" alt="car2"></img>
    </div>
</div>
}
export default electrify 