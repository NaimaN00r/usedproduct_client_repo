import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categorie/Categories/Categories';
import Servey from '../Servey/Servey';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <Servey></Servey>
        </div>
    );
};

export default Home;