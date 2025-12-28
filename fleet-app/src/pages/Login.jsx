import React, {useEffect,useRef,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import{useAuth} from'../context/AuthContect.jsx';
const VALID_EMAIL="admin@gmail.com";
const VALID_PASSWORD="admin1234";
function Login(){
    const navigate =useNavigate();
    const {login, isAuthenticated}=useAuth();
    const emailRef=useRef(null);
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState("");
    useEffect(()=>{
        emailRef.current?.focus();
    },[]);
    useEffect(()=>{
        emailRef.current?.focus();
    },[]);
    useEffect(()=>{
        if(isAuthenticated)navigate('/admin',{replace:true});
    },[isAuthenticated,navigate]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const isValid=
        email.trim().toLowerCase()===VALID_EMAIL&&
        password.trim()===VALID_PASSWORD;
        if(isValid){
            alert('Login success');
            login();
            navigate('/admin',{replace:true});

        }else{
            alert('Wrong email or password');
        }
    };
    return(
        <div className="page page-login">
            <div className="card login-card">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}classsName="form">
                    <label classsName="form-label">
                        Email
                        <input ref={emailRef}
                        type="email"
                        placeholder="admin@gmail.com"
                        
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='input'
                        required/>
                    </label>
                    <label classsName="form-label">
                        password
                        <input ref={emailRef}
                        type="password"
                        placeholder="admin1234"
                        
                        value={password}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='input'
                        required/>
                    </label>
                    <button type="submit"className='btn primary'>Login</button>
                </form>
            </div>
        </div>
    );

    
}
export default Login;