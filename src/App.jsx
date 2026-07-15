
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import UploadDocuments from "./pages/UploadDocuments";
import BankDetails from "./pages/BankDetails";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/upload" element={<UploadDocuments />} />

        <Route path="/bankdetails" element={<BankDetails />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;