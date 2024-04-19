/* eslint-disable no-unused-vars */
import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/CreateContextProvider";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { ModeToggle } from "./components/theme/ModeToggle";

function App() {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system">
        <div>
          <UserContextProvider>
            <div className="min-h-screen flex flex-col justify-center items-center px-4">
              <div className="flex gap-4">
                <h1 className="text-3xl font-bold underline mb-8">
                  Hello world!
                </h1>
                <ModeToggle />
              </div>

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
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
