import React from "react";
import Navbar from "./Navbar";

const About = () => {
    return (
        <div className="about text-center">
            <Navbar active='about' />
            <h2 className='mt-5 title'>Myself</h2>
            I am Pratyush Atri. I study in 7th standard in Ryan International School, New Delhi. My birth date is 16th February.<br />
            My favourite food is Pizza. My favourite colour is Black. I love writing programms in <br />
            MERN Stack, HTML & CSS, Sass, Socket.io . I am a vegetarian and<br />
            <span className="M">
                I love eating "Paneer" means Cottage Cheese
                {' '}
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </span>
        </div>
    )
};

export default About;