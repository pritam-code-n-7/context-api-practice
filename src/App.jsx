/* eslint-disable no-unused-vars */
import React from "react"
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/CreateContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <h1 className="text-3xl font-bold underline mb-8">Hello world!</h1>
        <div className="flex flex-col md:flex-row md:gap-8 w-full">
          <div className="w-full">
            <Login />
          </div>
          <div className="md:w-1/2">
            <Profile />
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
