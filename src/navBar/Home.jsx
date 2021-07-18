import React, { Component } from "react";
import Boton from '../button/Boton';
import Comentario from '../comentario/Comentario';
import ContinuousSlider from '../volume/volume';

class Home extends Component {

    constructor(props) {
        super(props);
    }
/* en Comentario está el resize, tener en cuenta pasar una lista
de comentarios que se pueda ordenar por mas likes, mas unlikes,
y mas reciente (quizas)*/
    render() {
        return (
            <div>
                HOME
                <Boton/>
<ContinuousSlider />
<Comentario />

            </div>
        );
    }
}

export default Home;
