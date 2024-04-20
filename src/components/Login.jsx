/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import UserContext from "../context/UserContext.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // This code will run every 2000 milliseconds
      // For demonstration purposes, let's set the user context with the current username and password
      setUser({ username, password });
    }, 2000);

    // Clean up the interval when the component unmounts or when dependencies change
     clearInterval(intervalId);
  }, [password, setUser, username]); // Only run this effect when username, password, or setUser change

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password");
      return;
    }
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 dark:bg-gray-900">
      <form
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
