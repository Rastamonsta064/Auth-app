import React, {useEffect} from "react";
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import FreePage from "./components/FreePage";
import ProtectedPage from "./components/ProtectedPage";
import AdminPanel from "./components/AdminPanel";
import Registration from "./components/Registration";
import Test from "./components/TEST";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./redux/actions";
import LogOutPage from "./components/LogOutPage";
import Account from "./components/Account";


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(getUser(token));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const user = useSelector(state => state.user);

    return (
        <div className="App">
            <Header user={user}/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={user ? Home : LoginPage}/>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/admin" component={AdminPanel}/>
                <Route exact path="/protected" component={user ? ProtectedPage : Home}/>
                <Route exact path="/free" component={FreePage}/>
                <Route exact path="/test" compomemt={Test}/>
                <Route exact path="/logout" component={LogOutPage}/>
                <Route exact path="/account" component={Account}/>
                <Route path="*" component={() => <h2 className="text-center">404 NOT FOUND</h2>}/>
            </Switch>
            <p className="m-1 text-center"> Auth-app site. Made by Mikhail Lapshin. ©All rights reserved 2021</p>
        </div>
    );
}

export default App;
