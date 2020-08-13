import React from "react";
import { Link } from 'react-router-dom';

const NAVBAR = () => {
    return (
        <div className="shadow bg-light rounded text-center">
            <Link to='/skills' className="btn btn-dark m-2">Skills</Link>
            <Link to='/' className="btn btn-dark m-2" >Home</Link>
        </div>
    )
};

export default NAVBAR;