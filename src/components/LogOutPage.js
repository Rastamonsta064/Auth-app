import React from 'react';
import {useDispatch} from "react-redux";
import {logOut} from "../redux/actions";
import {useHistory} from "react-router-dom";

const LogOutPage = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const logOutPressHandler = () => {
        dispatch(logOut());
        history.push("/");

    }

    return (
        <div className="container">
            <div className="row g-3 justify-content-center">
                <div className="col-auto text-center">
                    <h3>Be carefull, after log out you will lose access to "Protected" Page!</h3>
                    <button type="submit" className="btn btn-primary mb-3" onClick={logOutPressHandler}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default LogOutPage;