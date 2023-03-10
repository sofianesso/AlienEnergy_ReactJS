import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { homeObjTwo} from './Data';

function Products() {
  return (
    <>
      <HeroSection {...homeObjTwo} />

    </>
  );
}

export default Products;