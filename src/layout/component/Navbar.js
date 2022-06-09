import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className='d-flex align-items-center justify-content-between Navbar'>
                <div  className='link'>
                    <Link to="/">Home</Link>
                </div>
                <div  className='link'>
                    <Link to="/launches">launches</Link>
                </div>
                <div className='link'>
                    <Link to="/Rockets">Rockets</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar