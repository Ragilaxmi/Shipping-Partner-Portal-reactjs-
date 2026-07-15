
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BankDetails() {

    const [accountName, setAccountName] = useState("");
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ifsc, setIfsc] = useState("");

    const navigate = useNavigate();

    const handleNext = () => {

        if(
            accountName !== "" &&
            bankName !== "" &&
            accountNumber !== "" &&
            ifsc !== ""
        ){
            localStorage.setItem("bankName",bankName);
            localStorage.setItem("accountNumber",accountNumber);
            localStorage.setItem("ifsc",ifsc);
            localStorage.setItem("branch",accountName);

            alert("Bank Details Saved Successfully");

            navigate("/profile");

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

            <h2>Bank Details</h2>

            <input
                type="text"
                placeholder="Account Holder Name"
                value={accountName}
                onChange={(e)=>setAccountName(e.target.value)}
            />

            <br/><br/>

            <input
                type="text"
                placeholder="Bank Name"
                value={bankName}
                onChange={(e)=>setBankName(e.target.value)}
            />

            <br/><br/>

            <input
                type="text"
                placeholder="Account Number"
                value={accountNumber}
                onChange={(e)=>setAccountNumber(e.target.value)}
            />

            <br/><br/>

            <input
                type="text"
                placeholder="IFSC Code"
                value={ifsc}
                onChange={(e)=>setIfsc(e.target.value)}
            />

            <br/><br/>

            <button onClick={handleNext}>

                Next

            </button>

        </div>

    );

}

export default BankDetails;