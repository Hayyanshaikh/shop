// src/components/Login.js
import React, { useState } from "react";
import usersData from "../../json_files/users.json";
import Button from "../../components/Button.jsx";

const Login = () => {

  const [credentials, setCredentials] = useState({
    email: "",
    gender: "male",
    name: "Your Name",
    password: "",
    username: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };


  return (
    <div className="py-20 bg-gray-100 flex items-center justify-center">
      <form
        className="bg-white max-w-md mx-auto w-full p-6 shadow-md rounded-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="flex gap-3">
          <Button type="submit" text="Login" className="mt-4" />
          <Button text="Signup" className="mt-4" link="/signup" />
        </div>
      </form>
    </div>
  );
};

export default Login;
