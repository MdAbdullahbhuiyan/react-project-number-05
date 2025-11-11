import React, { useEffect, useState } from 'react';

const useData = () => {
     const[category,setcategory]=useState([])
      const[product,setproduct]=useState([])
        useEffect(()=>{
            fetch('Category.json')
            .then(res=>res.json())
            .then(data=>setcategory(data))
        },[])
        
            useEffect(()=>{
                fetch('/Product.json')
                .then(res=>res.json())
                .then(data=>setproduct(data))
            },[])
    return (
        {category,product}
    );
};

export default useData;