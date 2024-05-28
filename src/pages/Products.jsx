import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import Button from '../components/Button';
import Product from '../components/Product';
import { useDispatch,useSelector } from 'react-redux';
import { sendId,addToCart } from '../redux/slice';
function Products() {
  const dispatch = useDispatch()
  
  const  selectedId = useSelector(state => state.product.details?.id )
  const  items = [
    {
      name:"Black Oversied Shirt",
      imgSrc:"/images/shirt1.jpeg",
      price : 10,
      id : 1,
    },
    {
      name:"Blue Oversied Shirt",
      imgSrc:"/images/shirt2.jpeg",
      price : 5,
      id : 2,
    },
    {
      name:"Yellow Oversied Shirt",
      imgSrc:"/images/shirt3.jpeg",
      price : 13,
      id : 3,
    },
    {
      name:"Cyan Oversied Shirt",
      imgSrc:"/images/shirt4.jpeg",
      price : 14,
      id : 4,
    },
    {
      name:"Maroon Oversied Shirt",
      imgSrc:"/images/shirt5.jpeg",
      price : 12,
      id : 5,
    },
    {
      name:"Brown Oversied Shirt",
      imgSrc:"/images/shirt6.jpeg",
      price : 9,
      id : 6,
    },
    {
      name:"White Oversied Shirt",
      imgSrc:"/images/shirt7.jpeg",
      price : 10,
      id : 7,
    },
    {
      name:"Orange Oversied Shirt",
      imgSrc:"/images/shirt8.jpeg",
      price : 11,
      id : 8,
    },
    {
      name:"Black Oversied Shirt",
      imgSrc:"/images/shirt1.jpeg",
      price : 10,
      id : 9,
    },
    {
      name:"Green Oversied Shirt",
      imgSrc:"/images/shirt4.jpeg",
      price : 10,
      id : 10,
    },
    {
      name:"Set of Seven Plane Tees ",
      imgSrc:"/images/tshirt1.jpeg",
      price : 50,
      id : 11,
    },
    {
      name:"Set of 3 Low Shade Shirts",
      imgSrc:"/images/tshirt2.jpeg",
      price : 40,
      id : 12,
    },
    {
      name:"Peach Colour T Shirt",
      imgSrc:"/images/tshirt3.jpeg",
      price : 6,
      id : 13,
    },
    {
      name:"White Stylish T Shirt",
      imgSrc:"/images/tshirt4.jpeg",
      price : 15,
      id : 14,
    },
    {
      name:"Black 'The Boys' Printed Shirt ",
      imgSrc:"/images/tshirt5.jpeg",
      price : 18,
      id : 15,
    },
    {
      name:"Green Classy Shirt",
      imgSrc:"/images/tshirt6.jpeg",
      price : 10,
      id : 9,
    },
    {
      name:"Black & Blue Shirt",
      imgSrc:"/images/tshirt7.jpeg",
      price : 20,
      id : 17,
    },
    {
      name:"Simple Black Shirt",
      imgSrc:"/images/tshirt8.jpeg",
      price : 10,
      id : 18,
    },
    {
      name:"Custom Printed Shirt",
      imgSrc:"/images/tshirt9.jpeg",
      price : 10,
      id : 19,
    },
    {
      name:"Black and White Shirt",
      imgSrc:"/images/tshirt10.jpeg",
      price : 10,
      id : 20,
    },



  ]
  const [added,setAdded] = useState(false)
  const [display,setDisplay] = useState(false)
  const productpage = (id) =>{
    setDisplay(!display)
    dispatch(sendId(id))
  }
  const currentItem =  items.find(item => item.id == selectedId)

  const addToCartArray = (id)=>{
    dispatch(addToCart(id))
    setAdded(!added)

  }
    return (
        <>

        
        <div className="">
          <h1 className='text-center font-extrabold text-3xl py-10'>Our Products</h1>
<div className={`md:mx-auto md:my-6 ml-6 md:w-10/12 w-full md:gap-9 grid  ${display == true ? "":"overflow-hidden"}`} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr)) ' }}>
          
          { items.map((item)=>{ 
            
            return <Product price={item.price} onClick={()=>productpage(item.id)}  imgSrc={item.imgSrc} key={item.id} productName={item.name}/>})}
          </div>

          <div className={`h-full w-full bg-white fixed top-0 left-0 right-0 bottom-0 overflow-auto ${ display == false ? "hidden":"md:flex"}`}>
<div className="text-black md:right-14 md:top-16 top-5 right-6 absolute ` text-3xl" onClick={()=>{setDisplay(false);added==true? setAdded(false):setAdded(true)}}><IoCloseSharp /></div>
<div className="md:mt-20 md:flex mt-10">
<div className="md:w-6/12 justify-center items-center ">

  <img src={currentItem?.imgSrc} className='md:w-3/6 w-5/6 mx-auto  ' alt="" />
  <h3 className='text-center font-bold text-2xl md:text-3xl pt-5'>{currentItem?.name}</h3>
  <div className='mx-auto w-fit pt-5'>
  <button className="bg-orange-600 hover:bg-orange-400 h-10 w-10 mx-3 " onClick={()=>(alert('Sorry this colour is not available!!'))}></button>
  <button className="bg-blue-500 hover:bg-blue-400 h-10 w-10 mx-3 " onClick={()=>(alert('Sorry this colour is not available!!'))}></button>
  <button className="bg-pink-600 hover:bg-pink-400 h-10 w-10 mx-3" onClick={()=>(alert('Sorry this colour is not available!!'))}></button>
  <button className="bg-yellow-600 hover:bg-yellow-400 h-10 w-10 mx-3" onClick={()=>(alert('Sorry this colour is not available!!'))}></button></div>
  <div className="w-fit mx-auto pt-4">
    <button className="border border-5 border-black h-8 w-8 font-bold border-double hover:w-9 hover:h-9 mx-5">md</button>
    <button className="border border-5 border-black h-8 w-8 font-bold border-double hover:w-9 hover:h-9 mx-5">sm</button>
    <button className="border border-5 border-black h-8 w-8 font-bold border-double hover:w-9 hover:h-9 mx-5">xl</button></div>
</div>

<div className="md:w-6/12 bg-white pl-9">
<h3 className=' font-bold text-2xl md:text-3xl pt-5'>{currentItem?.name}</h3>
<p className="pt-8 md:pr-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, exercitationem? Cupiditate, qui natus eius illo iusto, fuga blanditiis eveniet magnam labore, voluptatibus eaque incidunt adipisci?</p>
<h3 className=' font-bold text-3xl pt-5 text-orange-500'>Price:{currentItem?.price}$</h3>
<h3 className=' font-bold text-lg line-through pt-1 text-slate-600'>Price:{currentItem?.price+15}$</h3>
<div className='flex pt-9'><span className='font-semibold text-red-600'>Wishlist</span><span className='pl-14  font-bold text-3xl  '><IoHeartSharp className='text-red-400 hover:text-red-600' /></span></div>
<Button className={`w-4/6 mx-auto items-center text-center h-12 my-10 ${added == true? "bg-green-600 hover:bg-green-500":"bg-blue-700 hover:bg-blue-600"}`} text={added == true? 'Added to Cart' : 'Add to Cart'} onClick={()=>addToCartArray(currentItem.id)}></Button>
</div>
</div>
</div>
        </div>
        </>
      );
}

export default Products;