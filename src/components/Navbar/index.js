// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  
  // here we wrote the code in between the Themecontext element
  <ThemeContext.Consumer>
    {value => {
     // accress the value from the Themecontext
      const {isDarkTheme, toggleTheme} = value

  // if nav bg light is changes based on the boolean values if its true dark is displayed else white light is displayed 
      const navbarbglight = isDarkTheme ? 'nav-bg-dark' : 'nav-bg-light'

  //here also same process but images are changed accordingly
      const websiteLogoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

  
  //here also same process but images are changed accordingly
      const ThemeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

  
  //here also same process but bg lights are changed accordingly
      const navlinklight = isDarkTheme
        ? 'nav-link-item-light'
        : 'nav-link-item-dark'

  // when the user is clicked on the onClickToggle method this method is called the toggleTheme method in themeContext
      const onClickToggle = () => {
        toggleTheme()
      }

      return (
        <div className={`navbar-container ${navbarbglight}`}> // changing the navbar bg themes
          <div className="navbar-content-container">
            <img
              src={websiteLogoImg}
              alt="website logo"
              className="webisite-logo"
            />

         // list out the navbar headers
         
            <ul className="unorder-list">
              <li className="list-item">
                <Link className={`nav-link ${navlinklight}`} to="/">
                  Home
                </Link>
              </li>
              <li className="list-item">
                <Link className={`nav-link ${navlinklight}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              onClick={onClickToggle} // onClick event listener
              className="theme-btn"
              testid="theme"
            >
              <img src={ThemeImg} alt="theme" className="img-btn" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
