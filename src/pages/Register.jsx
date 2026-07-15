

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UseContext";

function Register(){

const navigate = useNavigate();

const [name,setName]=useState("");

const [email,setEmail]=useState("");

const [phone,setPhone]=useState("");

const [password,setPassword]=useState("");

const { setUser } = useContext(UserContext);


const handleRegister = () => {

    if(name!=="" && email!=="" && phone!=="" && password!==""){

        setUser({

            name,

            email,

            phone
        });

        alert("Registration Successful");

        navigate("/login");

    }

    else{

        alert("Please Fill All Fields");

    }

};

return(

<div className="container">

    <div className="header">

        Shipping Partner Portal

    </div>

    <h2>Shipping Partner Registration</h2>

    <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
    />

    <br/><br/>

    <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
    />

    <br/><br/>

    <input
        type="text"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
    />

    <br/><br/>

    <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
    />

    <br/><br/>

    <button onClick={handleRegister}>
        Register
    </button>

</div>

)

}

export default Register;