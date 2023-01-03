import React from "react";
import { Link } from "react-router-dom";


function Chips() {
    return(
        <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/1200px-Potato-Chips.jpg"></img>
        <h2><Link to="/">Return to Vending Machine</Link></h2>
        </div>
    )
}

export default Chips;