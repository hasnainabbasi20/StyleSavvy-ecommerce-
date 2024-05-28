import React from 'react';

function Footer() {
    return (
        <footer className="bg-slate-200 py-8 text-center">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
