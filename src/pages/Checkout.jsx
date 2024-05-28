import React from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
  const cartIds = useSelector(state => state.product.cart);
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

  const cartItems = items.filter(item => cartIds.includes(item.id));

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Checkout</h1>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Total: ${getTotal()}</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Shipping Address:</label>
          <textarea className="w-full p-2 mt-2 border rounded"></textarea>
        </div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Confirm and Pay
        </button>
      </div>
    </div>
  );
}

export default Checkout;
