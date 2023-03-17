import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Products from '../../components/Products/Products'
import {homeObjOne, homeObjFive} from './Data'

function Home() {
    return(
        <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjFive}/>
        
        


        </>
    );
}

export default Home
