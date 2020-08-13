import React, {Fragment} from "react";
import NAVBAR from "./navbar";
import {  BrowserRouter as Router, Switch } from 'react-router-dom';

const CPP = () => {
    return (
        <Fragment>
            <NAVBAR />
            <div className="cpp m-5">
                <div className="shadow-lg p-3 mb-5 bg-white rounded text-center">

                    Using C++ I have made many projects such as the Divisibility rule of 7,<br />
                    Divisibility rule of 11, Prime checker, linear equation etc.

                </div>
            </div>
        </Fragment>
    )
};

export default CPP;