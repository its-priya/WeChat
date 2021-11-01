import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h1>Welcome to WeChat!</h1>
                <div 
                    className="login-btn google"
                >
                    <GoogleOutlined/> Sign in with Google
                </div>
                <br/><br/>
                <div 
                    className="login-btn facebook"
                >
                    <FacebookOutlined/> Sign in with Facebook
                </div>
            </div>
        </div>
    );
}

export default Login;
