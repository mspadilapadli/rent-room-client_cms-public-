import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
    const [page, setPage] = useState(`home`);
    const [isDetail, setIsDetail] = useState(false);
    const [dataDetail, setDataDetail] = useState({});

    function hitDetail(data) {
        setPage(``);
        setIsDetail(true);
        if (data) {
            setDataDetail(data);
        }
    }
    function closeDetail() {
        setIsDetail(false);
        setPage(`home`);
    }

    return (
        <>
            <Navbar />
            {isDetail && (
                <DetailPage dataDetail={dataDetail} closeDetail={closeDetail} />
            )}
            {page === `home` && <HomePage hitDetail={hitDetail} />}
        </>
    );
}

export default App;
