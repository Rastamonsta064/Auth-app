import React, {useEffect, useState} from 'react';
import Message from "./Message";
import {useDispatch, useSelector} from "react-redux";
import {changePass, deleteUser, updateUser} from "../redux/actions";
import {useHistory} from "react-router-dom";
import jwt from "jsonwebtoken";
import {secretKey} from "./Registration";

const Account = () => {

    const [message, setMessage] = useState("Loading...");
    const [edit, setEdit] = useState(true)
    const [your, setYour] = useState({
        first: "",
        last: "",
        phone: ""
    });

    const [changingPass, setChangingPass] = useState(false);
    const [oldP, setOldP] = useState("");
    const [newP, setNewP] = useState("");
    const [newP2, setNewP2] = useState("");


    const you = useSelector(state => state.user);

    useEffect(() => {
        if (you) {
            setYour(you);
            setMessage(`Your email - ${you.email} is your login and it can not be changed. `);
        }
    }, [you]);

    const dispatch = useDispatch();
    const history = useHistory();

    const editClickHandler = () => {
        setEdit(false);
        setMessage("Click save to apply changes.");

    }

    const cancelClickHandle = () => {
        setEdit(true);
        setYour(you);
        setMessage(`Your email - ${you.email} is your login and it can not be changed. `);
    }

    const saveClickHandler = () => {
        if (your.first && your.last && your.phone) {
            setEdit(true);
            dispatch(updateUser(your, you.secret));


        }
    }
    const deleteClickHandler = () => {
        if (window.confirm("Are you sure? Delete Your account and all your data?")) {
            dispatch(deleteUser(you._id, you.secret));
            history.push("/");
        }
    }

    const changePasswordHandler = () => {
        if (oldP && newP && oldP !== newP && newP === newP2) {
            if (window.confirm("Are you sure to change Password?")) {
                const newSecret = jwt.sign({email: you.email, password: newP}, secretKey);
                dispatch(changePass(newSecret));
            }
        }
    }


    return (
        <div className="container">
            {message ? <Message text={message}/> : <></>}
            <div className="row g-3 justify-content-center">
                <div className="col-auto m-3">
                    <input
                        disabled={edit}
                        type="text"
                        className="form-control"
                        placeholder="Your First Name"
                        value={your.first}
                        onChange={(e) => setYour({...your, first: e.target.value})}
                    />
                </div>
                <div className="col-auto m-3">
                    <input
                        disabled={edit}
                        type="text"
                        className="form-control"
                        placeholder="Your Last Name"
                        value={your.last}
                        onChange={(e) => setYour({...your, last: e.target.value})}
                    />
                </div>
                <div className="col-auto m-3">
                    <input
                        disabled={edit}
                        type="text"
                        className="form-control"
                        placeholder="Your Phone Number"
                        value={your.phone}
                        onChange={(e) => setYour({...your, phone: e.target.value})}
                    />
                </div>
            </div>
            <div className="row g-3 justify-content-center">
                <div className="col-auto">
                    <button className="btn btn-primary m-1" onClick={edit ? editClickHandler : cancelClickHandle}>
                        {edit ? "Edit" : "Cancel"}
                    </button>
                    <button className={`btn btn-primary m-1 ${edit ? "invisible" : ""}`} onClick={saveClickHandler}>
                        {"Save"}
                    </button>
                </div>
            </div>
            <div className="row g-3 justify-content-center">
                <div className="col-auto">
                    <button className="btn btn-danger m-1" onClick={deleteClickHandler}>Delete Account
                    </button>
                </div>
                <div className="col-auto">
                    <button className={`btn btn-danger m-1 ${changingPass ? "disabled" : ""}`}
                            onClick={() => setChangingPass(!changingPass)}>
                        Change Password
                    </button>
                </div>
            </div>
            {changingPass ?
                <div className="row g-3 m-3 justify-content-center">
                    <div className="col-auto m-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Old Password"
                            value={oldP}
                            onChange={(e) => setOldP(e.target.value)}
                        />
                    </div>
                    <div className="col-auto m-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="New Password"
                            value={newP}
                            onChange={(e) => setNewP(e.target.value)}
                        />
                    </div>
                    <div className="col-auto m-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="New Password"
                            value={newP2}
                            onChange={(e) => setNewP2(e.target.value)}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <button className="btn btn-danger m-1" onClick={changePasswordHandler}>Update Password
                            </button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-primary m-1" onClick={() => setChangingPass(false)}>Cancel
                            </button>
                        </div>
                    </div>
                </div>
                : <></>}
        </div>
    );
}

export default Account;