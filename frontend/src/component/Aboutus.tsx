import React from "react";
import {useNavigate} from 'react-router-dom';

const Aboutus = () =>{
    const navigate = useNavigate();
    return(
        <>
            <h1>welcome to aboutus</h1>
            <button onClick={() => navigate("/home")}>Logout</button>
        </>
    )
}
export default Aboutus;