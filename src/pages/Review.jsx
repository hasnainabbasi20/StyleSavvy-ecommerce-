import React from 'react';
function Review({
    name = "Emily",
    imgSrc = "/images/review1.jpeg"
}) {
    return ( <>
    <div className=' p-5 bg-slate-100 w-[200px] rounded-lg shadow-lg shadow-orange-800 text-center ml-10 '  >

        <div className='px-10 py-4 bg-blue-700 rounded-lg'>
            <img src={imgSrc} className='rounded-full h-20' alt="" />
        </div>
        <h5 className='font-extrabold text-black py-1 text-xl'> {name}</h5>

        <p className=' text-sm text-slate-600'>" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, nesciunt. Lorem ipsum dolor sit amet."</p>
         </div>
    
    </> );
}

export default Review;