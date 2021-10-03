export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const LOGOUT = "LOGOUT";
export const SET_ERROR = "SET_ERROR";
export const url = "https://auth-app-server.herokuapp.com";


export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const setToken = (token) => ({
    type: SET_TOKEN,
    payload: token
})

export const logOut = () => {
    return ({
        type: LOGOUT
    })
}

export const setError = (isError) => {
    return ({
        type: SET_ERROR,
        payload: isError
    })
}

export const getUser = (token) => {
    return (dispatch) => {
        fetch(url + "/account/login", {
            method: "GET",
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status.toString());
                }
            })
            .then(user => {
                if (user) {
                    dispatch(setError(false));
                    dispatch(setUser(user));
                    dispatch(setToken(user.secret));
                } else {
                    dispatch(setError(true));
                }
            }).catch(e => {
            dispatch(setError(true));
            console.log(e.message);

        });
    }
}

export const registerUser = (newUser) => {
    return (dispatch) => {
        fetch(url + "/account/register", {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log("user registered")
                    return response.json();
                } else {
                    throw new Error(response.status.toString());
                }
            })
            .then(user => {
                dispatch(setUser(user));
                dispatch(setToken(user.secret));
            }).catch(e => console.log(e.message));
    }
}

export const changePass = (newSecret) => {
    return (dispatch, getState) => {
        fetch(url + "/account/password", {
            method: "PUT",
            headers: {
                Authorization: getState().user.secret,
                'secret': newSecret
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.status.toString());
                }
            })
            .then(user => {
                dispatch(setUser(user));
                dispatch(setToken(user.secret));
            })
    }
}
export const updateUser = (updatedUser, token) => {
    return (dispatch) => {
        fetch(url + "/account/update", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify(updatedUser),

        })
            .then(response => {
                if (response.ok) {
                    console.log("user updated");
                    return response.json();
                } else {
                    throw new Error(response.status.toString());
                }
            })
            .then(user => {
                dispatch(setUser(user));
            }).catch(e => {
            console.log(e.message);
        });
    }
}

export const deleteUser = (id, token) => {
    return (dispatch) => {
        fetch(url + "/account/" + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                if (response.ok) {
                    dispatch(setError(true));
                    dispatch(logOut());
                    console.log(`User with id: ${id} deleted`);
                } else {
                    throw new Error(response.status.toString());
                }
            })
    }
}
