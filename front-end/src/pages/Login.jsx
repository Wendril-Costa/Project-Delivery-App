import React from 'react';
import PropTypes from 'prop-types';
import emailValidate from '../utils/email.validate';
import passwordValidate from '../utils/password.validate';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => this.rulesCheck());
  };

  rulesCheck = async () => {
    const { email, password } = this.state;
    const validateEmail = emailValidate(email);
    const validatePassword = passwordValidate(password);
    if (validateEmail && validatePassword) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  render() {
    const { history } = this.props;
    const { email, password, disabled } = this.state;
    return (
      <form>
        <div>
          <h3>Login</h3>
          <input
            type="email"
            name="email"
            data-testid="common_login__input-email"
            placeholder="type your email"
            value={ email }
            onChange={ (e) => this.handleInputChange(e) }
          />
          <h3>Senha</h3>
          <input
            type="password"
            name="password"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ (e) => this.handleInputChange(e) }
          />
          <button
            type="button"
            data-testid="common_login__button-login"
            disabled={ disabled }
            onClick={ () => history.push('login') }
          >
            LOGIN
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
            className="btn-without-login"
            onClick={ () => history.push('register') }
          >
            Ainda não tenho conta
          </button>
          <p
            data-testid="common_login__element-invalid-email"
          >
            Evento oculto
          </p>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
};

export default Login;
