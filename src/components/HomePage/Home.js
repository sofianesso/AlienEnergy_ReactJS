import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Products from '../../components/Products/Products'
import {homeObjOne} from './Data'

function Home() {
    return(
        <>
        <HeroSection {...homeObjOne} />

        </>
    );
}

export default Home
