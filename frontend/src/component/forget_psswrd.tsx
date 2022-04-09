import React, {useState} from "react";
import './Assets/login.css';
import Lottie from 'react-lottie';
import animationData from './Assets/lotties/login-main.json';
import animationData2 from './Assets/lotties/medicee-lottie.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from "react-router-dom";


export default function Signin() {
    const navigate = useNavigate();

  const defaultOption = {
    loop:true,
    animation:true,
    animationData:animationData,
  }
  const defaultOption2 = {
    loop:true,
    animation:true,
    animationData:animationData2,
  }

//   ------------reset-passworrd function implementation----------------   //

    const [email, setEmail] = useState('');

    const loginPage = async (e :any) =>{

        e.preventDefault();

        const res = await fetch("/reset-password", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({

                email

            })
        });

        const data = res.json();

        if( res.status === 400 || !data){

            window.alert("User doesn't exist");
            console.log("invalid registration");
        }else{
            navigate('/Signin');
            window.alert("Link has been sent to your email");
            console.log("invalid registration"); 
        }

    }

  return (
    <>
          <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-md-6 lottie-background text-center p-5 d-flex flex-column justify-content-center auth-bg-section text-white" >
                    <div className="main-lottie">
                        <Lottie options={defaultOption}/>
                    </div>
                </div>
                <div className="col-md-6 lottie-background2 lottie-padding text-center d-flex flex-column py-5 justify-content-center ">
                    <div className="auth-form-section">
                        <div className="logo d-flex">
                        <div className="medicee-lottie">
                            <Lottie options={defaultOption2}/>
                        </div>
                            <h3 className="logo-heading">Medicee</h3>
                        </div>
                        <h2 className="Sign-in-heading">Forget Password</h2>
                        <p className="sign-in-paragraph">Free access to our dashboard</p>
                        <form method="POST" className="auth-form">
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email"
                                    id="email" 
                                    className="form-control"
                                    value={email}
                                    onChange={(e:any) => setEmail(e.target.value)}
                                    placeholder="Enter your email" 
                                    required
                                />
                            </div>

                            <button 
                                type="submit" 
                                onClick={loginPage} 
                                className="btn btn-customize btn-success btn-block mb-3">
                                Get reset link
                            </button>

                            <div className="d-md-flex justify-content-between">
                                <div className="form-check">
                                    <a 
                                        onClick={() => navigate("/home")} 
                                        className="text-info">
                                        Get back to home
                                    </a>
                                </div>
                                <a 
                                    onClick={() => navigate("/signin")} 
                                    className="text-info">
                                    Get back to Login
                                </a>
                            </div>

                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
