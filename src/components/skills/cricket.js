import React, {Fragment} from "react";
import NAVBAR from "./navbar";

const cricket = () => {
    return (
    <Fragment>
        <NAVBAR />
        <div className="maths m-5">
            <div className="shadow-lg p-3 mb-5 bg-white rounded text-center">

                Cricket is one of the most popular game in India. I also like to play cricket<br />
                <br />
                My favourite player in cricket is Virat Kohli.

            </div>
        </div>
    </Fragment>
    )
};

export default cricket;