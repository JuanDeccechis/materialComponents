import React, { Component } from 'react';

import { ThemeContext } from './ThemeContext';
import './theme.css';

class ThemeChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
            switchDark: true
        };
        this.handleSwitch = this.handleSwitch.bind(this);
    }
    
    handleSwitch(event){
        let newTheme = this.state.switchDark ? 'light' : 'dark';
        this.setState({ switchDark: !this.state.switchDark, theme: newTheme });
    }

    render() {
        return (
            <div>
                <div className="container-switcher">
                    <span className="label-switcher"> Modo nocturno: </span>
                    <label class="switch">
                        <input type="checkbox" checked={this.state.switchDark} onChange={this.handleSwitch} />
                        <span class="slider round"></span>
                    </label>
                </div>
                <ThemeContext.Provider value={this.state.theme} >
                    {this.props.children}
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default ThemeChanger;