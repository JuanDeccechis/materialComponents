import React, { Component } from "react";
import Boton from '../button/Boton';
import ContinuousSlider from '../volume/volume';
import Notification from '../notification/notification';

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
<Notification />
            </div>
        );
    }
}

export default Home;
