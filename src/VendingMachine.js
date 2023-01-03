import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"

function VendingMachine () {
    return (
        <div className = "VendingMachine">
            <h1>hello i am a vend machine</h1>
            <Link to="/soda"><button>Soda</button></Link>
            <Link to="/chips"><button>Chips</button></Link>
            <Link to="/1993fordf150"><button>1993 Ford F-150</button></Link>
        </div>
    )

}

export default VendingMachine;