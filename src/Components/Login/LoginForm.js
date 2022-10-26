import React, { useState } from "react";
import { Link } from "react-router-dom";

import UseForm from "../../Hooks/UseForm";
import Button from "../Forms/Button";
import Input from './../Forms/Input';

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm('password');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
    })
    .then(resp => {
      console.log(resp)
      return resp.json()
    })
    .then(resp => {
      console.log(resp)
    })
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha"  type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
