import './AdminNav.css'
import { Link } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const AdminNav = () => {
  return (
    <>
        <div className='admin-nav'>
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

        <div className='listings-right-container'>
                <Link to='/' className='listings-link'>
                    Airbnb your home
                </Link>
                <div className='home-menu-profile'>
                    <MenuOutlinedIcon fontSize='small' />
                    <button className='home-account-circle'>
                        <AccountCircleIcon fontSize='large' />
                    </button>
                </div>
            </div>
        </div>

        <div className='filter-header'>
            <div className='filter-header-container'>
                <Link to='/view-reservations'>  
                    <button className='filter-reservation'>
                        View Reservations
                    </button>
                </Link>
                <Link to='/view-listings'>
                    <button className='filter-listing'>
                        View Listings
                    </button>
                </Link>
                <Link to='/create-listing'>
                    <button className='filter-create'>
                        Create Listing
                    </button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default AdminNav