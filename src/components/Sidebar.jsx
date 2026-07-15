import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h3>Menu</h3>

      <Link to="/dashboard" className="menu-link">
        🏠 Dashboard
      </Link>

      <Link to="/profile" className="menu-link">
        👤 Profile
      </Link>

      <Link to="/upload" className="menu-link">
        📄 Documents
      </Link>

      <Link to="/bankdetails" className="menu-link">
        🏦 Bank Details
      </Link>

      <Link to="/orders" className="menu-link">
        📦 Orders
      </Link>

    </div>
  );
}

export default Sidebar;