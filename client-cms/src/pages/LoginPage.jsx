import { useState } from "react";
import axios from "axios";
import style from "./login.module.css";
import showToast from "../utils/toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setStatusLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            // console.log(`submin jalan ni bos`);
            // handleLogin({ email, password });
            let { data } = await axios({
                method: "post",
                url: "https://server-myroom.mspadilapadli-dev.online/users/login",
                // url: "http://localhost:3000/users/login",
                data: {
                    email: email,
                    password: password,
                },
            });
            localStorage.setItem("token", data.access_token);
            navigate("/");
            // setAccessToken(data.access_token);
            // setIsLogin(true); ganti
            // setStatusLogin(true);
        } catch (error) {
            console.log(error);
            showToast(error.response.data.message);
        }
    };

    return (
        <>
            <div className="container">
                <form
                    className={`${style["form-login"]}  mx-auto`}
                    onSubmit={submitLogin}
                >
                    {/* {email} && {password} */}
                    {/* <h4 className="text-center">Welcome</h4> */}
                    <div className="d-flex justify-content-center">
                        <img
                            src="https://thumbs.dreamstime.com/z/room-rent-sign-isolated-white-background-simple-vector-logo-room-rent-sign-isolated-white-background-221788015.jpg"
                            style={{ width: "7rem" }}
                            className="mx-auto"
                            alt=""
                        />
                    </div>
                    <div className="mb-3 mt-5">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`btn ${style[`btn-primary`]} my-5 `}
                    >
                        Login
                    </button>
                    {/* <p className="text-center">
                        Don’t have an account? <a href=""> Sign Up</a>
                    </p> */}
                </form>
            </div>
        </>
    );
}
