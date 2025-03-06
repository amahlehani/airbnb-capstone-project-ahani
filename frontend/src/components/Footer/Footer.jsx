import './Footer.css'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-terms'>
          <div className='footer-term-items'>
            <div className='footer-head'>
              <p>Support</p>
            </div>
              <p>Help Center</p>
              <p>Safety information</p>
              <p>Cancellation options</p>
              <p>Our COVID-19 Response</p>
              <p>Supporting people with disabilities</p>
              <p>Report a neighbourhood concern</p>
            </div>
            <div className='footer-term-items'>
              <div className='footer-head'>
                <p>Community</p>
              </div>
              <p>Airbnb.org: disaster relief housing</p>
              <p>Support: Afghan refugees</p>
              <p>Celebrating diversity & belonging</p>
              <p>Combating discrimination</p>
            </div>
            <div className='footer-term-items'>
              <div className='footer-head'>
                <p>Hosting</p>
              </div>
              <p>Try Hosting</p>
              <p>AirCover: protection for Hosts</p>
              <p>Explore hosting resources</p>
              <p>Visit our community forum</p>
              <p>How to host responsibly</p>
            </div>
            <div className='footer-term-items'>
              <div className='footer-head'>
                <p>About</p>
              </div>
              <p>Newsroom</p>
              <p>Learn about new features</p>
              <p>Letter from our founders</p>
              <p>Careers</p>
              <p>Investors</p>
              <p>Airbnb luxe</p>
            </div>
        </div>
        <div className='footer-copyright'>
          <div className='copyright'>
              <p>© 2025 Airbnb Clone, Amahle Hani.</p>
              <p>   &bull;   Privacy  &bull;  Terms  &bull;  Sitemap</p>
          </div>
          <div className='footer-icons'>
            <div className='language-currency'>
            <LanguageOutlinedIcon fontSize="small" />
              <select name="language-picker-select" id="language-picker-select">
                <option lang="en" value="english" selected>English (UK)</option>
                <option lang="de" value="deutsch">Deutsch</option>
                <option lang="fr" value="francais">Français</option>
              </select>
              
              <select name='currency-picker-select' id='currency-picker-select'>
                <option selected>R ZAR</option>
                <option>$ USD</option>
                <option>€ EUR</option>
                <option>£ GBP</option>

              </select>
            </div>
            <div className='social-media-icons'>
              <FacebookRoundedIcon fontSize='small' />
              <TwitterIcon fontSize='small' />
              <InstagramIcon fontSize='small' />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer