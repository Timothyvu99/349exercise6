import React from "react";
import Display from "./Display";
import { useState } from "react";

export default function Buttons()
{
    // const [value, setValue] = useState('0');
    let value = 0;

    let mul = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/ 
    let div = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/ 
    let add = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/ 
    let sub = /(\d+(?:\.\d+)?) ?\- ?(\d+(?:\.\d+)?)/  
   
    function evaluate(expr)
    {
        if(mul.test(expr))
        {
            let newExpr = expr.replace(mul, function(match, a, b) {
                return Number(a) * Number(b);
            });
            return evaluate(newExpr);
        }
        else if(div.test(expr))
        {
            let newExpr = expr.replace(div, function(match, a, b) {
                if(b != 0)
                    return Number(a) / Number(b);
                else
                    return Error()
            });
            return evaluate(newExpr);
        }
        else if(add.test(expr))
        {
            let newExpr = expr.replace(add, function(match, a, b) {
                return Number(a) + Number(b);
            });
            return evaluate(newExpr);
        }
        else if(sub.test(expr))
        {
            let newExpr = expr.replace(sub, function(match, a, b) {
                return Number(a) - Number(b);
            });
            return evaluate(newExpr);
        }
        else
        {
            return expr;
        }
    }

    function calc(equation)
    {
        let myMath = new Function("return " + equation)
        return myMath();
    }

    function calculate()
    {
        let equation = document.getElementById('screen').value;
        let myString = equation.toString()
        console.log(equation)
       
        // const math = myString.split('+');
        // console.log(math);

        let solve = 0;
        let operator = ['+', '-', '*', '/']
        let order = []

        // const math = myString.split(operator[0])

        // for(let i = 0; i < math.length; i++)
        // {
        //     solve += parseFloat(math[i])
        // }


        // let i = 0;
        // while(i != null || i+1 != null)
        // {
        //     for(let j = 0; j < operator.length; j++)
        //     {
        //         if(myString[i+1] === operator[j])
        //         {
        //             let mySub = parseFloat(myString.substring(i));
        //             console.log(mySub);
        //         }
        //     }
        //     i++;
        // }

        let math = []
        // let myMath;
        let j = 0;
        // while(operator[j] || operator[j] !== null)
        // {  
        //     if(myString[myString.length - 1] === operator[j])
        //         break
        //     // setValue(parseFloat(myString));
        //     // equation.value = '';
        //     j++;
        // }

        // console.log(value);

        // switch(operator[j])
        // {
        //     case '+':
        //         math = myString.split('+');
        //         value += parseFloat(math[0]);
        //         break;
        //     case '-':
        //         math = myString.split('-');
        //         value -= parseFloat(math[0]);
        //         break;
        //     case '*':
        //         math = myString.split('*');
        //         value *= parseFloat(math[0]);
        //         break;
        //     case '/':
        //         math = myString.split('/');
        //         value /= parseFloat(math[0]);
        //         break;

        // }

        // if(operator[j] === '+')
        // {
        //     const math = myString.split('+');
        //     value += parseFloat(math[0]);
        // }
        // else if(operator[j] === '-')
        // {
        //     setValue(parseFloat(myString));
        //     equation.value = '';
        //     math += value
        // }

        // let solution = calc(myString)
        let solution = evaluate(myString)

        console.log(value)

        return(
            solution
            // eval(myString)
        //     console.log(math[0])
            // value.toString()
        );
    }

    function clickHandle(value)
    {
        let calc_screen = document.getElementById('screen');
        
        if(value === '=')
        {
            calc_screen.value = calculate()
        }
        // else if(value === '+' || value === '-' || value === '*' || value === '/')
        // {
        //     calc_screen.value += value
        //     calc_screen.value += calculate()
        // }
        else if(value === 'C')
        {
            calc_screen.value = "";
            // value = 0;
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