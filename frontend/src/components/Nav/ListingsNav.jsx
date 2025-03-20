import "./ListingsNav.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ListingsNav = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [username] = useState(localStorage.getItem("username"));

  const navigate = useNavigate();

  const toggleLoginDropdown = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const closeLoginDropdown = (e) => {
    if (!e.target.closest(".account-dropdown")) {
      setTimeout(() => setIsLoginOpen(false), 200);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", closeLoginDropdown);
    return () => {
      window.removeEventListener("click", closeLoginDropdown);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="listings-nav">
        <div className="home-logo-container">
          <div className="home-logo">
            <Link to="/" className="logo-link">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
                alt="airbnb-logo"
              />
            </Link>
          </div>
        </div>
        <div className="listings-middle-container">
          <div className="nav-search-container">
            <input type="text" placeholder="Start your search" />
            <div className="listings-search-icon-container">
              <SearchIcon className="listings-search-icon" />
            </div>
          </div>
        </div>
        <div className="listings-right-container">
          {username ? (
            <span className="listings-link">Welcome, {username}</span>
          ) : (
            <Link to="/login" className="listings-link host-btn">
              Airbnb your home
            </Link>
          )}
          <LanguageOutlinedIcon fontSize="small" />
          <div className="home-menu-profile">
            <MenuOutlinedIcon fontSize="small" />
            <button
              className="home-account-circle"
              onClick={toggleLoginDropdown}
            >
              <AccountCircleIcon fontSize="large" />
            </button>
            {isLoginOpen && (
              <div
                id="accountDropdown"
                className="account-dropdown-content listings-logout-btn"
              >
                <button onClick={handleLogout}>Logout</button>
                <button
                  onClick={() => {
                    setIsLoginOpen(false);
                    setTimeout(
                      () => navigate("/view-reservations", { replace: true }),
                      100
                    );
                  }}
                >
                  View Reservations
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingsNav;
