import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Private = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const handleOnClick = () => actions.tokenLogout();

    useEffect(() => {
		actions.getInfo();
		}, [store.token])

    return (
    <div>
      {store.loggedIn ? (<div className="text-center justify-content-center d-md-flex m-5"> 
                <div className="card">
                    <div className="card-header fs-1">
                        Personal Information
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">your user name is:</h5>
                        <p className="card-text fs-3 fw-bold">{store.message}</p>
                        <div>
                            <button className="btn btn-primary btn-lg" onClick={handleOnClick}>Log out</button>
                        </div>
                    </div>
                </div>
            </div>): (navigate("/login"))}
    </div>    
	);
}