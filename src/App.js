import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import './App.css'

// for maintain a state method we use class component instead of functional component
class App extends Component {
  state = {isDarkTheme: false} // updating the state

  // here we updating the toggleTheme method using setState
  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      
      // themecontext method is updating the values where we are accessing themecontext methods
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.toggleTheme}} // accessing the toggle theme and isdarktheme
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
        )
      </ThemeContext.Provider>
    )
  }
}

export default App
