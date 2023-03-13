import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Products from '../../components/Products/Products'
import {homeObjTwo, homeObjOne} from './Data'

function Home() {
    return(
        <>
        <HeroSection {...homeObjOne} />
        <Products/>
        <HeroSection {...homeObjTwo} />


        </>
    );
}

export default Home
