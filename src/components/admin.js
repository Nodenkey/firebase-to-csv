import React, {useState} from 'react';
import AdminImage from "../assets/images/admin.svg"
import {connect} from 'react-redux';
import {signIn} from "../redux/actions/authActions";
import {Redirect} from "react-router-dom";

const Admin = ({signIn, auth}) => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const submitValues = e => {
        const {name, value} = e.target;
        setCredentials({
            ...credentials, [name]: value
        })
    }

    console.log(auth);

    const handleSubmit = e => {
        e.preventDefault();
        signIn(credentials)
    }

    if(auth.uid)  return <Redirect to="/dashboard"/>

    return (
        <div id="admin">
            <form onSubmit={handleSubmit}>
            <p style={{color: "grey"}}>Login to gain access to admin dashboard</p>
                <label>
                    AdminMail
                    <input name="email" type="text" onChange={submitValues}/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" onChange={submitValues} autoComplete="on"/>
                </label>
                <button>Login</button>
            </form>
         <img src={AdminImage} alt="admin"/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
