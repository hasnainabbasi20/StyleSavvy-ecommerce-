import React from 'react';
import { NavLink } from 'react-router-dom';
function Product({
    imgSrc = "/images/shirt1.jpeg",
    price = 10,
    productName = "Oversized Shirt",
    onClick = onClick,
}) {
    return (  <>
    <div className="md:w-[180px] w-[125px] md:p-4 p-2 md:mx-6 mx-1 my-5 shadow-md shadow-gray-500 ">
        <img src={imgSrc} alt="" className='w-full' />
        <div className='md:text-xl pt-1'><h4>{productName}</h4></div>
        <div className='text-orange-600 md:text-2xl font-semibold pt-1'>Price :{price}$</div>
        <div className='pt-1'> <NavLink onClick={onClick}><button className='w-full bg-orange-600 md:h-10 text-white  hover:bg-orange-500'>Buy Now</button></NavLink></div>
    </div>
    </>);
}

export default Product;