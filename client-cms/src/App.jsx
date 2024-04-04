import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import LodgingsPage from "./pages/LodgingsPage";
import AddRoomPage from "./pages/AddRoomPage";
import RegsiterPage from "./pages/RegisterPage";

import Navbar from "./components/Navbar";
// import './App.css'
// import "./pages/templete.css";

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

    const setStatusLogin = (status) => {
        setIsLogin(status);
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLogin(true);
        }
    });

    return (
        <>
            <Navbar setStatusLogin={setStatusLogin} />
            {isLogin ? (
                <LodgingsPage />
            ) : (
                <LoginPage setStatusLogin={setStatusLogin} />
            )}

            {/* <RegsiterPage /> */}
            {/* <AddRoomPage /> */}
        </>
    );
}

export default App;
