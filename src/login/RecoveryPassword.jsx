import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import './login.css';

class RecoveryPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibilityPassword: false,
        }
        this.handleChangeVisibilityPassword = this.handleChangeVisibilityPassword.bind(this);
    }

    handleChangeVisibilityPassword() {
        this.setState({ visibilityPassword : !this.state.visibilityPassword });
    }

    render() {
        const { visibilityPassword } = this.state;
        return (
           /* <div>
                <h1>Recuperar clave</h1>
                <p>Te enviamos un mail con un código de 6 dígitos y una clave temporal.
                    Puedes utilizarlo en los próximos 5 minutos para ingresar y cambiar tu clave. </p>
                <form action="" method="post">
                    <div className="input-icons">
                        <VpnKeyIcon className="icon-color" />
                        <input className="input-with-padding" type="text" placeholder="Código"/>
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
                        <span>Cancelar</span>
                    </NavLink>
                    <NavLink to="/" activeClassName="">
                        <button>Acceder</button>
                    </NavLink>
                </form>
            </div>*/

            <form className="jss3" novalidate="">
                <div className="MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth">

                    
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                        <fieldset aria-hidden="true" className="jss5 MuiOutlinedInput-notchedOutline"><legend className="jss7">
                            <span>Email Address &nbsp;*</span>
                        </legend>
                        <input type="text" aria-invalid="false" autocomplete="email" autofocus="" id="email" name="email" required="" className="MuiInputBase-input MuiOutlinedInput-input" value="" />
                        </fieldset>
                    </div>
                </div>
            </form>
        );
    }
}

export default RecoveryPassword;
