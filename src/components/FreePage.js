import React from 'react';
import freeImg from "../img/undraw_feeling_proud_qne1.svg";

const FreePage = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col bg-secondary text-center m-1 p-1 rounded text-light">
                    <h2>This is free page! Anyone can visit this route!!!</h2>
                    <img src={freeImg} alt="free" className="rounded"/>
                </div>
            </div>
        </div>
    );
};

export default FreePage;