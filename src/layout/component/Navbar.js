import React from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className='d-flex align-items-center justify-content-between Navbar'>
                <div className={`${props.tab === "home" ? 'selected' : "link"}`}>
                    <Link to="/">Home</Link>
                </div>
                <div className={`${props.tab === "launches" ? 'selected' : "link"}`}>
                    <Link to="/Launches">Launches</Link>
                </div>
                <div className={`${props.tab === "rockets" ? 'selected' : "link"}`}>
                    <Link to="/Rockets">Rockets</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar