import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailValidate from '../utils/email.validate';
import passwordValidate from '../utils/password.validate';
import postLogin from '../api/login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

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

  const validateLogin = async (newPost) => {
    const sucess = 200;
    const notFound = 404;
    const newPostLogin = await postLogin(newPost);
    console.log(newPostLogin);
    if (newPostLogin.status === notFound) {
      setError(true);
    }
    if (newPostLogin.status === sucess) {
      navigate('/customer');
    }
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
          onClick={ () => validateLogin({ email, password }) }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          className="btn-without-login"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>

        {
          error && (
            <div data-testid="common_login__element-invalid-email">
              Login Inválido
            </div>
          )
        }

      </div>

    </form>
  );
}

export default Login;
