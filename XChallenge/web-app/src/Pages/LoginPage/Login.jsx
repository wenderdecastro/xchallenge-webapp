import React from "react";
import "./Login.css";

import Container from "../../Components/Container/Container";

const Login = () => {
  return (
    <section className="background-login">
      <Container>
        <div className="login-flex">
          <form className="form-login">
            <h1>Login</h1>
            <input type="email" placeholder="email" />
            <input type="senha" placeholder="text" />

            <button>Login</button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Login;
