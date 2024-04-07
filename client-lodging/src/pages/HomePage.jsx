import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios, { getAdapter } from "axios";
import Search from "../components/Search";
export default function HomePage() {
    const [pubLodgings, setPubLodgings] = useState(null);
    const [search, setSearch] = useState("");

    console.log(search, "<<<<search");
    // const handleIputSearch = (event) => {};
    const handleSubmitSearch = async (e) => {
        console.log("masuk di handle submit");
        console.log(search, "<<<<search2");
        e.preventDefault();
        try {
            fetchData();
            // const { data } = await axios({
            //     method: "get",
            //     // url: "http://localhost:3000/pub/lodgings",
            //     url: `https://server-myroom.mspadilapadli-dev.online/pub/lodgings?search=${search}`,
            //     // data: { search: search },
            // });
            // console.log(data, "submitsearch");
            // setPubLodgings(data);
        } catch (error) {
            console.log(error);
            //  showToast(error.response.data.message);
        }
    };

    const fetchData = async () => {
        try {
            const { data } = await axios({
                method: "get",
                // url: "http://localhost:3000/pub/lodgings",
                url: `https://server-myroom.mspadilapadli-dev.online/pub/lodgings?search=${search}`,
                // data: { search: search },
            });

            setPubLodgings(data);
        } catch (error) {
            console.log(error);
        }
    };

    // fetch get (useEffect create)
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container my-5">
                <h2 className="text-center my-5">MyRent Room</h2>
                <div className="mb-3 mt-3">
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
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
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
