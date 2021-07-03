import React, { Component } from "react";
import './App.css';

import { ThemeContext } from './context/ThemeContext';
import ThemeChanger from './context/ThemeCharger';

import { withTheme } from './context/ThemeContext';
import Button from './button/Button';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className={`app ${this.props.theme}`}>
          <Button/>
        </div>
      </div>
    );
  }
}

export default withTheme(App);
