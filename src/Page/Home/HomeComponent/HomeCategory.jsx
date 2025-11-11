import useData from "../../../Hooks/usedata";



const HomeCategory = () => {
      
    const{category} =useData()
   
    return (
        <div>
            <div>
                <div className='grid grid-cols-5 gap-6 my-20  w-11/12 mx-auto'>  
                    {category.map(cate=> 
                        <div className=' grid justify-center rounded-2xl py-5 items-center bg-[#F3F4F6] overflow-hidden '>
                            <img className='w-18 h-20 overflow-hidden' src={cate.image} alt="" />
                            <div className='text-center cs'>{cate.name}</div>
                            <div className='text-center cs text-xs'>{cate.items} Items</div>
                            </div>
                        
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;