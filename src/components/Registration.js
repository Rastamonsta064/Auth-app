import React, {useState} from 'react';
import jwt from "jsonwebtoken";
import {useDispatch} from "react-redux";
import {registerUser} from "../redux/actions";
import {useHistory} from "react-router-dom";
import Message from "./Message";

export const secretKey = process.env.SECRET_KEY || "auth-app";

const Registration = () => {

    const initialUser = {
        first: "",
        last: "",
        email: "",
        phone: "",
        password: "",
        password2: ""
    }

    const [user, setUser] = useState({...initialUser});

    const [message, setMessage] = useState("Please fill form to register a new user. All fields are required.");

    const dispatch = useDispatch();

    const history = useHistory();

     const registrationHandler = () => {
        if (user.first && user.last && user.email && user.phone && user.password && user.password2) {
            if (user.password === user.password2) {
                const newUser = {
                    first: user.first,
                    last: user.last,
                    email: user.email,
                    phone: user.phone
                };
                const email = user.email;
                const password = user.password;
                newUser.secret = jwt.sign({email,password}, secretKey);
                dispatch(registerUser(newUser));
                setMessage("Loading...");
                history.push("/");
            } else {
                setMessage("Type same password 2 times.");
            }
        } else {
            setMessage("All fields are required.");
        }

    }

    return (
        <div className="container">
            {message ? <Message text={message}/> : <></>}
            <div className="row g-3 justify-content-center">
                <div className="col-auto m-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your First Name"
                        value={user.first}
                        onChange={(e) => setUser({...user, first: e.target.value})}
                    />
                </div>
                <div className="col-auto m-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Last Name"
                        value={user.last}
                        onChange={(e) => setUser({...user, last: e.target.value})}
                    />
                </div>
            </div>
            <div className="row g-3 justify-content-center">
                <div className="col-auto m-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email - this'll be login"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>
                <div className="col-auto m-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Your Phone Number"
                        value={user.phone}
                        onChange={(e) => setUser({...user, phone: e.target.value})}
                    />
                </div>
            </div>
            <div className="row g-3 justify-content-center">
                <div className="col-auto m-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                </div>
                <div className="col-auto m-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Again Password"
                        value={user.password2}
                        onChange={(e) => setUser({...user, password2: e.target.value})}
                    />
                </div>

            </div>
            <div className="row g-3 justify-content-center">
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3" onClick={registrationHandler}>Registration
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registration;