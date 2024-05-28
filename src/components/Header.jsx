import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { } from 'react-icons/di';

function Header() {
    const [clicked,setClicked] = useState(true)
    const handleMenu = ()=>{
        if(clicked === true) {setClicked(false)}
        if(clicked === false){
            setClicked(true)
        }
    }
    const navitems = [
        {
            name:"HOME",
            slug:"/",
        },
        {
            name:"CONTACT",
            slug:"/contact",
        },
        {
            name:"ABOUT",
            slug:"/about",
        },
        {
            name:"PRODUCTS",
            slug:"/products",
        },

    ]
    return ( 
        <nav className='bg-slate-100  '>
             
        <div className='flex md:justify-between '>

            <span className='py-4 pl-5'><NavLink to="/">STYLESAVVY</NavLink></span>

            <div className='flex   '>
                <ul className={`md:flex  mt-11  md:m-0   bg-slate-100 md:w-auto absolute text-sm font-semibold right-0 md:right-16 ${clicked ? "mt-[-300px]":""} `}>
                    {navitems.map((item)=>(<NavLink to={item.slug} key={item.name} ><li className=" w-screen md:w-auto px-7 text-center  py-4 hover:bg-slate-300">{item.name}</li></NavLink>))}
                                                             
                   
                </ul>
                <ul className='flex absolute text-2xl  right-0'>
                <NavLink to="/cart" className="px-2 py-3 " ><li><IoCartOutline /></li></NavLink>
                <li onClick={()=>handleMenu()} className='md:hidden py-3 px-2 md:px-6'> { clicked ? <IoMenuSharp/>:<IoCloseSharp/>} </li>
                </ul>
            </div>
        </div>

        </nav>
     );
}

export default Header;