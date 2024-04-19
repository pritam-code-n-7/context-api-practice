/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Here you can update the user context as needed
      // For demonstration, let's set it to a static value
      setUser("ExampleUser");
    }, 2000);

    clearInterval(intervalId); // Clean up the interval when component unmounts
  }, []); // Run this effect only once when component mounts

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
