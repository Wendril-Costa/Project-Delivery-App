import React from 'react';

export default function Login() {
  return (
    <form>
      <div>
        <h3>Login</h3>
        <input
          data-testid="common_login__input-email"
          placeholder="type your email"
          onChange={ () => {} }
        />
        <h3>Senha</h3>
        <input
          data-testid="common_login__input-password"
          onChange={ () => {} }
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          onClick={ () => {} }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => {} }
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
