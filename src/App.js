import React, { Component } from "react";
import './App.css';

import { ThemeContext } from './context/ThemeContext';
import ThemeChanger from './context/ThemeCharger';
import Boton from './button/Boton';
import ContinuousSlider from './volume/volume';
import Notification from './notification/notification';

import Router from './navBar/Router';

class App extends Component {
  render() {
    return (
      <div className="container">
                  <ThemeChanger>
                    <ThemeContext.Consumer>
                      {
                        theme => (
                          <div className={`app ${theme}`}>
                            <Boton/>
<ContinuousSlider />
<Notification />
<Router />
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
