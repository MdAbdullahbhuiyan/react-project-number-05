import React from 'react';
import logo from '../../../assets/image/logo.png'
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';
const MidHeader = () => {
    return (
        <div>
            <div className='flex justify-between items-center py-4 px-4 w-11/12 mx-auto cs'>

                <div>
                    <img className='w-24' src={logo} alt="" />
                </div>
                <div className='items-center gap-2 flex px-4 py-3 rounded-md border w-100 border-gray-200 '>
                    <CiSearch />
                    <input className='focus-within:outline-0' type="Search" required placeholder='Search...' />
                </div>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-2 '>
                        <h1 className='text-3xl'><CiUser /> </h1>
                        <div>
                            <h1 className='text-xs'>Account</h1>
                            <h1>Login</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 ' >
                        <CiShoppingCart  className='text-3xl' />
                        <div>
                            <h1 className='text-xs'>Cart</h1>
                            <h1>Login</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidHeader;