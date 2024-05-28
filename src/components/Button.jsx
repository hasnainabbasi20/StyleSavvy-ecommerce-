import React from 'react';
function Button({text,className,onClick}) {
    return (  <>

    <button className={`bg-blue-400 hover:bg-blue-500 border-2  text-white ${className}`} onClick={onClick}>{text}</button>
    
    </>);
}

export default Button;