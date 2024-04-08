import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios, { getAdapter } from "axios";
import Search from "../components/Search";
export default function HomePage() {
    const [pubLodgings, setPubLodgings] = useState(null);
    const [search, setSearch] = useState("");
    const [filterByType, setFilterByType] = useState("");
    const [otherSortFilter, setOtherSortFilter] = useState("");
    const [desc, setDesc] = useState(false);
    const otherFilter = [
        { name: "Id", id: "id" },
        { name: "Facility", id: "facility" },
        { name: "Room Capacity", id: "roomCapacity" },
        { name: "Location", id: "location" },
        { name: "Price", id: "price" },
    ];
    const sortFilter = [
        { name: "ASC", id: "" },
        { name: "DESC", id: "-" },
    ];
    // const [filter, setFilter] = useState("");
    const [dataType, setDataTypes] = useState([]);
    const [dataFetch, setDataFetch] = useState({});

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

    const handleFilter = async (id) => {
        // e.preventDefault();
        // console.log(id, "filter");
        setFilterByType(id);
        await fetchData(search, id);
    };

    const handleOtherFilter = async (id) => {
        // e.preventDefault();
        setOtherSortFilter(id);
        await fetchData(search, filterByType, id);
    };

    const handleSortBy = async (by) => {
        await fetchData(search, filterByType, by + otherSortFilter);
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
                    sort: sort,
                    page[number] :
                },
            });

            console.log(data, "lodgigns");
            setDataFetch(data);
            setPubLodgings(data.data);
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

                    {/* advance filter */}
                    <div className="">
                        <select
                            id="product-category"
                            className="form-select "
                            style={{ borderColor: "#ffc107", color: "#ffc107" }}
                            required=""
                            name="typeId"
                            onChange={(e) => handleOtherFilter(e.target.value)}
                        >
                            <option disabled selected>
                                Other Filter
                            </option>

                            {otherFilter.map((e) => {
                                return (
                                    <option value={e.id} key={e.id}>
                                        {e.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    {/*  end advance filter */}

                    {/* sort */}
                    <div className="">
                        <select
                            id="product-category"
                            className="form-select "
                            style={{ borderColor: "#ffc107", color: "#ffc107" }}
                            required=""
                            name="sort"
                            onChange={(e) => handleSortBy(e.target.value)}
                        >
                            <option disabled selected>
                                Sort by
                            </option>

                            {sortFilter.map((e) => {
                                return (
                                    <option value={e.id} key={e.id}>
                                        {e.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    {/*  end sort */}
                </div>
                {/* pagintion */}
                
                {/* end pagintion */}

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
