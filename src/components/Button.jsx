import React from "react";
import Display from "./Display";
import { useState } from "react";

export default function Buttons()
{
    let mul = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/;
    let div = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/; 
    let add = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/; 
    let sub = /(\d+(?:\.\d+)?) ?\- ?(\d+(?:\.\d+)?)/;  
   
    function calculate(calc)
    {
        let equation = calc.toString();

        if(mul.test(equation))
        {
            let myEquation = equation.replace(mul, function(match, a, b) {
                return Number(a) * Number(b);
            });
            return calculate(myEquation);
        }
        else if(div.test(equation))
        {
            let myEquation = equation.replace(div, function(match, a, b) {
                if(b != 0)
                    return Number(a) / Number(b);
                else
                    return Error();
            });
            return calculate(myEquation);
        }
        else if(add.test(equation))
        {
            let myEquation = equation.replace(add, function(match, a, b) {
                return Number(a) + Number(b);
            });
            return calculate(myEquation);
        }
        else if(sub.test(equation))
        {
            let myEquation = equation.replace(sub, function(match, a, b) {
                return Number(a) - Number(b);
            });
            return calculate(myEquation);
        }
        else
        {
            return equation;
        }
    }


    function clickHandle(value)
    {
        let calc_screen = document.getElementById('screen');
        
        if(value === '=')
        {
            calc_screen.value = calculate(calc_screen.value)
        }
        else if(value === 'C')
        {
            calc_screen.value = "";
        }
        else
        {
            calc_screen.value += value
        }

        return(
           calc_screen.value
        );
    }

    return(
        <div className="container">
            <div className="button-row">
                <button onClick={()=>clickHandle('7')}>7</button>
                <button onClick={()=>clickHandle('8')}>8</button>
                <button onClick={()=>clickHandle('9')}>9</button>
                <button onClick={()=>clickHandle('+')}>+</button>
            </div>

            <div className="button-row">
                <button onClick={()=>clickHandle('4')}>4</button>
                <button onClick={()=>clickHandle('5')}>5</button>
                <button onClick={()=>clickHandle('6')}>6</button>
                <button onClick={()=>clickHandle('-')}>-</button>
            </div>

            <div className="button-row">
                <button onClick={()=>clickHandle('1')}>1</button>
                <button onClick={()=>clickHandle('2')}>2</button>
                <button onClick={()=>clickHandle('3')}>3</button>
                <button onClick={()=>clickHandle('*')}>*</button>
            </div>

            <div className="button-row">
                <button onClick={()=>clickHandle('C')}>C</button>
                <button onClick={()=>clickHandle('0')}>0</button>
                <button onClick={()=>clickHandle('=')}>=</button>
                <button onClick={()=>clickHandle('/')}>/</button>
            </div>
        </div>
    );
}