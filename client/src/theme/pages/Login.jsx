// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from "../../store/slices/AuthSlice.js";
import usersData from '../../json_files/users.json'

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authentication);

  const [credentials, setCredentials] = useState({
    email: "",
    gender: "male",
    name: "Your Name",
    password: "",
    username: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const checkUser = usersData.find((user) => user.username.toString() === credentials.username.toString());
      if (checkUser) {
        if (checkUser.password === credentials.password) {
          dispatch(login(checkUser));
        }
        else{
          alert('Password Invalid');
        }
      } else {
        alert('Credentials not found');
        var addUser = confirm('Create Account?');
        if (addUser === true) {
          dispatch(signup(credentials));
        }
      }
  };


  return (
    <div className="py-20 bg-gray-100 flex items-center justify-center">
      <form className="bg-white max-w-md mx-auto w-full p-6 shadow-md rounded-md" onSubmit={handleLogin}>
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
};

export default Login;