// src/components/Signup.js
import React, { useState } from "react";
import usersData from "../../json_files/users.json";
import Button from '../../components/Button.jsx';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    gender: "male",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSignup =  async(e) => {
    e.preventDefault();
  };

  return (
    <div className="py-20 bg-gray-100 flex items-center justify-center">
      <form
        className="bg-white max-w-4xl mx-auto w-full p-6 shadow-md rounded-md"
        onSubmit={handleSignup}
      >
        <h2 className="text-2xl font-semibold mb-6">Sign up</h2>
        <div className="flex flex-wrap gap-5">
          <div className="flex-[300px]">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={credentials.name}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex-[300px]">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex-[300px]">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex-[300px]">
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
          <div className="flex-[300px]">
            <label
              htmlFor="gender"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={credentials.gender}
              onChange={handleInputChange}
              className="border p-2 w-full"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex-[300px]">
            <label
              htmlFor="address"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={credentials.address}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex-[300px]">
            <label
              htmlFor="city"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={credentials.city}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex-[300px]">
            <label
              htmlFor="zipCode"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={credentials.zipCode}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex-[300px]">
            <label
              htmlFor="country"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={credentials.country}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </div>
        </div>
        <Button
          text="Sign up"
          className="mt-4"
        />
          
      </form>
    </div>
  );
};

export default Signup;
