// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const navbarbglight = isDarkTheme ? 'nav-bg-dark' : 'nav-bg-light'

      const websiteLogoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const ThemeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navlinklight = isDarkTheme
        ? 'nav-link-item-light'
        : 'nav-link-item-dark'

      const onClickToggle = () => {
        toggleTheme()
      }

      return (
        <div className={`navbar-container ${navbarbglight}`}>
          <div className="navbar-content-container">
            <img
              src={websiteLogoImg}
              alt="website logo"
              className="webisite-logo"
            />

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
              onClick={onClickToggle}
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
