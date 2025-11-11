import React from 'react';
import Hero from './HomeComponent/Hero';
import HomeCategory from './HomeComponent/HomeCategory';
import PopularProduct from './HomeComponent/PopularProducts/PopularProduct';
import LatestExclusive from './HomeComponent/LatestExclusive';
import NewProduct from './HomeComponent/NewProduct';
import Collection from './HomeComponent/Collection';
import Support from './HomeComponent/Support';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeCategory></HomeCategory>
            <PopularProduct></PopularProduct>
            <LatestExclusive></LatestExclusive>
            <NewProduct></NewProduct>
            <Collection></Collection>
            <Support></Support>
        </div>
    );
};

export default Home;