/* eslint-disable no-unused-vars */

import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState(user);

  console.log(user);

  // Update currentUser state when user context changes
  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 dark:bg-gray-900">
      <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-md">
        {currentUser ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Welcome, {currentUser.username}
            </h2>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Please Login</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
