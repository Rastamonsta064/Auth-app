import React from 'react';
import secure from "../img/undraw_security_o890.svg";

const ProtectedPage = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col bg-secondary text-center m-1 p-1 rounded text-light">
                    <h2>This is Protected page! Only authorised users can visit this route!!!</h2>
                    <img src={secure} alt="protected" className="rounded"/>
                </div>
            </div>
        </div>
    );
};

export default ProtectedPage;