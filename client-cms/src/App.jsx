import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginPage from "./pages/LoginPage";
import LodgingsPage from "./pages/LodgingsPage";
// import './App.css'

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <LoginPage />
            <LodgingsPage />
        </>
    );
}

export default App;
