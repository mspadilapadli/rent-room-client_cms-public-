import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginPage from "./pages/LoginPage";
import LodgingsPage from "./pages/LodgingsPage";
import AddRoomPage from "./pages/AddRoomPage";
import RegsiterPage from "./pages/RegisterPage";
import axios from "axios";
// import './App.css'
// import "./pages/templete.css";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [accessToken, setAccessToken] = useState("");

    const handleLogin = async ({ email, password }) => {
        try {
            // console.log("ini login di app jsx");
            let { data } = await axios({
                method: "post",
                url: "http://localhost:3000/users/login",
                data: {
                    email: email,
                    password: password,
                },
            });
            setAccessToken(data.access_token);
            setIsLogin(true);
        } catch (error) {
            console.log(error);
        }
    };
    // console.log(accessToken, "<<<<<<");

    return (
        <>
            {isLogin ? (
                <LodgingsPage accessToken={accessToken} />
            ) : (
                <LoginPage handleLogin={handleLogin} />
            )}

            {/* <RegsiterPage /> */}
            {/* <AddRoomPage /> */}
        </>
    );
}

export default App;
