import React, {useState} from 'react';
import jwt from 'jsonwebtoken';

const Test = () => {

    const [test,setTest] = useState({login:"",password:""});
    const [token,setToken] = useState("");
    const [res,setRes] = useState();

    const createTokenHandler = () => {
     const token = jwt.sign({test},'secret');
     setToken(token);
    }

    const x = () => {
        jwt.verify(token,'secret', (err,decoded)=> {
            if(err){
                throw new Error(err.message);
            } else {
                setRes({...decoded});
            }
        });
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <h3>TOKEN: {token ? token : "No TOKEN"}</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button className="btn btn-primary mb-3" onClick={x}>Verify TOKEN</button>
                    <h3>Decoded TOKEN: {res ? res.test.login + " " + res.test.password : "No res"}</h3>
                </div>
            </div>
            <div className="row g-3 justify-content-center">
                <div className="col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="login"
                        value={test.login}
                        onChange={(e)=>setTest({...test,login:e.target.value})}
                    />
                </div>
                <div className="col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        value={test.password}
                        onChange={(e)=>setTest({...test,password:e.target.value})}
                    />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary mb-3" onClick={createTokenHandler}>Create TOKEN</button>
                </div>
            </div>

        </div>
    )
};

export default Test;