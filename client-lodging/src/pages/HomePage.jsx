import { useEffect, useState } from "react";
import Card from "../components/Card";
// import data from "../data/lodgings.json";
import axios, { getAdapter } from "axios";
const HomePage = ({ hitDetail }) => {
    const [pubLodgings, setPubLodgings] = useState(null);

    const fetchData = async () => {
        try {
            const { data } = await axios({
                method: "get",
                // url: "http://localhost:3000/pub/lodgings",
                url: "https://server-myroom.mspadilapadli-dev.online/pub/lodgings",
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
                <div className="row row-cols-4 g-3">
                    {pubLodgings &&
                        pubLodgings.map((e) => {
                            return (
                                <Card e={e} key={e.id} hitDetail={hitDetail} />
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default HomePage;
