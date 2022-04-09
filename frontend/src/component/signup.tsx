import React , {useState, useEffect} from "react";
import './Assets/login.css';
import Lottie from 'react-lottie';
import animationData from './Assets/lotties/login-main.json';
import animationData2 from './Assets/lotties/medicee-lottie.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
//import { eventWrapper } from "@testing-library/user-event/dist/utils";
//import { passwordStrength } from 'check-password-strength';

export default function Signup() {
    
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

    // ------------signup function-------------- ///

    const [user , setUser] = useState({

        username:"",
        email:"",
        DOB:"",
        usertype:"",
        password:"",
        cpassword:""
    });

        const [errors, setErrors] = useState({
            username:"",
            email:"",
            DOB:"",
            usertype:"",
            password:"",
            cpassword:""
    });
    const[dataIsCorrect, setDataIsCorrect] = useState(false);

    const Validation  = (values:any) =>{
        const errors = {username:"", email:"",DOB:"",usertype:"",password:"",cpassword:""}
        // console.log("user enetred in validation function")
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username){
            errors.username="Username field is required *"
        }
        if (!values.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
    
        if(!values.DOB){
            errors.DOB = "Date of birth field is required , "
        }
    
        if (!values.usertype){
            errors.usertype = "please select usertype"
        }
    
        if(!values.password){
            errors.password = "Password is required"
        }else if(values.password.length < 5){
            errors.password = "Minimun length required is 5"
        }else if(values.password.length >10-1){
            errors.password = "Maximum length required is 10"
        }
        // if(passwordStrength(values.password).value !){
        //     errors.password = passwordStrength(values.password).value
        // }
    
        if(!values.cpassword){
            errors.cpassword = "Confirm password field is required"
        }//else if(values.cpassword === values.password){
        //     errors.cpassword = "Password didn't matched. Please Enter it again"
        // }
        return errors;
    
    }

    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
          console.log(user);
        }
      }, [errors]);

    let name , value;
    const handleInputs = (e : any) => {
        setErrors(Validation(user));
        console.log(e);
        name = e.target.name;
        value = e.target.value; 

        setUser({ ...user , [name]:value});
    }

//   -------fetching API---------- ///
    const PostData = async (e :any) =>{
        // setErrors(Validation(user));
        e.preventDefault();
        setErrors(Validation(user));
        setDataIsCorrect(true);
        const {username,email,DOB,usertype,password,cpassword} = user;
        

        const res = await fetch("/register", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({

                username,email,DOB,usertype,password,cpassword

            })
        });

        const data = await res.json();

        if( res.status === 422 || !data){

            window.alert("User already exist");
            console.log("invalid registration");
        }else if(res.status ===423){
            window.alert("Password doesn't match ! Please re-enter it")
        }else if(res.status === 421){
            window.alert("You have not entered any credentials")
        }else{
            window.alert("Registration Successful");
            console.log("registration successful");
            
            navigate('/signin');
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
                <div className="lottie-padding lottie-background2 col-md-6 text-center d-flex flex-column py-5 justify-content-center ">
                    <div className="auth-form-section">
                        <div className="logo d-flex">
                            <div className="medicee-lottie" >
                                <Lottie options={defaultOption2}/>
                            </div>
                            <h3 className="logo-heading">Medicee</h3>
                        </div>
                        <h2 className="Sign-in-heading">Sign up</h2>
                        <p className="sign-in-paragraph">Free access to our dashboard</p>
                        <form action="/examples/actions/confirmation.php" method="post">
                           
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" value = {user.username}
                                    onChange={handleInputs}
                                 placeholder="Username" required/>
                                 {errors.username && <p className="error-para"> {errors.username}</p>}
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" value = {user.email}
                                    onChange={handleInputs}
                                 placeholder="Email Address" required/>
                                 {errors.email && <p className="error-para">{errors.email}</p>}
                            </div>
                            <div className="d-flex form-group">
                                <input type="date" className="form-control adjacent-padding" name="DOB" value = {user.DOB}
                                    onChange={handleInputs}
                                 placeholder="Date of birth" required />
                                 
                                <select name="usertype" className="form-select" value = {user.usertype}
                                    onChange={handleInputs} defaultValue="default">
                                    <option value="default">user type</option>
                                    <option value="patient">Normal user</option>
                                    <option value="Doctor">Admin user</option>
                                   
                                </select>
                                
                            </div>
                                {errors.DOB && <p className="error-para" >{errors.DOB} {errors.usertype}</p>}
                                {/* {errors.usertype && <p className="error-para">{errors.usertype}</p>} */}
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" value = {user.password}
                                    onChange={handleInputs}
                                 placeholder="Password" required/>
                                 {errors.password && <p className="error-para" >{errors.password}</p>}
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="cpassword" value = {user.cpassword}
                                    onChange={handleInputs}
                                 placeholder="Confirm Password" required />
                                 {errors.cpassword && <p className="error-para" >{errors.cpassword}</p>}
                            </div>        
                            {/* <div className="form-group">
                                <label className="form-check-label sign-in-paragraph"><input type="checkbox" name="policy" value = {user.policy}
                                    onChange={handleInputs} /> I accept the <a className="text-info">Terms of Use</a> &amp; <a className="text-info">Privacy Policy</a></label>
                            </div> */}
                            <div className="form-group">
                                <button type="submit" onClick={PostData} className="btn btn-customize btn-success btn-block mb-3">Sign up</button>
                            </div>
                        </form>
                        <a onClick={() => navigate("/signin")} className="text-info">Already have an account? Click here</a>    
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
