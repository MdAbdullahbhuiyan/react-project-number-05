import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Component/SharedComponent/Header/Header';
import Footer from '../../FooterComponent/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div>
               <Header></Header>
                 <Outlet></Outlet>
                 <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;