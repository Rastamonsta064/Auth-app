import React, {useEffect, useState} from 'react';
import {url} from "../redux/actions";
import Message from "./Message";
import {useSelector} from "react-redux";

const UserTableRow = ({user,index,you}) => {
    return(
        <tr className={you ? "table-success" : ""}>
            <th scope="row">{index}</th>
            <td>{user.first}</td>
            <td>{user.last}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const AdminPanel = () => {

    const [users,setUsers] = useState(undefined);

    const [message, setMessage] = useState("Loading...");

    const your = useSelector(state => state.user);


    useEffect(() => {
        if(!users){
            fetch(url + "/account",{
                method: "GET"
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.status.toString());
                    }
                })
                .then(users => {
                    setMessage("Here we got list of all users.")
                    setUsers(users);
                }).catch(e => console.log(e.message));

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div className="container">
            {message ? <Message text={message}/> : <></>}
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>

                </tr>
                </thead>
                <tbody>
                {users && your ? users.map((user,index) => <UserTableRow you={your.email === user.email} user={user} index={index+1} key={index}/>) : <></>}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;