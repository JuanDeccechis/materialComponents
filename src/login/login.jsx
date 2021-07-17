import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import './login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibilityPassword: false,
            inputWithFocus: '',
            valueUsuario: '',
            valueContraseña: '',
            error: {}
        }
        this.handleChangeVisibilityPassword = this.handleChangeVisibilityPassword.bind(this);
        this.handleFocusInput = this.handleFocusInput.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.handleChangeUsuario = this.handleChangeUsuario.bind(this);
        this.handleChangeContraseña = this.handleChangeContraseña.bind(this);
    }

    handleChangeVisibilityPassword() {
        this.setState({ visibilityPassword : !this.state.visibilityPassword });
        this.handleFocusInput("contraseña");
    }

    handleChangeUsuario(event) {
        //console.log(event.target.value);
        this.setState({ valueUsuario: event.target.value });
    }

    handleChangeContraseña(event) {
        //console.log(event.target.value);
        this.setState({ valueContraseña: event.target.value });
    }

    handleFocusInput(inputName) {
        console.log("acaca");
        let prevFocus = this.state.inputWithFocus;
        this.setState({ inputWithFocus: inputName });
        if (prevFocus === inputName){
            console.log("mismo elem");
        } else {
            if (inputName !== '') {
                console.log("nuevo elem");
                window.setTimeout(() => {
                    let elemToFocus = document.querySelector(`#${inputName}`);
                    if (elemToFocus) {
                        //console.log(elemToFocus);
                        elemToFocus.focus();
                        this.setState({ error: {} });
                    }
                }, 
                100);
                    
                
            } if (prevFocus !== '') {
                console.log("viejo elem");
                window.setTimeout(() => {
                let elemToValidate = document.querySelector(`#${prevFocus}`);
                    if (elemToValidate) {
                        //console.log(elemToValidate);
                        this.validateInput(elemToValidate, prevFocus);
                    }
                }, 
                100);
            }
        }
    }

    validateInput(input, name) {
        if (input.value.length < input.minLength || input.value.length > input.maxLength) {
            input.className = `${input.className} error`;
            let errorLocal = {"name": name, "message": `Debes ingresar tu ${name}.` }
            this.setState({ error: errorLocal });
            //console.log("error en validacion");
        }
        else {
            input.className = `${input.className} valid`;
            this.setState({ error: {} });
            //console.log("validacion OK");
        }
    }

    render() {
        const { visibilityPassword, inputWithFocus, error } = this.state;
        //console.log(inputWithFocus);
        //console.log(error);
        return (
            <div className="login-page-global-container">
                <h1>Acceder a mi cuenta</h1>
                <form action="" method="post" className="form-container">
                    <input type="search" results />
                    <div className="input-icons" onFocus={() => this.handleFocusInput("usuario")} onBlur={() => this.handleFocusInput('')}>
                        <AccountCircleIcon className={`icon-color ${inputWithFocus === "usuario" && "with-focus"} ${error.name === "usuario" && "with-error"}`} />
                        { inputWithFocus === "usuario" ?
                            <fieldset aria-hidden="true" className="jss5 MuiOutlinedInput-notchedOutline">
                                <legend className="jss7">
                                    <span>Email Address &nbsp;*</span>
                                </legend>
                                
                                <input id="usuario" name="usuario" className="input-with-padding" type="text" placeholder="Usuario*" required value={this.state.valueUsuario} onChange={this.handleChangeUsuario}/>
                            </fieldset>
                        :
                            <input id="usuario" name="usuario" className="input-with-padding" type="text" placeholder="Usuario*" required value={this.state.valueUsuario} onChange={this.handleChangeUsuario}/>
                        }

                        {error.name === "usuario" && 
                            <span className="error-text">{error.message}</span>
                        }
                    </div>
                    <div className="input-icons" onFocus={() => this.handleFocusInput("contraseña")} onBlur={() => this.handleFocusInput('')}>
                        <LockOpenIcon className={`icon-color ${inputWithFocus === "contraseña" && "with-focus"} ${error.name === "contraseña" && "with-error"}`} />
                        { inputWithFocus === "contraseña" ?
                            <fieldset aria-hidden="true" className="jss5 MuiOutlinedInput-notchedOutline">
                                <legend className="jss7">
                                    <span>Password Address &nbsp;*</span>
                                </legend>
                                
                                <input id="contraseña" name="contraseña" className="input-with-padding" type={ visibilityPassword ? "text" : "password" } placeholder="Contraseña*" required 
                                minLength="8" maxLength="20" value={this.state.valueContraseña} onChange={this.handleChangeContraseña}/>
                            </fieldset>
                        :
                        <input id="contraseña" name="contraseña" className="input-with-padding" type={ visibilityPassword ? "text" : "password" } placeholder="Contraseña*" required
                        minLength="8" maxLength="20" value={this.state.valueContraseña} onChange={this.handleChangeContraseña} />
                        }

                        { visibilityPassword ?
                            <VisibilityOffIcon className={`icon-color ${inputWithFocus === "contraseña" && "with-focus-after"} ${error.name === "contraseña" && "with-error"}`} onClick={this.handleChangeVisibilityPassword}/>
                            :
                            <VisibilityIcon className={`icon-color ${inputWithFocus === "contraseña" && "with-focus-after"} ${error.name === "contraseña" && "with-error"}`} onClick={this.handleChangeVisibilityPassword} />
                        }

                        {error.name === "contraseña" && 
                            <span className="error-text">{error.message}</span>
                        }
                    </div>
                    
                    <input type="checkbox" id="recordar" name="recordar" className="espaciado" value={false} />
                    <label for="recordar"> Remember me</label>
                    
                    <div className="espaciado">
                        <NavLink to="/" activeClassName="">
                            <button className="principal">Acceder</button>
                        </NavLink>
                    </div>
                    
                    
                    <div className="login-links-container espaciado">
                        <NavLink to="/recoveryPassword" activeClassName="">
                            <span>Olvidé mi clave</span>
                        </NavLink>
                        <div>
                            <span>No tenés cuenta? </span>
                            <NavLink to="/register" activeClassName="">
                                <span>Registrate</span>
                            </NavLink>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default Login;
