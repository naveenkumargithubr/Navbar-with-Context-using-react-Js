// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const changeNotFoundLight = isDarkTheme
        ? 'notfound-light'
        : 'notfound-dark'

      const changeNotFoundHead = isDarkTheme ? 'heading-dark' : 'heading-light'
      const changeDesc = isDarkTheme ? 'desc-dark' : 'desc-light'

      return (
        <div className={`notfound-container ${changeNotFoundLight}`}>
          <Navbar />

          <div className="not-found-responsive-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notfound-img"
            />
            <h1 className={`notfound-heading ${changeNotFoundHead}`}>
              Lost Your Way ?
            </h1>
            <p className={`notfound-desc ${changeDesc}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
