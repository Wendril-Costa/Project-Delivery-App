import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailValidate from '../utils/email.validate';
// import passwordValidate from '../utils/password.validate';
// import postLogin from '../api/login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error] = useState(false);
  const navigate = useNavigate();

  const inputRules = () => {
    const validEmail = emailValidate(email);
    const FIVE = 5;

    setDisabled(validEmail && password.length > FIVE);
  };

  // const handleLogin = async (newPost) => {
  //   const sucess = 200;
  //   const notFound = 404;
  //   const newPostLogin = await postLogin(newPost);
  //   console.log(newPostLogin);
  //   if (newPostLogin.status === notFound) {
  //     setError(true);
  //   }
  //   if (newPostLogin.status === sucess) {
  //     navigate('/customer');
  //   }
  // };

  useEffect(() => {
    inputRules();
  }, [email, password]);

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
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <h3>Senha</h3>
        <input
          type="password"
          name="password"
          data-testid="common_login__input-password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ !disabled }
          // onClick={ handleLogin }
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
