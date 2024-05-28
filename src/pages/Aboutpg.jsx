// import React from 'react';
// import Hero from '../components/Hero';

// function Aboutpg() {
//     return (  <>
//     <div className='md:min-h-screen mb-10'>
//    <Hero herotext='About StyleSaVvy' />
//    </div>
//     </>);
// }

// export default Aboutpg;


import React from 'react';
import Hero from '../components/Hero';

function Aboutpg() {
    return (
        <>
            <div className='md:min-h-screen mb-10'>
                <Hero herotext='About StyleSaVvy' />
                <div className="container mx-auto pt-20 pb-12 px-4">
                    <div className="max-w-3xl mx-auto text-gray-800">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
                        <p className="mb-6">StyleSaVvy started with a simple idea - to provide fashionable clothing at affordable prices. What began as a small boutique has now grown into a global brand, with thousands of customers around the world.</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="mb-6">Our mission is to empower individuals to express themselves through fashion. We believe that everyone deserves to look and feel their best, regardless of their budget or body type. That's why we offer a wide range of styles and sizes, ensuring that there's something for everyone.</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li className="mb-2">Quality: We are committed to providing high-quality products that our customers love.</li>
                            <li className="mb-2">Inclusivity: We believe that fashion should be inclusive and accessible to all.</li>
                            <li className="mb-2">Sustainability: We strive to minimize our environmental impact by offering eco-friendly options and reducing waste.</li>
                            <li className="mb-2">Community: We value our community of customers, employees, and partners, and seek to foster meaningful connections.</li>
                        </ul>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
                        <p>If you have any questions or feedback, we'd love to hear from you! You can reach out to us via email at <a href="mailto:info@stylesavvy.com" className="text-blue-500">info@stylesavvy.com</a> or give us a call at <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aboutpg;
