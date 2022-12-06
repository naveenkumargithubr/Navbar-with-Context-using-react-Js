// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homebglight = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const homeheadinglight = isDarkTheme
        ? 'home-heading-light'
        : 'home-heading-dark'

      return (
        <div className={`home-container ${homebglight}`}>
          <Navbar />
          <div className="home-content-container">
            <div className="home-img-container">
              <img src={homeImgUrl} alt="home" className="home-img" />
              <h1 className={`home-heading ${homeheadinglight}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
