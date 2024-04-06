// import "dotenv/config";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import LodgingsPage from "./pages/LodgingsPage";
import RegsiterPage from "./pages/RegisterPage";
import Types from "./pages/TypesPage";
import Navbar from "./components/Navbar";
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AddLodging from "./pages/AddLodgingPage";
import Update from "./pages/Update";
import ImageUpdate from "./pages/ImageUpdate";
// import './App.css'
// import "./pages/templete.css";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        loader: () => {
            if (!localStorage.token) {
                return redirect("/login");
            }
            return null;
        },

        children: [
            {
                path: "/",
                element: <LodgingsPage />,
            },
            {
                path: "/types",
                element: <Types />,
            },
            {
                path: "/register",
                element: <RegsiterPage />,
            },
            {
                path: "/add-lodging",
                element: <AddLodging />,
            },
            {
                path: "/update/img/:id",
                element: <ImageUpdate />,
            },
            {
                path: "/update/:id",
                element: <Update />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
        loader: () => {
            if (localStorage.token) {
                return redirect("/");
            }
            return null;
        },
    },
]);

function App() {
    const [isLogin, setIsLogin] = useState(false);
    // const [accessToken, setAccessToken] = useState("");

    // const handleLogin = async ({ email, password }) => {
    //     try {
    //         // console.log("ini login di app jsx");
    //         let { data } = await axios({
    //             method: "post",
    //             url: "http://localhost:3000/users/login",
    //             data: {
    //                 email: email,
    //                 password: password,
    //             },
    //         });
    //         localStorage.setItem("token", data.access_token);
    //         // setAccessToken(data.access_token);
    //         setIsLogin(true);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // console.log(accessToken, "<<<<<<");

    // const setStatusLogin = (status) => {
    //     setIsLogin(status);
    // };

    // use useEffect yg create / fetch data
    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         setIsLogin(true);
    //     }
    // }, []);

    return (
        <>
            <RouterProvider router={router} />
            {/* <Navbar setStatusLogin={setStatusLogin} />
            {isLogin ? (
                <LodgingsPage />
            ) : (
                <LoginPage setStatusLogin={setStatusLogin} />
            )} */}

            {/* <RegsiterPage /> */}
            {/* <AddRoomPage /> */}
            {/* <Types /> */}
        </>
    );
}

export default App;
