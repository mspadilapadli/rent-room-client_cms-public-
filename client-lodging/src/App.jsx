import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/lodgings/:id",
        element: <DetailPage />,
    },
]);

function App() {
    // const [page, setPage] = useState(`home`);
    // const [isDetail, setIsDetail] = useState(false);
    // const [dataDetail, setDataDetail] = useState({});

    // function hitDetail(data) {
    //     setPage(``);
    //     setIsDetail(true);
    //     if (data) {
    //         setDataDetail(data);
    //     }
    // }
    // function closeDetail() {
    //     setIsDetail(false);
    //     setPage(`home`);
    // }

    return (
        <>
            <RouterProvider router={router} />
            {/* <Navbar /> */}
            {/* {isDetail && (
                <DetailPage dataDetail={dataDetail} closeDetail={closeDetail} />
            )}
            {page === `home` && <HomePage hitDetail={hitDetail} />} */}
        </>
    );
}

export default App;
