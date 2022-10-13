import React from "react";
import {Link} from "react-router-dom"
import "./Third.css"

const Third = ()=>{
    return <main className="overlap">
    <header>This is the third page</header>


    <Link to="/first">this is a link to the first page</Link>
    
    </main>
}

export default Third