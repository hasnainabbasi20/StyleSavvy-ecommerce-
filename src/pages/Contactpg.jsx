import React from 'react';

function Contact() {
    return ( 
        <div className="bg-gradient-to-b from-blue-100 to-slate-300 min-h-screen flex items-center justify-center">
            <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 md:p-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Get In Touch</h1>
                    <p className="text-gray-700 mb-8">Have a question or feedback? We're here to help!</p>
                    <div className="flex items-center mb-6">
                        <svg className="w-6 h-6 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V22m0-9H2a10 10 0 0018 0h-9zm9 0H12m9-9v9h-9V4h9zM12 11v2m-9-2H4a8 8 0 018 8h0a8 8 0 018-8h-3m-4 9a4 4 0 110-8 4 4 0 010 8z"></path>
                        </svg>
                        <p className="text-gray-800 font-medium">Email: contact@example.com</p>
                    </div>
                    <div className="flex items-center mb-6">
                        <svg className="w-6 h-6 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        <p className="text-gray-800 font-medium">Phone: +1 (123) 456-7890</p>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 17a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10z"></path>
                        </svg>
                        <p className="text-gray-800 font-medium">Address: 123 Main St, City, Country</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

