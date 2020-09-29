import React from "react";
import HTML from '../Images/html5css3.jfif';
import mern from '../Images/mern.png';
import sass from '../Images/sass.jpg';
import socket from '../Images/socketio.jpg';

import Navbar from "./Navbar";

const Skills = () => {
    return (
        <div className="skills">
            <Navbar active='skills' />
            <div className="container mt-5">
                <div className="card-group">
                    <div className="card-flip">
                    <div className="card-content">
                        <div className="card-front">
                            <img src={mern} alt="html" className='card-img'/>
                            <h2 className="card-title">MERN Stack</h2>
                        </div>
                        <div className="card-back pt-5">
                            Recently I have started doing MERN Stack
                            <br/>
                            And now i am very much familiar with it.
                            <br/>
                            My biggest project of MERN Stack is MCU view it on projects
                        </div>
                    </div>
                </div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={sass} alt="html" className='card-img'/>
                                <h2 className="card-title">Sass</h2>
                            </div>
                            <div className="card-back pt-5">
                                Recently I have started doing Sass
                                <br/>
                                I also made a css library using it
                                <br/>
                                View it in projects.
                            </div>
                        </div>
                    </div>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={HTML} alt="html" className='card-img'/>
                                <h2 className="card-title">HTML, CSS & JS</h2>
                            </div>
                            <div className="card-back pt-5">
                                These three were the first languages that
                                <br/>
                                I started with
                                <br/>
                                I have made a Calculator with them
                                <br/>
                                View on Projects.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-group">
                    <div className="card-flip border-none"/>
                    <div className="card-flip">
                        <div className="card-content">
                            <div className="card-front">
                                <img src={socket} alt="html" className='card-img'/>
                                <h2 className="card-title">Socket io</h2>
                            </div>
                            <div className="card-back pt-5">
                                I am not much familiar with socket.io
                                <br/>
                                But I have made a ChatApp with it.
                                <br/>
                                It has not been uploaded so you can visit
                                <br/>
                                My Github Repository{' '}
                                <span>
                                    <a href="https://github.com/PratyushAtri/ChatCord" target='_blank' rel='noreferrer noopener' className='text-primary' >ChatCord</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-flip border-none"/>
                </div>
            </div>
        </div>
    )
};

export default Skills;