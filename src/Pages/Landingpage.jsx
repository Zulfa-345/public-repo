import { Fragment } from "react";
import Header from "../components/Header"
import  Hero  from "../components/Hero";
import LearnMore from "../components/Learnmore"
import AllModel from "../components/AllModels";
import WhyVolvo from "../components/WhyVolvo";
import Electrify from "../components/Electrify";
import BackTop from "../components/BacktoTop";
import Quicklink from "../components/QuickLink";


const LandingPage=()=>{
    return <Fragment>
           <Header/>
           <LearnMore/>
           <Hero/>
           <AllModel/> 
           <WhyVolvo/>
           <Electrify/>
           <Quicklink/>
           <BackTop/>
    
    </Fragment>
}
export default LandingPage