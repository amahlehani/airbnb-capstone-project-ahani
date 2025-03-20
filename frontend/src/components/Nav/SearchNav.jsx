import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./SearchNav.css";
import { Link, useNavigate } from "react-router-dom";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getUserRole } from "../../utils/auth";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TuneIcon from "@mui/icons-material/Tune";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const SearchNav = ({ onLocationSelect }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All locations");
  const [username, setUsername] = useState(null);

  const navigate = useNavigate();

  const role = getUserRole();

  const popRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popRef.current &&
        !popRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowGuestPopup(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleGuestChange = (type, operation) => {
    if (type === "adults") {
      setAdultCount((prevCount) => {
        const newCount =
          operation === "increment" ? prevCount + 1 : prevCount - 1;
        return Math.max(1, Math.min(20, newCount)); 
      });
    } else if (type === "children") {
      setChildCount((prevCount) => {
        const newCount =
          operation === "increment" ? prevCount + 1 : prevCount - 1;
        return Math.max(0, Math.min(10, newCount)); 
      });
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest(".dropdown")) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    onLocationSelect(location);
    navigate(`/locations/${encodeURIComponent(location.toLowerCase())}`);
    setIsOpen(false);
  };

  const toggleLoginDropdown = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const closeLoginDropdown = (e) => {
    if (!e.target.closest(".account-dropdown")) {
      setIsLoginOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", closeLoginDropdown);
    return () => {
      window.removeEventListener("click", closeLoginDropdown);
    };
  }, []);

  const handleBecomeAdmin = () => {
    if (!role) {
      alert("You must login first!");
      navigate("/login");
      return;
    }

    if (role === "admin") {
      navigate("/create-listing");
    } else {
      alert("You are not an admin.");
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="search-nav">
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
        <div className="location-header-bottom">
          <div className="navbar-search">
            <div className="locations-search-where">
              <div className="dropdown">
                <button className="location-dropbtn" onClick={toggleDropdown}>
                  {selectedLocation}
                </button>
                {isOpen && (
                  <div id="searchDropdown" className="dropdown-content">
                    <Link
                      to="/locations/All locations"
                      onClick={() => handleLocationSelect("All locations")}
                    >
                      All locations
                    </Link>
                    <Link
                      to="/locations/Cape Town"
                      onClick={() => handleLocationSelect("Cape Town")}
                    >
                      Cape Town
                    </Link>
                    <Link
                      to="/locations/Paris"
                      onClick={() => handleLocationSelect("Paris")}
                    >
                      Paris
                    </Link>
                    <Link
                      to="/locations/Thailand"
                      onClick={() => handleLocationSelect("Thailand")}
                    >
                      Thailand
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="location-checkin-date">
              <DatePicker
                className="date-picker"
                placeholderText="Add date"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
              />
            </div>

            <div className="guest-counter">
              <button
                className="search-button location-search-button"
                onClick={() => setShowGuestPopup(true)}
                ref={buttonRef}
              >
                {adultCount + childCount > 0
                  ? `${adultCount + childCount} guests`
                  : `${adultCount + childCount} guest`}
              </button>
              {showGuestPopup && (
                <div className="guest-popup" ref={popRef}>
                  <div className="guest-selectors">
                    <div className="guest-selector">
                      <p className="adult-selector">Adults</p>
                      <button
                        className="guest-btn"
                        onClick={() => handleGuestChange("adults", "decrement")}
                      >
                        <RemoveIcon />
                      </button>
                      <input
                        type="number"
                        value={adultCount}
                        readOnly
                        className="guest-input"
                      />
                      <button
                        className="guest-btn"
                        onClick={() => handleGuestChange("adults", "increment")}
                      >
                        <AddIcon />
                      </button>
                    </div>
                    <div className="guest-selector">
                      <p className="children-selector">Children</p>
                      <button
                        className="guest-btn"
                        onClick={() =>
                          handleGuestChange("children", "decrement")
                        }
                      >
                        <RemoveIcon />
                      </button>
                      <input
                        type="number"
                        value={childCount}
                        readOnly
                        className="guest-input"
                      />
                      <button
                        className="guest-btn"
                        onClick={() =>
                          handleGuestChange("children", "increment")
                        }
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="location-search-icon-container">
              <SearchIcon className="search-icon" />
            </div>
          </div>
        </div>
        <div className="listings-right-container">
          {username ? (
            <span className="listings-link">Welcome, {username}</span>
          ) : (
            <button
              onClick={handleBecomeAdmin}
              className="listings-link host-btn"
            >
              Become a host
            </button>
          )}
          <LanguageOutlinedIcon fontSize="small" />
          <div className="home-menu-profile">
            <MenuOutlinedIcon fontSize="small" />
            <div className="account-dropdown">
              <button
                className="home-account-circle"
                onClick={toggleLoginDropdown}
              >
                <AccountCircleIcon fontSize="large" />
              </button>
              {isLoginOpen && (
                <div id="accountDropdown" className="account-dropdown-content">
                  {role ? (
                    <button onClick={handleLogout}>Logout</button>
                  ) : (
                    <a href="/login">Login</a>
                  )}
                  {role ? (
                    <button>View Reservations</button>
                  ) : (
                    <a href="/view-reservations">View Reservations</a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="searchnav-filters">
        <button>
          Price
          <ExpandMoreIcon fontSize="small" />
        </button>
        <button>
          Type of place
          <ExpandMoreIcon fontSize="small" />
        </button>
        <span>|</span>
        <button>Free cancellation</button>
        <button>Wifi</button>
        <button>Kitchen</button>
        <button>Air conditioning</button>
        <button>Washer</button>
        <button>Iron</button>
        <button>Dedicated workspace</button>
        <button>Free parking</button>
        <button>Dryer</button>
        <button className="searchfilters-btn">
          <TuneIcon fontSize="small" />
          Filters
        </button>
      </div>
    </>
  );
};

SearchNav.propTypes = {
  onLocationSelect: PropTypes.func.isRequired, 
};

export default SearchNav;
