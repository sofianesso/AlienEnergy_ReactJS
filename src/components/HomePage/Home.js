import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Products from '../pages/Products/Products'
import Bottles from '../../../images/allflavs.png'

import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'

function Home() {
    return(
        <>
        <HeroSection {...homeObjOne} />
        <img src={Bottles} alt="Bottles" />

        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjTwo} />
        <Products />
        <HeroSection {...homeObjFour} />
        </>
    );
}

export default Home