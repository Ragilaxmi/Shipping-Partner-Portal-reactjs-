
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UseContext";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogin = () => {

        if(email == user.email && password !== ""){

            alert("Login Successful");

            navigate("/upload");

        }
        else{

            alert("Invalid Email");

        }

    }

    return(

<div className="container">

    <div className="header">

        Shipping Partner Portal

    </div>

    <h2>Shipping Partner Login</h2>

    <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
    />

    <br/><br/>

    <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
    />

    <br/><br/>

    <button onClick={handleLogin}>

        Login

    </button>

</div>

)

}

export default Login;