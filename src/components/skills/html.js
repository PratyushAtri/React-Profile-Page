import React, { Fragment } from "react";
import NAVBAR from "./navbar";

const HTML = () => {
    return (
        <Fragment>
            <NAVBAR />
            <div className="html m-5">
                <div className="shadow-lg p-3 mb-5 bg-white rounded text-center">
                    I have made many Projects of HTML &amp; CSS, that you can see in the Projects section<br />
                    <br />
                    I have learned HTML &amp; CSS from udemy, if you want to visit udemy click on the link given
                    below<br />
                    <a target='_blank' href="https://www.udemy.com" rel="noopener noreferrer" >https://www.udemy.com</a>
                </div>
            </div>
        </Fragment>


    )
}

export default HTML;