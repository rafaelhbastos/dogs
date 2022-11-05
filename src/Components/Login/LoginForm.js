import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../UserContext";
import UseForm from "../../Hooks/UseForm";
import Button from "../Forms/Button";
import Input from './../Forms/Input';

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

      if (username.validate() && password.validate()) {
        userLogin(username.value, password.value);
      }
    }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha"  type="password" name="password" {...password} />
        {loading ? <Button disabled> Carregando...</Button> : <Button>Entrar</Button>}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
