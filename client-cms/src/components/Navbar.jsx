import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar({ setStatusLogin }) {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
        // setStatusLogin(false);
    };

    return (
        <>
            <nav className="navbar navbar-light bg-warning-subtle px-5">
                <div className="container">
                    <div className="d-flex align-items-center gap-2">
                        <img
                            src="https://thumbs.dreamstime.com/z/room-rent-sign-isolated-white-background-simple-vector-logo-room-rent-sign-isolated-white-background-221788015.jpg"
                            style={{ width: "4rem" }}
                            className="mx-auto"
                            alt=""
                        />

                        <Link to="/" className="align-center">
                            Lodgings
                        </Link>
                        <Link to="/types">Types</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                    <div className="d-flex align-items-center">
                        <div id="username">Hello, Padila</div>
                        <button
                            id="logout-button"
                            className="btn btn-outline-danger mx-3"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
