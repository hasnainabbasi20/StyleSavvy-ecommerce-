// import React from 'react';
// import { useSelector } from 'react-redux';

// function Cartpg() {
//     const  cartIds = useSelector(state => state.product.cart )
//     const  items = [
//         {
//           name:"Black Oversied Shirt",
//           imgSrc:"/images/shirt1.jpeg",
//           price : 10,
//           id : 1,
//         },
//         {
//           name:"Black Oversied Shirt",
//           imgSrc:"/images/shirt1.jpeg",
//           price : 23,
//           id : 2,
//         },
//         {
//           name:"Black Oversied Shirt",
//           imgSrc:"/images/shirt1.jpeg",
//           price : 133,
//           id : 3,
//         },
//         {
//           name:"Black Oversied Shirt",
//           imgSrc:"/images/shirt1.jpeg",
//           price : 19,
//           id : 4,
//         },
//         {
//           name:"Black Oversied Shirt",
//           imgSrc:"/images/shirt1.jpeg",
//           price : 10,
//           id : 5,
//         },
//         {
//           name:"Black Oversied Shirt",
//           imgSrc:"/images/shirt1.jpeg",
//           price : 10,
//           id : 6,
//         },
//         {
//           name:"Black Oversied Shirt",
//           imgSrc:"/images/shirt1.jpeg",
//           price : 10,
//           id : 7,
//         },
//         {
//           name:"Black Oversied Shirt",
//           imgSrc:"/images/shirt1.jpeg",
//           price : 10,
//           id : 8,
//         },
//         {
//           name:"Black Oversied Shirt",
//           imgSrc:"/images/shirt1.jpeg",
//           price : 10,
//           id : 10,
//         },
//         {
//           name:"Black Oversied Shirt",
//           imgSrc:"/images/shirt1.jpeg",
//           price : 10,
//           id : 15,
//         },
//         {
//           name:"Black Oversied Shirt",
//           imgSrc:"/images/shirt1.jpeg",
//           price : 10,
//           id : 14,
//         },
//       ]
//     return ( 
//         <div>idddd{cartIds ? cartIds[4] :""}</div>
//      );
// }

// export default Cartpg;


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/slice'; // Adjust the import path accordingly
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate

function Cartpg() {
  const cartIds = useSelector(state => state.product.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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


  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const updateQuantity = (id, delta) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] + delta, 1)
    }));
  };

  const deleteItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * quantities[item.id], 0);
  };

  const proceedToCheckout = () => {
    navigate('/checkout'); 
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.map(item => (
          <div key={item.id} className="flex  items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
            <img src={item.imgSrc} alt={item.name} className="w-15 h-14 object-cover rounded mb-4 md:mb-0" />
            <div className="md:ml-4 flex-grow">
              <h2 className="text-sm md:text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center ml-3 mb-4 md:mb-0">
              <button 
                onClick={() => updateQuantity(item.id, -1)} 
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                -
              </button>
              <span className="mx-2">{quantities[item.id]}</span>
              <button 
                onClick={() => updateQuantity(item.id, 1)} 
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
              >
                +
              </button>
            </div>
            <button 
              onClick={() => deleteItem(item.id)} 
              className="bg-red-500 text-white md:px-4 md:py-2 px-1 py-1 ml-2 mb-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
        <h2 className="text-xl md:text-2xl font-bold mt-6">Total: ${getTotal()}</h2>
        <button 
          onClick={proceedToCheckout} 
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cartpg;

