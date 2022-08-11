import '../componentsStyle/clearButtonStyle.css';
import React from "react";

const ClearButton = (props) => (
    <button className='button-clear'
    onClick={() => props.clicOperator('')}>
        {props.children}
    </button>
);

export default ClearButton; 