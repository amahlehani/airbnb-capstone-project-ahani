import './ListingsNav.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const ListingsNav = () => {
  return (
    <>
        <div className='listings-nav'>
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
            <div className='listings-middle-container'>
                <div className='nav-search-container'>
                    <input type='text' placeholder='Start your search' />
                    <div className="listings-search-icon-container">
                        <SearchIcon className="listings-search-icon" />
                    </div>
                </div>
            </div>
            <div className='listings-right-container'>
                <Link to='/' className='listings-link'>
                    Airbnb your home
                </Link>
                <LanguageOutlinedIcon fontSize='small' />
                <div className='home-menu-profile'>
                    <MenuOutlinedIcon fontSize='small' />
                    <button className='home-account-circle'>
                        <AccountCircleIcon fontSize='large' />
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ListingsNav