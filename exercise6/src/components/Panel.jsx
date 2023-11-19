import React from "react";
import Buttons from "./Button";
import Display from "./Display";

export default function Panel()
{
    return(
    <div>
        <div className="panel">
            <Display />
            <Buttons />
        </div>
    </div>
    );
}
