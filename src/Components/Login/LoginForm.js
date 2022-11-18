import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Elements/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Form/Button.module.css";

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
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />

        <Input label="Password" type="password" name="password" {...password} />

        {loading ? <Button disabled>Enviar</Button> : <Button>Enviar</Button>}
        <Error error={error} />
        {/* {error && <p>{error}</p>} */}
      </form>
      <Link className={styles.recovery} to="login/recovery">
        Recovery
      </Link>
      <div className={styles.registration}>
        <h2 className={styles.subTitle}>Registration</h2>
        <p>Don't have an account? Sign up</p>
        <Link className={stylesBtn.button} to="/login/create">
          Create
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
