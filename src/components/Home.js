import React from "react";
import Navbar from "./Navbar";
import ironman from '../Images/ironman.jpg';
import captainAmerica from '../Images/cap.jpg';
import thor from '../Images/thor.jpg';
import hulk from '../Images/hulk.jpg';
import blackWidow from '../Images/blackWidow.jpg';
import hawkeye from '../Images/hawkeye.jpg';

const Home = () => {
    return (
        <div>
            <Navbar active='home' />
            <div className="home">
                <div className="container text-center">
                    <h3 >Hi I am Pratyush</h3>
                </div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ironman} className="d-block w-100" alt="1img" />
                        </div>
                        <div className="carousel-item">
                            <img src={captainAmerica} className="d-block w-100" alt="2img" />
                        </div>
                        <div className="carousel-item">
                            <img src={thor} className="d-block w-100" alt="3img" />
                        </div>
                        <div className="carousel-item">
                            <img src={hulk} className="d-block w-100" alt="4img" />
                        </div>
                        <div className="carousel-item">
                            <img src={blackWidow} className="d-block w-100" alt="5img" />
                        </div>
                        <div className="carousel-item">
                            <img src={hawkeye} className="d-block w-100" alt="6img" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Home;