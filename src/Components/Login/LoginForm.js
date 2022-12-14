import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../UserContext";
import useForm from "../../Hooks/UseForm";
import Button from "../Forms/Button";
import Input from './../Forms/Input';
import Error from './../Helper/Error';
import styles from '../../CSS/LoginForm.module.css'
import stylesBtn from '../../CSS/Button.module.css'
import Head from "../Helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

      if (username.validate() && password.validate()) {
        userLogin(username.value, password.value);
      }
    }

  return (
    <section className="animeLeft">
      <Head title="Login"/> 
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha"  type="password" name="password" {...password} />
        {loading ? <Button disabled> Carregando...</Button> : <Button>Entrar</Button>}
        <Error error={error}/>
      </form>
      <Link className={styles.lost} to="/login/perdeu">Perdeu a Senha?</Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
      </div>
      <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
