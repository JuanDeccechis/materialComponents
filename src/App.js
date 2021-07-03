import React, { Component } from "react";
import './App.css';

import { ThemeContext } from './context/ThemeContext';
import ThemeChanger from './context/ThemeCharger';
import Button from './button/Button';

class App extends Component {
  render() {
    return (
      <div className="container">
                  <ThemeChanger>
                    <ThemeContext.Consumer>
                      {
                        theme => (
                          <div className={`app ${theme}`}>
                            <Button/>
                          </div>
                        )
                      }
                    </ThemeContext.Consumer>
                  </ThemeChanger>
      </div>
    );
  }
}

export default App;
