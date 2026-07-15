
import { useRef ,useState} from "react";
import { useNavigate } from "react-router-dom";

function UploadDocuments() {

    const aadharRef = useRef();
    const panRef = useRef();
    const drivingRef = useRef();

    const [aadhaar, setAadhaar] = useState("");
    const [pan, setPan] = useState("");
    const [license, setLicense] = useState("");

const handleAadhaar = (e) => {
  setAadhaar(URL.createObjectURL(e.target.files[0]));
};

const handlePan = (e) => {
  setPan(URL.createObjectURL(e.target.files[0]));
};

const handleLicense = (e) => {
  setLicense(URL.createObjectURL(e.target.files[0]));
};

    const navigate = useNavigate();

    const handleNext = () => {

        if(
            aadharRef.current.files.length > 0 &&
            panRef.current.files.length > 0 &&
            drivingRef.current.files.length > 0
        ){

            localStorage.setItem("aadhaar",aadhaar);
            localStorage.setItem("pan",pan);
            localStorage.setItem("license",license);
            alert("Documents Uploaded Successfully");

            navigate("/bankdetails");

        }

        else{

            alert("Please Upload All Documents");

        }

    }

    return(

        <div className="container">

            <div className="header">

                Shipping Partner Portal

            </div>

            <h2>Upload Documents</h2>

            <label>Aadhaar Card</label>

            <input
                type="file"
                ref={aadharRef}
                onChange={handleAadhaar}
            />

            <br/><br/>

            <label>PAN Card</label>

            <input
                type="file"
                ref={panRef}
                onChange={handlePan}
            />

            <br/><br/>

            <label>Driving License</label>

            <input
                type="file"
                ref={drivingRef}
                onChange={handleLicense}

            />

            <br/><br/>

            <button onClick={handleNext}>

                Next

            </button>

        </div>

    )

}

export default UploadDocuments;