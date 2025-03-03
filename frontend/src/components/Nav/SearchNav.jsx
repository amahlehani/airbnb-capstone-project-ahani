import React, { useState } from 'react';
import './SearchNav.css';
import { Link, useNavigate } from 'react-router-dom';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getUserRole } from '../../utils/auth';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';

const SearchNav = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const navigate = useNavigate();

    const role = getUserRole();

      const toggleLoginDropdown = () => {
        setIsLoginOpen(!isLoginOpen);
      };

      const closeLoginDropdown = (e) => {
        // Close the dropdown if the user clicks outside
        if (!e.target.closest('.account-dropdown')) {
          setIsLoginOpen(false);
        }
      };

      React.useEffect (() => {
        window.addEventListener('click', closeLoginDropdown);
        return () => {
          window.removeEventListener('click', closeLoginDropdown);
        };
      }, []);

      const handleLogout = () => {
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        navigate("/login");
      };
  return (
    <>
    <div className='search-nav'>
        <div className='home-logo-container'>
            <div className='home-logo'>
                <Link to='/' className='logo-link'>
                    <img 
                        src='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png'
                        alt='airbnb-logo'
                    />
                </Link>
            </div>
        </div>
        <div className="navbar-search">
            <input type="text" placeholder="Bordeaux" />
            <span>|</span>
            <input type="text" placeholder="Feb 19-26" />
            <span>|</span>
            <input type="text" placeholder="2 guests" />
            <button className="search-btn">
                <SearchIcon />
            </button>
        </div>
        <div className='listings-right-container'>
            <button className='listings-link host-btn'>
                Become a host
            </button>
            <LanguageOutlinedIcon fontSize='small' />
            <div className='home-menu-profile'>
                <MenuOutlinedIcon fontSize='small' />
                <div className='account-dropdown'>
                  <button className='home-account-circle' onClick={toggleLoginDropdown}>
                      <AccountCircleIcon fontSize='large' />
                  </button>
                  {isLoginOpen && (
                        <div id="accountDropdown" className="account-dropdown-content">
                          {role ? <button onClick={handleLogout}>Logout</button> : <a href="/login">Login</a>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    <div className="searchnav-filters">
        <button>
          Price
          <ExpandMoreIcon fontSize='small' />
        </button>
        <button>
          Type of place
          <ExpandMoreIcon fontSize='small' />
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
          <TuneIcon fontSize='small' />
          Filters
        </button>
      </div>
    </>
  )
}

export default SearchNav