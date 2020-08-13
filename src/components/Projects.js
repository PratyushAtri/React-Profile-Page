import React from "react";
import { Link } from 'react-router-dom';

import Navbar from "./Navbar";

const Projects = () => {
    return (
        <div className="about">
            <Navbar active='project' />
            <p className="mt-5 ml-5">&#9679; Here are some Projects of HTML that I have made :</p>

            <div className="card-group">

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">App Store</h5>
                        <div className="btnprojects">
                            <p className="alert alert-primary">This is an app that I have made. You can see my other projects in it.</p><br />
                            <a target='_blank' href="https://pratyushatri.github.io/Store_of_Apps/" className="btn btn-primary">To the App</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Marvel Cinematic Universe</h5>
                        <div className="btnprojects">
                            <p className="alert alert-info">You can Sign Up and watch other people's posts and comment and like them.</p><br />
                            <a target='_blank' href="#" className="btn btn-primary">To the Website</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="card-group" id="two">

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Omnifood</h5>
                        <div className="btnprojects">
                            <p className="alert alert-danger">You can't sign up in the Website because Omnifood is not a real company.</p><br />
                            <a target='_blank' href="https://pratyushatri.github.io/ProfilePage/Projects/Omnifood/website.html" className="btn btn-primary">To the Website</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Calculator</h5>
                        <div className="btnprojects">
                            <p className="alert alert-info">A basic calculator that I have made with JavaScript</p><br />
                            <a target='_blank' href="https://pratyushatri.github.io/Calculator/" className="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Projects;