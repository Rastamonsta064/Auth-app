import React, {useState} from 'react';
import jwt from "jsonwebtoken";
import {secretKey} from "./Registration";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../redux/actions";
import {useHistory} from "react-router-dom";
import Message from "./Message";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("Please fill your email and password to Log in.");

    const dispatch = useDispatch();

    const history = useHistory();

    const isError = useSelector(state => state.isError);
    const user = useSelector(state => state.user);


    const loginPressHandler = async () => {
        setMessage("Loading...")
        if (email && password) {
            const token = jwt.sign({email, password}, secretKey);
            dispatch(await getUser(token));
            setEmail("");
            setPassword("");
            console.log("login");

            if (isError && !user) {
                setMessage("Wrong login/password.");
            } else {
                history.push("/");
            }
        } else {
            setMessage("All fields are required!");
        }


    }

    return (
        <div className="container">
            {message ? <Message text={message}/> : <></>}
            <div className="row g-3 justify-content-center">
                <div className="col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3" onClick={loginPressHandler}>Log in</button>
                </div>
            </div>
        </div>
    );
}
;

export default LoginPage;