import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { Ri24HoursFill, RiSecurePaymentLine } from 'react-icons/ri';


function Services() {
    return ( <>
    
    <div className="grid  md:grid-cols-3  gap-6  md:w-6/12 mx-auto pt-9 justify-center ">

        <div className=" py-12 bg-slate-100 text-center rounded-2xl ">
            <TbTruckDelivery className='mx-auto text-blue-500 text-2xl' />
            <h3 className='text-sm font-semibold pt-3 text-blue-900'>Super fast and free delivery</h3>
        </div>

        <div className="  grid grid-rows-2 gap-2">
            <div className="bg-slate-100 py-3 text-center rounded-2xl">
                <MdSecurity className='mx-auto text-blue-500 text-2xl'/> 
            <h3 className='text-sm font-semibold pt-3 text-blue-900' >Non-contact Shipping</h3></div>

            <div className="bg-slate-100 py-3 text-center rounded-2xl">
                <GiReceiveMoney className='mx-auto text-blue-500 text-2xl'/>
                <h3 className='text-sm font-semibold pt-3 text-blue-900'>Money Back Guarantee</h3>
            </div>
        </div>

        <div className="py-12 bg-slate-100 text-center rounded-2xl">
            <RiSecurePaymentLine className='mx-auto text-blue-500 text-2xl'/>
            <h3 className='text-sm font-semibold pt-3 text-blue-900'>Super Secure Payment System </h3>
        </div>

    </div>
    </> );
}

export default Services;