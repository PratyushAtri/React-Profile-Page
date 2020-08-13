import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ( active ) => {
    return (

        <div className="shadow bg-secondary rounded text-center">
            {
                active.active === 'home' ? <Link to='/' className="btn btn-dark m-2" >Home</Link> : <Link to='/' className="btn btn-light m-2" >Home</Link>
            }
            {
                active.active === 'about' ? <Link to='/About' className="btn btn-dark m-2" >About</Link> : <Link to='/About' className="btn btn-light m-2" >About</Link>
            }
            {
                active.active === 'skills' ? <Link to='/Skills' className="btn btn-dark m-2" >Skills</Link> : <Link to='/Skills' className="btn btn-light m-2" >Skills</Link>
            }
            {
                active.active === 'channel' ? <Link to='/Channel' className='btn btn-dark m-2' >Channel</Link> : <Link to='/Channel' className='btn btn-light m-2' >Channel</Link>
            }
            {
                active.active === 'project' ? <Link to='/Projects' className="btn btn-dark m-2" >Projects</Link> : <Link to='/Projects' className="btn btn-light m-2" >Projects</Link>
            }
        </div>
    )
};

export default Navbar;