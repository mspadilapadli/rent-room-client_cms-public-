import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
    const [count, setCount] = useState(0);
    const [isDetail, setIsDetail] = useState(false);

    function hitDetail() {
        setIsDetail(true);
    }

    return (
        <>
            <Navbar />
            {isDetail && <DetailPage />}
            <HomePage hitDetail={hitDetail} />
        </>
    );
}

export default App;
