// import UserContextProvider from "./context/UserContextProvider.jsx";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import "./App.css";
import { TheamProvider } from "./context/theam";

function App() {

    const [theme, setTheme] = useState('light');

    const lightTheme = () => {
      setTheme("light")
    };

    const darkTheme = () => {
      setTheme("dark")
    };

    //actual change in theme
    useEffect(() => {
      document.querySelector('html').classList.remove('light', 'dark');
      document.querySelector('html').classList.add(theme);
    }, [theme])

  return (
    // <UserContextProvider>
    //   <Login />
    //   <Profile />
    // </UserContextProvider>

    <TheamProvider value={{theme, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* TheamBTN */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">{/* Card */}<Card /></div>
        </div>
      </div>
    </TheamProvider>
  );
}

export default App;
