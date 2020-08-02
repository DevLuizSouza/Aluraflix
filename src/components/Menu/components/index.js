import React from 'react';


function ButtonLink(props){
    // props => {className: "o que alguém vai passar"}
    console.log(props)
    return(
    <a className = {props.className} href= {props.href}>
        {props.children}
     </a>  
    );
}

export default ButtonLink; // Pra poder importar em outros lugares 