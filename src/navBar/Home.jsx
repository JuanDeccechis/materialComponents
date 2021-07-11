import React, { Component } from "react";
import Boton from '../button/Boton';
import ContinuousSlider from '../volume/volume';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                HOME
                <Boton/>
<ContinuousSlider />
            </div>
        );
    }
}

export default Home;
