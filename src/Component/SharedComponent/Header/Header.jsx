import React from 'react';
import TopHeader from './TopHeader';
import MidHeader from './MidHeader';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div>
            <div>
                <TopHeader></TopHeader>
                <MidHeader></MidHeader>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;