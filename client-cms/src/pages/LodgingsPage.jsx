import { useEffect, useState } from "react";
import axios from "axios";
import "./templete.css";
import Table from "../components/Table";
export default function LodgingsPage() {
    const [dataLodgings, setDataLodgings] = useState(null);

    const fetchLodgings = async () => {
        try {
            const { data } = await axios({
                method: "get",
                url: "http://localhost:3000/lodgings",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            // console.log(accessToken);
            setDataLodgings(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchLodgings();
    }, []);
    // console.log(dataLodgings);

    return (
        <>
            <section className="container" id="home-section">
                <div className="row">
                    {/* Product Section */}
                    <section
                        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                        id="product-section"
                    >
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="display-2">Rooms</h1>
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-primary rounded-pill "
                                    id="new-product"
                                >
                                    <span className="icon material-symbols-outlined">
                                        add
                                    </span>
                                    New Room
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 table-responsive">
                                <table className="table align-middle">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col" width="180px">
                                                Image
                                            </th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Capacity</th>
                                            <th scope="col">Price</th>
                                            <th scope="col" width="250px">
                                                Facility
                                            </th>
                                            <th scope="col">Author</th>
                                            <th
                                                scope="col"
                                                width="50px"
                                                className="text-center"
                                            >
                                                Act
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody id="table-product">
                                        {dataLodgings &&
                                            dataLodgings.map((e, i) => {
                                                return (
                                                    <Table
                                                        e={e}
                                                        i={i}
                                                        key={e.id}
                                                    />
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    {/* End Product Section */}
                </div>
            </section>
        </>
    );
}
