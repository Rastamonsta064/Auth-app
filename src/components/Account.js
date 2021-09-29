import React, {useEffect, useState} from 'react';
import Message from "./Message";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, updateUser} from "../redux/actions";
import {useHistory} from "react-router-dom";

const Account = () => {

    const [message, setMessage] = useState("Loading...");
    const [edit, setEdit] = useState(true)
    const [your, setYour] = useState({
        first: "",
        last: "",
        phone: ""
    });

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
        if(your.first && your.last && your.phone ){
            setEdit(true);
            dispatch(updateUser(your,you.secret));


        }
    }
    const deleteClickHandler = () => {
        if(window.confirm("Are you sure? Delete Your account and all your data?")){
                dispatch(deleteUser(you._id,you.secret));
                history.push("/");
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
            </div>
        </div>
    );
};

export default Account;