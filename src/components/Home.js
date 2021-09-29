import React from 'react';
import homeImg from '../img/undraw_Profile_re_4a55.svg'

const Home = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col bg-secondary text-center m-1 p-1 rounded text-light">
                    <h2>This is Home Page!</h2>
                    <h2>All interesting is on Protected Page!!!</h2>
                    <img src={homeImg} alt="home" className="rounded"/>
                </div>
            </div>
        </div>
    );
};

export default Home;