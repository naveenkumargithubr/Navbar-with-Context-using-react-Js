// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const changeAboutLight = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const changeHeadingLight = isDarkTheme
        ? 'abt-heading-light'
        : 'abt-heading-dark'

      return (
        <div className={`about-container ${changeAboutLight}`}>
          <Navbar />
          <div className="about-responsive-container">
            <img src={aboutImgUrl} alt="about" className="about-img" />
            <h1 className={`abt-heading ${changeHeadingLight}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
