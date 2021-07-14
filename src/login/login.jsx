import React, { Component } from "react";
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
            haveAccount: true,
            visibilityPassword: false,
        }
        this.handleCreateAccount = this.handleCreateAccount.bind(this);
        this.handleChangeVisibilityPassword = this.handleChangeVisibilityPassword.bind(this);
    }

    handleCreateAccount() {
        this.setState({ haveAccount : !this.state.haveAccount });
    }

    handleChangeVisibilityPassword() {
        this.setState({ visibilityPassword : !this.state.visibilityPassword });
    }

    render() {
        const { haveAccount, visibilityPassword } = this.state;
        return (
            <div>
                { haveAccount ?
                    <h1>Acceder a mi cuenta</h1>
                :
                    <h1>Unirme a la comunidad</h1>
                }
                <form action="" method="post">
                <input type="search" results />
                    <div className="input-icons">
                        <AccountCircleIcon className="icon-color" />
                        <input className="input-with-padding" type="text" placeholder="Usuario"/>
                    </div>
                    { !haveAccount &&
                    <div className="input-icons">
                        <AlternateEmailIcon className="icon-color" /> 
                        <input className="input-with-padding" type="mail" placeholder="Mail"/>
                    </div>
                    }
                    <div className="input-icons">
                        <LockOpenIcon className="icon-color" />
                        <input className="input-with-padding" type={ visibilityPassword ? "text" : "password" } placeholder="Contraseña"/>
                        { visibilityPassword ?
                            <VisibilityOffIcon className="icon-color" onClick={this.handleChangeVisibilityPassword}/>
                            :
                            <VisibilityIcon className="icon-color" onClick={this.handleChangeVisibilityPassword} />
                        }
                    </div>
                    { haveAccount ?
                        <button type="submit">Acceder</button>
                    :
                        <button type="submit">Registrarme</button>
                    }

                    { haveAccount ?
                        <div>
                            <span>No tenés cuenta? </span>
                            <button onClick={this.handleCreateAccount}>Registrate</button>
                        </div>
                        :
                        <div>
                            <button onClick={this.handleCreateAccount}>Ya tengo cuenta</button>
                        </div>
                        
                    }
                </form>
            </div>
        );
    }
}

export default Login;
