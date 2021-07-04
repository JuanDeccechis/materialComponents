import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';
import './volume.css';

class volume extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 30,
        showVolumeBar: true
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleClickDown = this.handleClickDown.bind(this);
      this.handleClickUp = this.handleClickUp.bind(this);
      this.handleClickShow = this.handleClickShow.bind(this);
    }

    handleChange = (event, newValue) => {
        this.setState({ value: event.target.value });
    };

    handleClickUp = (event) => {
        this.setState({ value: ++this.state.value });
    }

    handleClickDown = (event) => {
        this.setState({ value: --this.state.value });
    }

    handleClickShow = (event) => {
        this.setState({ showVolumeBar: !this.state.showVolumeBar });
    }

    render(){
        const { value, showVolumeBar } = this.state;
  return (
    <div>
      <Typography>
        Volume
      </Typography>
      <div className="volume-flex-inline-size">
          <VolumeDown />
          <span className="volume-bar-container-style"><Slider value={value} onChange={this.handleChange} aria-labelledby="continuous-slider" /></span>
          <VolumeUp />
       </div>
       <div className="volume-flex-inline-size">
          <VolumeDown onClick={this.handleClickDown}/>
          <div className="volume-bar-container-style" onClick={this.handleChangeCurrent}>
            <input className="volume-input-value" type="range" min="0" max="100" value={value} onChange={this.handleChange} />
          </div>
          <VolumeUp onClick={this.handleClickUp}/>
       </div>


        <div className="volume-flex-inline-size">
        { value > 50 ?
          <VolumeUp onClick={this.handleClickShow}/>
          :
          value > 5 ?
          <VolumeDown onClick={this.handleClickShow}/>
          :
          <VolumeOff onClick={this.handleClickShow}/>
        }
          { showVolumeBar &&
            <div className="volume-bar-container-style-short" onClick={this.handleChangeCurrent}>
                <input className="volume-input-value" type="range" min="0" max="100" value={value} onChange={this.handleChange} />
            </div>
          }
       </div>

    </div>
  );
}
}

export default volume;