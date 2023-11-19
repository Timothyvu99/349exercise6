import React from "react";
import Display from "./Display";
import { useState } from "react";

export default function Buttons()
{
    const [value, setValue] = useState(0);

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

        let math = 0;
        let myMath;
        let j = 0;
        while(myString.length !== operator[j])
        {  
            // setValue(parseFloat(myString));
            // equation.value = '';
            j++;
        }

        console.log(value);

        if(operator[j] === '+')
        {
            setValue(parseFloat(myString));
            math += value
        }
        else if(operator[j] === '-')
        {
            setValue(parseFloat(myString));
            equation.value = '';
            math += value
        }

        console.log(math)

        return(
        //     // eval(equation.value)
        //     console.log(math[0])
            math
        );
    }

    function clickHandle(value)
    {
        let calc_screen = document.getElementById('screen');
        
        if(value === '=')
        {
            calc_screen.value = calculate()
        }
        else if(value === '+' || value === '-' || value === '*' || value === '/')
        {
            calc_screen.value += calculate()
            calc_screen.value += value
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