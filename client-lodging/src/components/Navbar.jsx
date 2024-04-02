export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-warning-subtle px-5">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">My Rent Room</span>
                    <div className="d-flex align-items-center">
                        <div id="username">Hello, Padila</div>
                        <button
                            id="logout-button"
                            className="btn btn-outline-danger mx-3"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}