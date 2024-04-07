import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios, { getAdapter } from "axios";
import Search from "../components/Search";
export default function HomePage() {
    const [pubLodgings, setPubLodgings] = useState(null);
    const [search, setSearch] = useState("");
    // const [filter, setFilter] = useState("");
    const [dataType, setDataTypes] = useState([]);

    const fetchTypes = async () => {
        try {
            const { data } = await axios({
                method: "get",
                url: `https://server-myroom.mspadilapadli-dev.online/types`,
                // url: process.env.VITE_API_URL + `/types`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            // const inputFilter = [
            //     ...data,
            //     {
            //         id: "",
            //         name: "All",
            //     },
            // ];

            // console.log(accessToken);
            // console.log(inputFilter, "data tpes");
            setDataTypes(data);
        } catch (error) {
            console.log(error);
            showToast(error.response.data.message);
        }
    };

    const handleSubmitSearch = async (e) => {
        e.preventDefault();
        await fetchData(search);
    };

    const handleFilter = async (e) => {
        // e.preventDefault();
        console.log(e, "filter");
        await fetchData(search, e);
    };

    const fetchData = async (search, filter, sort, pagination) => {
        try {
            const { data } = await axios({
                method: "get",
                // url: "http://localhost:3000/pub/lodgings",
                url: `https://server-myroom.mspadilapadli-dev.online/pub/lodgings`,
                params: {
                    search: search,
                    filter: filter,
                },
            });

            setPubLodgings(data);
        } catch (error) {
            console.log(error);
        }
    };

    // fetch get (useEffect create)
    useEffect(() => {
        fetchData();
        fetchTypes();
    }, []);

    return (
        <>
            <div className="container my-5">
                <h2 className="text-center my-5">MyRent Room</h2>
                <div className="mb-3 mt-3 d-flex align-items-center gap-2">
                    {/* se */}
                    <form
                        className="d-flex"
                        role="search"
                        method="get"
                        onSubmit={handleSubmitSearch}
                    >
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search by Title"
                            // name="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className="btn btn-outline-warning"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    {/* end form */}

                    {/* filter */}

                    {/* Example single danger button */}
                    {/* <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-warning dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Filter by Type
                        </button>
                        <ul className="dropdown-menu">
                            {dataType &&
                                dataType.map((e) => {
                                    return (
                                        <li
                                            style={{ cursor: "pointer" }}
                                            key={e.id}
                                        >
                                            <div
                                                className="dropdown-item "
                                                onClick={() =>
                                                    handleFilter(e.id)
                                                }
                                            >
                                                {e.name}
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div> */}

                    <div className="">
                        <select
                            id="product-category"
                            className="form-select "
                            style={{ borderColor: "#ffc107", color: "#ffc107" }}
                            required=""
                            name="typeId"
                            onChange={(e) => handleFilter(e.target.value)}
                        >
                            <option disabled selected>
                                Filter by Type
                            </option>
                            <option value="">All</option>
                            {dataType &&
                                dataType.map((e) => {
                                    return (
                                        <option value={e.id} key={e.id}>
                                            {e.name}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                    {/* end filter */}
                </div>

                <div className="row row-cols-4 g-3">
                    {pubLodgings &&
                        pubLodgings.map((e) => {
                            return <Card e={e} key={e.id} />;
                        })}
                </div>
            </div>
        </>
    );
}

// export default HomePage;
