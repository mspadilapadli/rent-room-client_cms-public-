import { useState } from "react";

export default function Search() {
    const [search, setSerch] = useState("");

    const handleIputSearch = (event) => {};

    return (
        <>
            <div className="mb-3 mt-3">
                <form
                    className="d-flex"
                    role="search"
                    action="/courses"
                    method="get"
                >
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search course"
                        name="search"
                        value={search}
                        onChange={(e) => setSerch(e.target.value)}
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </>
    );
}
