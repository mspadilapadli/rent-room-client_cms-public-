import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginPage from "./pages/LoginPage";
import LodgingsPage from "./pages/LodgingsPage";
import AddRoomPage from "./pages/AddRoomPage";
import RegsiterPage from "./pages/RegisterPage";
// import './App.css'
// import "./pages/templete.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <LoginPage />
            <LodgingsPage />
            <AddRoomPage />
            <RegsiterPage />
        </>
    );
}

export default App;
