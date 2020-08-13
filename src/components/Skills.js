import React from "react";
import { Link } from 'react-router-dom';

import Basketball from '../Images/Basketball.jfif';
import Cpp from '../Images/C++.png';
import cricket from '../Images/Cricket.jfif';
import HTML from '../Images/html5css3.jfif';
import Python from '../Images/python.jpg';
import react from '../Images/React.png';


import Navbar from "./Navbar";

const Skills = () => {
    return (
        <div className="skills">
            <Navbar active='skills' />

            <div className="container mt-5">

                <div className="card-group">

                    <div className="card">
                        <div className="container">
                            <div className="row">
                                <img src={HTML} className="card-img-top" alt="htmlLogo" />
                            </div>
                            <div className="row">
                                <div className="card-body">
                                    <h5 className="card-title">HTML &amp; CSS & JavaScript</h5>
                                    <Link to='/Skills/html' className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="container">
                            <div className="row">
                                <img src={Cpp} className="card-img-top" alt="C++Logo" />
                            </div>
                            <div className="row">
                                <div className="card-body">
                                    <h5 className="card-title">C++</h5>
                                    <Link to='/Skills/cpp' className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="container">
                            <div className="row">
                                <img src={react} className="card-img-top" alt="htmlLogo" />
                            </div>
                            <div className="row">
                                <div className="card-body">
                                    <h5 className="card-title">React</h5>
                                    <Link to='/Skills/react' className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card-group">

                    <div className="card">
                        <div className="container">
                            <div className="row">
                                <img src={cricket} className="card-img-top" alt="CricketLogo" />
                            </div>
                            <div className="row">
                                <div className="card-body">
                                    <h5 className="card-title">Cricket</h5>
                                    <Link to='/Skills/cricket' className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="container">
                            <div className="row">
                                <img src={Basketball} className="card-img-top" alt="BasketballLogo" />
                            </div>
                            <div className="row">
                                <div className="card-body">
                                    <h5 className="card-title">Basketball</h5>
                                    <Link to='/Skills/basketball' className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;