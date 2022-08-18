import React from "react";
import AuthForm from "./AuthForm";

function Register({ onSubmit }) {
  const [userData, setUserData] = React.useState({ password: "", email: "" });

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { password, email } = userData;

    onSubmit({ password, email });
  }

  return (
    <AuthForm
      title="Регистрация"
      name="register"
      onSubmit={handleSubmit}
      buttonText="Зарегистрироваться"
    >
      <input
        className="auth__input"
        placeholder="Email"
        type="email"
        name="email"
        onChange={handleChange}
        value={userData.email}
        required
      />
      <input
        className="auth__input"
        placeholder="Пароль"
        type="password"
        name="password"
        onChange={handleChange}
        value={userData.password}
        required
      />
    </AuthForm>
  );
}

export default Register;
