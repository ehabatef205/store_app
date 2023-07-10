import {React, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const usernameRef = useRef(null); 
    const passwordRef = useRef(null);

    const logIn = async () => {
        setLoading(true);
        await axios.post('/user/login',{username: usernameRef.current.value, password: passwordRef.current.value}).then( async(res)=>{
            const message = res.data.message;
          
            if(message === 'Login Successful!'){
                setLoading(false);
                sessionStorage.setItem("token", "Bearer " + res.data.token);
                navigate('/home', {replace: true});
            }else if(message === "email or password is invalid"){
                toast.warning(message, {
                    position: toast.POSITION.TOP_RIGHT
                })
                setLoading(false);
            }else{
                setLoading(false);
            }
        }).catch((error) => {
            setLoading(false);
        })
    };
      

    return (
        <div
        className="login"
        style={login}
        >
            <div className="" style={{flexDirection: "column", width: "100vw", justifyContent: "center", alignItems: "center", display:"flex"}}>
                <h1>Login</h1>
                <input
                    ref={usernameRef}
                    style={inputText}
                    placeholder="Username"
                    type="text"
                />
                <input
                    ref={passwordRef}
                    style={inputText}
                    placeholder="Password"
                    type="password"
                />
                {!loading && <button onClick={logIn} style={loginButton}>
                    Login
                </button>}
                {loading && <button style={loginButton2} disabled>
                    Login...
                </button>}
            </div>
            <ToastContainer />
        </div>
    );
}

const login = {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "100vh"
};

const inputText = {
    border: "1px solid #000",
    borderRadius: "15px",
    width: "50%",
    padding: "10px",
    marginTop: "20px"
}

const loginButton = {
    marginTop: "20px",
    border: "none",
    backgroundColor: "rgb(80, 192, 169)",
    width: "40%",
    color: "#fff",
    padding: "10px",
    borderRadius: "15px",
}

const loginButton2 = {
    marginTop: "20px",
    border: "none",
    backgroundColor: "rgb(80, 192, 169)",
    width: "40%",
    color: "#fff",
    padding: "10px",
    borderRadius: "15px",
}