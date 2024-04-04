import axios from "axios";
import { useEffect, useState } from "react";
import "./templete.css";
export default function Types() {
    const [dataTypes, setDataTypes] = useState(null);

    const fetchTypes = async () => {
        try {
            const { data } = await axios({
                method: "get",
                url: "http://localhost:3000/types",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            // console.log(accessToken);
            setDataTypes(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTypes();
    }, []);

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
                            <h1 className="display-2">Types</h1>
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
                                        </tr>
                                    </thead>
                                    <tbody id="table-product">
                                        {dataTypes &&
                                            dataTypes.map((e, i) => {
                                                return (
                                                    <TableTypes
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
function TableTypes({ e, i }) {
    return (
        <>
            <tr>
                <td scope="row">{i + 1}</td>
                <td className="fw-bold">{e.name}</td>
            </tr>
        </>
    );
}
