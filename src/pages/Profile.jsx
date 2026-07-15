
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UseContext";

function Profile(){

    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const handleDashboard = () =>{

        navigate("/dashboard");

    }
    const aadhaar=localStorage.getItem("aadhaar");
    const pan=localStorage.getItem("pan");
    const license=localStorage.getItem("license");

    const bankName=localStorage.getItem("bankName");
    const accountNumber=localStorage.getItem("accountNumber");
    const ifsc=localStorage.getItem("ifsc");
    const branch=localStorage.getItem("branch");

    return(
        <div className="profile-page">

        <div className="profile-header">

    <h1>Shipping Partner Profile</h1>
    </div>

    <div className="top-section">

        <div className="profile-card">
            <h2>Personal Details</h2>

            <p><b>Name :</b> {user.name}</p>
            <p><b>Email :</b> {user.email}</p>
            <p><b>Phone :</b> {user.phone}</p>
        </div>

        <div className="profile-card">
            <h2>Bank Details</h2>

            <p><b>Bank :</b> {bankName}</p>
            <p><b>Account :</b> {accountNumber}</p>
            <p><b>IFSC :</b> {ifsc}</p>
            <p><b>Branch :</b> {branch}</p>
        </div>
    </div>

    <div className="documents-card">
        <h2>Documents</h2>

        <div className="documents-row">
            <div>
            <h4>Aadhaar</h4>
            <img src={aadhaar} className="doc-img"/>
            </div>

            <div>
            <h4>PAN</h4>
            <img src={pan} className="doc-img"/>

            </div>

            <div>
            <h4>Driving License</h4>
            <img src={license} className="doc-img"/>

            </div>

        </div>
    <div className="profile-btn">
    <button onClick={handleDashboard}>
        Go To Dashboard
    </button>
    </div>
        

    </div>

</div>
    )

}

export default Profile;