import React, { Component } from "react";
import { withTheme } from '../context/ThemeContext';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import './comentario.css';

class FormAgregarComentario extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        const { like, unlike } = this.state;
        return(
            <div className="comments-to-add">
            <b>Comentarios</b>
                <div className="comment">
                <PersonSharpIcon />
                    <div className="comment-add-new">
                    <p className="title-comment">Deja tu comentario</p>
                    <textarea rows="3" placeholder="Escribe aqui tu comentario"></textarea>
                    </div>
                    <button className="comment-button">Publicar </button>
                </div>
            </div>
        )
    }
}

export default withTheme(FormAgregarComentario);