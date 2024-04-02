import "./login.css";
export default function LoginPage() {
    return (
        <>
            <div className="container-fluid">
                <form className="mx-auto">
                    <h4 className="text-center mb-5">Welcome</h4>
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
