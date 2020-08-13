import React, { Fragment } from "react";

import Navbar from "./Navbar"
import Phoenix from '../Images/logo.jpg';

const Channel = () => {
    return (
        <Fragment>
            <Navbar active='channel' />
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-6 mt-5">
                        <img src={Phoenix} />
                    </div>
                    <div className="col-6 mt-5">
                        <div className="channel text-center">
                            <h3 className='mb-5' >My Youtube Channel</h3>
                            I also have a YouTube Gaming Channel named <strong>Phoenix Gaming</strong> <br />
                            You can visit it by clicking on Phoenix Gaming Given below <br />
                            <strong><a target='_blank' href='https://www.youtube.com/channel/UCAUWt7pXZh0bZjB4Z1814YQ' className='black' >Phoenix Gaming</a></strong>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Channel;