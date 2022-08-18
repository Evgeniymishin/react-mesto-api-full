import React from "react";
import { Route, Link } from "react-router-dom";

function AuthForm({ title, name, onSubmit, buttonText, children }) {
  return (
    <section className="auth">
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form" name={`${name}_form`} onSubmit={onSubmit}>
        {children}
        <button className="auth__button" type="submit">
          {buttonText}
        </button>
      </form>
      <Route path="/sign-up">
        <Link to="/sign-in" className="auth__link">
          Уже зарегистрированы? Войти
        </Link>
      </Route>
    </section>
  );
}

export default AuthForm;
