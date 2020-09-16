import React from "react"

const isOperator = val => {
    return !isNaN(val) || val === "=" || val === "."
}
export const Button = props =>
 <div 
    className={`button ${!isOperator(props.children) && 'Operator'}`} 
    onClick={() => props.handleClick(props.children)}>
   {props.children}
 </div>


