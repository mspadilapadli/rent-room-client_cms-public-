import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <HomePage />
        </>
    );
}

export default App;
