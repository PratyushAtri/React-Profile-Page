import React from "react";
import Navbar from "./Navbar";

const Projects = () => {
    return (
        <div className="about">
            <Navbar active='project' />
            <p className="mt-5 ml-5">&#9679; Here are some of my Projects:</p>

            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title blue">Marvel Cinematic Universe</h5>
                        <div className="btnprojects">
                            <p className="alert alert-info">
                                You can Sign Up and watch other people's posts and comment and like them.
                            </p><br />
                            <a target='_blank' rel="noopener noreferrer" href="https://mcu-marvel.herokuapp.com" className="btn btn-primary">To the Website</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title blue">CSS Library</h5>
                        <div className="btnprojects">
                            <p className="alert alert-info">
                                A small CSS Library just like Bootstrap 5 made with Sass.
                            </p><br />
                            <a target='_blank' rel="noopener noreferrer" href="https://getcss.netlify.app" className="btn btn-primary">To the Library</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-group" id="two">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title blue">Budget App</h5>
                        <div className="btnprojects">
                            <p className="alert alert-info">Add expenses & income to your list this will calculate your budget</p><br />
                            <a target='_blank' rel="noopener noreferrer" href="https://pratyushatri.github.io/BudgetApp" className="btn btn-primary">Use Now</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title blue">Calculator</h5>
                        <div className="btnprojects">
                            <p className="alert alert-info">A basic calculator that I have made with JavaScript</p><br />
                            <a target='_blank' rel="noopener noreferrer" href="https://pratyushatri.github.io/Calculator/" className="btn btn-primary">Use Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;