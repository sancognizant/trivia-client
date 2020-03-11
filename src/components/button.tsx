import React from 'react';


const Button = ({styles,text,onClick}: {styles: any, text: string, onClick: any}) => {
    return (  
     <button 
     type="button" 
     className = {styles}
     onClick = {onClick}>{text}</button>
    );
}
 
export default Button;