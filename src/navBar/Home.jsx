import React, { Component } from "react";
import Boton from '../button/Boton';
import ContinuousSlider from '../volume/volume';
import Notification from '../notification/notification';
import Settings from '../settings/settings';

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
<Settings />
            </div>
        );
    }
}

export default Home;
