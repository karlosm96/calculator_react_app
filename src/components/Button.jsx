import '../componentsStyle/buttonStyle.css';
import React from "react";

function Button(props){
  const isOperator = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  const isXchar = (valor) => {
    return valor==='X';
  };

  return(
      <div className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => isXchar(props.children) ? props.clicOperator('*')  : props.clicOperator(props.children)}>
        {props.children}
      </div>
  );
}

export default Button;