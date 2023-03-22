import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Products from '../../components/Products/Products'
import {homeObjOne, homeObjTwo} from './Data'

function Home() {
    return(
        <>
        <HeroSection {...homeObjTwo}/>
        <HeroSection {...homeObjOne}/>
        </>
    );
}

export default Home
