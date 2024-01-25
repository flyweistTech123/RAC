/** @format */

import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import './HOC.css'

const HOC = (Wcomponenet) => {

    return function Component() {
        const [hamb, setHamb] = useState(true);
        const [show, setShow] = useState(true);
        return (
            <>
                <div className="hoc">
                    <div className="hoc1">
                        <Sidebar />
                    </div>
                    <div className="hoc2">
                        <Navbar />
                        <div className="hoc3">
                            {" "}
                            <Wcomponenet />
                        </div>

                    </div>
                </div>
            </>
        );
    };
};

export default HOC;
