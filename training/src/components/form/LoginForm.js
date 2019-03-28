import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setAdmin] = useState(false);

  const handleSubmit = event => {
    if (username === "admin" && password == "123") {
      alert("Đăng nhập thành công!");
      setAdmin(true);
    } else {
      alert("Đăng nhập thất bại!");
      setAdmin(false);
    }
    // console.log("isAdmin: ", isAdmin);
    event.preventDefault();
  };

  return (
    <div>
      <h3>
        Đăng nhập thành công mới xem được tab <strong>Table</strong>
      </h3>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={event => {
              setUsername(event.target.value);
            }}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
