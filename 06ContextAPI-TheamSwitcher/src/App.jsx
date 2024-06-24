import UserContextProvider from "./context/UserContextProvider.jsx";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <h1>Theam Switcher</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
