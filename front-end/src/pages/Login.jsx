import React, { useState } from 'react';
// import emailValidate from '../utils/email.validate';
// import passwordValidate from '../utils/password.validate';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const rulesCheck = (event) => {
    event.preventDefault();
    const magicNumber = 6;

    const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (password.length < magicNumber || !regexMail.test(email)) return setError(true);
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
          onChange={ (event) => setEmail(event.target.value) }
        />
        <h3>Senha</h3>
        <input
          type="password"
          name="password"
          data-testid="common_login__input-password"
          value={ password }
          onChange={ (event) => setPassword(event.target.value) }
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          onClick={ rulesCheck }
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

        {error
        && <p data-testid="common_login__element-invalid-email">Login inválido!!</p>}

      </div>

    </form>
  );
}

export default Login;
