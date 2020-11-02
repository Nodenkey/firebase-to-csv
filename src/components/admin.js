import React from 'react';
import AdminImage from "../assets/images/admin.svg"

const Admin = () => {
    return (
        <div id="admin">
            <form>
            <p style={{color: "grey"}}>Login to gain access to admin dashboard</p>
                <label>
                    Username
                    <input name="username" type="text"/>
                </label>
                <label>
                    Password
                    <input name="password" type="password"/>
                </label>
                <button>Login</button>
            </form>
         <img src={AdminImage} alt="admin"/>   
        </div>
    );
}

export default Admin;
