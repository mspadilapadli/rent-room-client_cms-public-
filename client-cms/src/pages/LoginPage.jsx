import "./login.css";
export default function LoginPage() {
    return (
        <>
            <div className="container-fluid">
                <form className="mx-auto">
                    <h4 className="text-center">Welcome</h4>
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
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-5 mb-5">
                        Login
                    </button>
                    <p className="text-center">
                        Don’t have an account? <a href=""> Sign Up</a>
                    </p>
                </form>
            </div>
        </>
    );
}
