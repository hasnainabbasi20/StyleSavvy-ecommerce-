import React from 'react';
import Button from '../components/Button';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Trusted from '../components/Trusted';
import Review from './Review';
import Slider from 'react-slick';

function Homepg() {
  const reviewItem = [
    {
        name : "Emily Cooper",
        imgSrc:"/images/review1.jpeg",

    },
    {
        name : "Lily Anderson",
        imgSrc:"/images/review2.jpeg",

    },
    {
        name : "Abdul Maalik",
        imgSrc:"/images/review3.jpeg",

    },
    {
        name : "Hitesh ",
        imgSrc:"/images/review4.jpeg",

    },
    {
        name : "Mitchel Taylor",
        imgSrc:"/images/review5.jpeg",

    },
    {
        name : "Hannah kazrk",
        imgSrc:"/images/review6.jpeg",

    },]
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300, // Adjust this breakpoint according to your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
const featImg = [
  {
    src:"/images/shirt.jpeg"
  },
  {
    src:"/images/glasses.jpeg"
  },
  {
    src:"/images/scent.jpeg"
  },
  {
    src:"/images/jonejo.jpeg "
  },
  {
    src:"/images/shoes.jpeg "
  },
  {
    src:"/images/shirtgirl.png "
  },
]
  
    return ( 
    <>
 <div className="w-full h-full overflow-hidden">
<Hero herotext='StyleSaVvy Store'/>
<Services/>
<Trusted/>

<div className="md:w-9/12 5/6 mx-auto" >
<h3 className="text-xl md:text-3xl font-bold py-5 md:py-10 mx-auto text-center">Featured Products</h3>
  <div className={`mx-auto   w-full md:gap-1 grid  `} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr)) ' }}>
          
          { featImg.map((item)=>{ 
            
            return <img src={item.src} className='md:h-72 md:w-72 w-56 h-56 my-9 mx-5 md:mx-0 shadow-lg shadow-gray-500'></img>})}
          </div>

  </div>


<div className='md:w-4/6 mx-auto my-14 h-full'>



  <h3 className="text-xl md:text-3xl font-bold py-5 md:py-10 mx-auto text-center">Our Customers' Reviews</h3>
<Slider {...settings} className=''>

{reviewItem.map((item)=>( <Review name={item.name} imgSrc={item.imgSrc} />))}
</Slider>
</div>

</div>
    </>
  );
}

export default Homepg;