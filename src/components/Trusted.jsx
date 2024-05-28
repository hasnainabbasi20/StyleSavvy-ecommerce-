import React from 'react';
import image from '../Images/image.png'
import image1 from '../Images/trusted2.png'
import image2 from '../Images/trusted3.png'
import image3 from '../Images/trusted4.png'
import image4 from '../Images/trusted5.png'
function Trusted() {
    return ( <>
    <div className=' bg-slate-100 h-4/12 my-28'>
        <p className='text-center  font-semibold text-slate-700 pt-7'>Trusted by 100+ companies</p>
        <div className="md:w-7/12 flex  mx-auto justify-between py-14 grayscale-0 px-10">

<div><img src={image} alt="" className=' w-10 h-10 grayscale-0'/></div>

<div><img src={image2} alt="" className=' w-14 h-10 grayscale-0'/></div>

<div><img src={image3} alt="" className=' w-14 h-10 grayscale-0'/></div>

<div><img src={image4} alt="" className=' w-14 h-10 grayscale-0'/></div>

<div><img src={image1} alt="" className=' w-14 h-10 grayscale-0'/></div>





        </div>
    </div>
    </> );
}

export default Trusted;