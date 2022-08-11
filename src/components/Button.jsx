import '../componentsStyle/buttonStyle.css';
import React from "react";

function Button(props){
  const isOperator = (valor) =>{
    return isNaN(valor) && (valor !== ',') && (valor !== '=');
  };

  return(
      <div className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.clicOperator(props.children)}>
        {props.children}
      </div>
  );
}

export default Button;