import React, {Fragment} from "react";
import NAVBAR from "./navbar";
import {  BrowserRouter as Router, Switch } from 'react-router-dom';

const basketball = () => {
    return (
        <Fragment>
            <NAVBAR />
            <div className="basketball m-5">
                <div className="shadow-lg p-3 mb-5 bg-white rounded text-center">

                    I started to play Basketball in my School from August'2019.<br />
                    And from than I get an interest in Basketball.

                </div>
            </div>
        </Fragment>
    )
};

export default basketball;