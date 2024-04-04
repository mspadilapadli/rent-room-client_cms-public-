import { useState } from "react";
import showToast from "../utils/toast";
import axios from "axios";

export default function RegsiterPage() {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
    });

    const handleInputRegister = (event) => {
        const { name, value } = event.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const handleForm = async (event) => {
        event.preventDefault();
        try {
            await axios({
                method: "post",
                url: "https://server-myroom.mspadilapadli-dev.online/users/add-user",
                // url: "http://localhost:3000/users/add-user",
                data: input,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            console.log("new data created");
            console.log(input, "<<<input form");
        } catch (error) {
            console.log(error);
            showToast(error.response.data.message);
        }
    };

    return (
        <>
            {/* New User Section */}
            <section
                className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                id="new-user-section"
            >
                {/* <div>username : {input.username}</div>
                <div>email : {input.email}</div>
                <div>password : {input.password}</div>
                <div>phoneNumber : {input.phoneNumber}</div>
                <div>address : {input.address}</div> */}

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="pt-3 pb-2 mb-3 border-bottom">
                            <form id="register-form" onSubmit={handleForm}>
                                <h1 className="h3 mb-3 display-1">
                                    Register User
                                </h1>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between">
                                        <label htmlFor="register-username">
                                            Username
                                        </label>
                                        <label className="text-danger text-end fw-bold">
                                            *
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="register-username"
                                        placeholder="Enter username ..."
                                        autoComplete="off"
                                        required=""
                                        name="username"
                                        value={input.username}
                                        onChange={handleInputRegister}
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between">
                                        <label htmlFor="register-email">
                                            Email
                                        </label>
                                        <label className="text-danger text-end fw-bold">
                                            *
                                        </label>
                                    </div>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="register-email"
                                        placeholder="Enter email address ..."
                                        autoComplete="off"
                                        required=""
                                        name="email"
                                        value={input.email}
                                        onChange={handleInputRegister}
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between">
                                        <label htmlFor="register-password">
                                            Password
                                        </label>
                                        <label className="text-danger text-end fw-bold">
                                            *
                                        </label>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="register-password"
                                        placeholder="Enter password ..."
                                        autoComplete="off"
                                        required=""
                                        name="password"
                                        value={input.password}
                                        onChange={handleInputRegister}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="register-phone">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="register-phone"
                                        placeholder="Enter phone number (optional) ..."
                                        autoComplete="off"
                                        name="phoneNumber"
                                        value={input.phoneNumber}
                                        onChange={handleInputRegister}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="register-address">
                                        Address
                                    </label>
                                    <textarea
                                        id="register-address"
                                        className="form-control"
                                        rows={3}
                                        placeholder="Enter address (optional) ..."
                                        autoComplete="off"
                                        name="address"
                                        value={input.address}
                                        onChange={handleInputRegister}
                                    />
                                </div>
                                <button
                                    className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* End New User Section */}
        </>
    );
}
