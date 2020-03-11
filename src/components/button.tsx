import React from 'react';

// interface buttonProps {
//     styles: any;
//     text: String;
//     onClick: any;
// }

const Button = ({styles,text,onClick}: {styles: any, text: String, onClick: any}) => {
    //const {styles, text, onClick} = props;
    return (  
     <button 
     type="button" 
     className = {styles}
     onClick = {onClick}>{text}</button>
    );
}
 
export default Button;