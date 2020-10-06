import React from "react";
import Navbar from "./Navbar";

const Projects = () => {
    return (
        <div className="about">
            <Navbar active='project' />
            <p className="mt-5 ml-5">&#9679; Here are some of my Projects:</p>

            <div className="container mt-5">
                <div className="card-group">
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <h2 className="card-title blue">MCU</h2>
                                <p className='card-desc'    >
                                    You can Sign Up and watch other people's posts and comment and like them.
                                </p>
                            </div>
                            <div className="card-back pt-5 container-fluid">
                            <span>
                                <a href="https://github.com/PratyushAtri/MCU" target='_blank' rel='noreferrer noopener' className='btn btn-light' >Link To Code</a>
                                <a href="https://mcu-marvel.herokuapp.com" target='_blank' rel='noreferrer noopener' className='btn btn-success' >Visit site</a>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <h2 className="card-title blue">Todo List</h2>
                                <p className='card-desc' >
                                    A simple todo list application made with MERN Stack
                                </p>
                            </div>
                            <div className="card-back pt-5 container-fluid">
                            <span>
                                <a href="https://github.com/PratyushAtri/Todo_List" target='_blank' rel='noreferrer noopener' className='btn btn-light' >Link To Code</a>
                                <span className='alert alert-warning' >Site Under Progress</span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <h2 className="card-title blue">Forkify</h2>
                                <p className='card-desc'    >
                                    You can search for recipe's in the site and can also add recipe to shopping list and like them.
                                </p>
                            </div>
                            <div className="card-back pt-5 container-fluid">
                            <span>
                                <a href="https://github.com/PratyushAtri/forkify" target='_blank' rel='noreferrer noopener' className='btn btn-light' >Link To Code</a>
                                <a href="https://pratyushatri.github.io/forkify/dist" target='_blank' rel='noreferrer noopener' className='btn btn-success' >Visit site</a>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-half"></div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <h2 className="card-title blue">Calculator</h2>
                                <p className='card-desc'    >
                                    A basic Calculator with HTML, CSS & JS.
                                </p>
                            </div>
                            <div className="card-back pt-5 container-fluid">
                            <span>
                                <a href="https://github.com/PratyushAtri/Calculator" target='_blank' rel='noreferrer noopener' className='btn btn-light' >Link To Code</a>
                                <a href="https://pratyushatri.github.io/Calculator/" target='_blank' rel='noreferrer noopener' className='btn btn-success' >Visit site</a>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <h2 className="card-title blue">Omnifood</h2>
                                <p className='card-desc'    >
                                    A basic project with HTML & CSS.
                                </p>
                            </div>
                            <div className="card-back pt-5 container-fluid">
                            <span>
                                <a href="https://github.com/PratyushAtri/Omnifood" target='_blank' rel='noreferrer noopener' className='btn btn-light' >Link To Code</a>
                                <a href="https://pratyushatri.github.io/Omnifood/" target='_blank' rel='noreferrer noopener' className='btn btn-success' >Visit site</a>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-half"></div>
                </div>
            </div>
        </div>
    )
};

export default Projects;