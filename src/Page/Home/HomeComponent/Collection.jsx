import { Link } from 'react-router';
import pic1 from '../../../assets/image/12.jpg';
import pic2 from '../../../assets/image/13.jpg';
import pic3 from '../../../assets/image/14.jpg';

const Collection = () => {
    return (
        <div>
            <div className='container mx-auto px-18 py-8'>
                <div className='grid grid-cols-3 gap-6'>
                    <div style={{backgroundImage:`url(${pic1})`}} className='bg-cover h-[25vh] bg-no-repeat '>
                        <h1 className='text-white font-semibold text-3xl grid justify-end pt-10 pr-6'>Women's <br />Collection</h1>
                         <div className='flex justify-end  pr-6'><button className='bgp px-4 py-2 rounded-md text-white '><Link to="/shop">Shop Now</Link></button></div>
                    </div>
                        
                    <div style={{backgroundImage:`url(${pic2})`}} className='bg-cover h-[25vh] bg-no-repeat '>
                        <h1 className='text-white font-semibold text-3xl grid justify-end pt-10 pr-6'>Children's <br />Collection</h1>
                         <div className='flex justify-end  pr-6'><button className='bgp px-4 py-2 rounded-md text-white '><Link to="/shop">Shop Now</Link></button></div>
                    </div>
                        
                    <div style={{backgroundImage:`url(${pic3})`}} className='bg-cover h-[25vh] bg-no-repeat '>
                        <h1 className='text-white font-semibold text-3xl grid justify-end pt-10 pr-6'>Men's <br />Collection</h1>
                         <div className='flex justify-end  pr-6'><button className='bgp px-4 py-2 rounded-md text-white '><Link to="/shop">Shop Now</Link></button></div>
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Collection;