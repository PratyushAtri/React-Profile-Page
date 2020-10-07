import React, { Fragment } from "react";
import Navbar from "./Navbar"

const Channel = () => {
    return (
        <Fragment>
            <Navbar active='channel' />
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-6 mt-5 text-center">
                        <img src='https://avatars1.githubusercontent.com/u/63645072?s=460&u=851ce37614c556505420bc05e5766f3317259a0d&v=4' alt='PratyushAtri' />
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="channel text-center">
                            <h3 className='mb-5 title' >My Github Repo</h3>
                            You can find all my repositories on Github including this ProfilePage. <br/>
                            My Github username is <strong>PratyushAtri</strong> <br />
                            <strong>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/PratyushAtri' className='github' >
                                    <i className="fab fa-github" />
                                </a>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Channel;
