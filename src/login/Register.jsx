import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import './login.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibilityPassword: false,
        }
        this.handleGoToLogin = this.handleGoToLogin.bind(this);
        this.handleChangeVisibilityPassword = this.handleChangeVisibilityPassword.bind(this);
    }

    handleGoToLogin() {
        
    }

    handleChangeVisibilityPassword() {
        this.setState({ visibilityPassword : !this.state.visibilityPassword });
    }

    render() {
        console.log("llega a register");
        const { visibilityPassword } = this.state;
        return (
            <div>
                <h1>Unirme a la comunidad</h1>
                <form action="" method="post">
                <input type="search" results />
                    <div className="input-icons">
                        <AccountCircleIcon className="icon-color" />
                        <input className="input-with-padding" type="text" placeholder="Usuario"/>
                    </div>
                    <div className="input-icons">
                        <AlternateEmailIcon className="icon-color" /> 
                        <input className="input-with-padding" type="email" placeholder="Mail"/>
                    </div>
                    
                    <div className="input-icons">
                        <LockOpenIcon className="icon-color" />
                        <input className="input-with-padding" type={ visibilityPassword ? "text" : "password" } placeholder="Contraseña"/>
                        { visibilityPassword ?
                            <VisibilityOffIcon className="icon-color" onClick={this.handleChangeVisibilityPassword}/>
                            :
                            <VisibilityIcon className="icon-color" onClick={this.handleChangeVisibilityPassword} />
                        }
                    </div>
                    <NavLink to="/" activeClassName="">
                        <button>Registrarme</button>
                    </NavLink>
                    <div>
                        <NavLink to="/login" activeClassName="">
                            <span>Ya tengo cuenta</span>
                        </NavLink>
                    </div>

                </form>
            </div>
        );
    }
}

export default Register;
