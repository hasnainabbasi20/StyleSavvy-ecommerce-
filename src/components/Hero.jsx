import React from 'react';
import ecom from '../Images/ecom.jpg'
import Button from './Button';
import { NavLink } from 'react-router-dom';


function Hero({herotext="StyleSaVvy"}) {
    return ( <>

    <div className=' md:flex pt-32'>
        <div className="md:w-6/12  flex ">
            <div className=' md:pl-24 pl-10 pr-10 max-w-96 object-cover md:mx-auto'>

<p className='text-blue-500 font-semibold'>Welcome To</p>
<h1 className="font-semibold text-3xl mr-4 pb-5">{herotext}</h1>
<p className='text-sm'>Lorem, ipsum culpa possimus nisi maiores, inventore quidem ea, blanditiis, voluptate nam laboriosam officiis ad esse doloribus. Aliquam.</p>

<NavLink to="/products"><Button className="px-5 py-3 mt-4" text="Shop Now"/> </NavLink>
</div>
        </div>


        <div className="md:w-6/12 w-auto">
             <img src='/images/heroimg.jpg' alt="" className='md:h-56 md:ml-4 px-10 py-5 object-cover' />
        </div>
    </div>
    
    </> );
}

export default Hero;