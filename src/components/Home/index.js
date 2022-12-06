// Write your code here
import ThemeContext from '../../context/ThemeContext' // importing the ThemeContext 

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value // here we accessing the value by using consumer property in themecontext

  // if the value is true then dark img is displayed else light img is displayed
      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

  // here also value is true dark theme is displayed else light theme is displayed
      const homebglight = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

  // here also value is true dark theme is displayed else light theme is displayed
      const homeheadinglight = isDarkTheme
        ? 'home-heading-light'
        : 'home-heading-dark'

      return (
        <div className={`home-container ${homebglight}`}> // changing the themes using the template method
          <Navbar />
          <div className="home-content-container">
            <div className="home-img-container">
              <img src={homeImgUrl} alt="home" className="home-img" />
              <h1 className={`home-heading ${homeheadinglight}`}>Home</h1> // changing the themes using the template method
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
