import React, { useState } from 'react';
import emailValidate from '../utils/email.validate';
import passwordValidate from '../utils/password.validate';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const inputRules = async () => {
    const validadeEmail = emailValidate(email);
    const validadePassword = passwordValidate(password);
    if (validadeEmail && validadePassword) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleEmail = ({ target }) => {
    const { value } = target;
    setEmail(value);
    inputRules();
  };

  const handlePassword = ({ target }) => {
    const { value } = target;
    setPassword(value);
    inputRules();
  };

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
          onChange={ handleEmail }
        />
        <h3>Senha</h3>
        <input
          type="password"
          name="password"
          data-testid="common_login__input-password"
          value={ password }
          onChange={ handlePassword }
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ disabled }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          className="btn-without-login"
          // onClick={ () => history.push('register') }
        >
          Ainda não tenho conta
        </button>

        <p data-testid="common_login__element-invalid-email">Login inválido!!</p>

      </div>

    </form>
  );
}

export default Login;
