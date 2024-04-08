import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddType() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const handlePostType = async (event) => {
        event.preventDefault();
        try {
            const response = await axios({
                method: "post",
                url: "https://server-myroom.mspadilapadli-dev.online/types",
                // url: "http://localhost:3000/users/add-user",
                data: {
                    name: name,
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            navigate("/types");
        } catch (error) {}
    };
    return (
        <>
            {/* New Product Section */}
            <section className="container-fluid" id="home-section">
                <div className="row">
                    <section
                        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                        id="new-product-section"
                    >
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="display-2">New Type</h1>
                            name :{name}
                        </div>
                        {/* ============ */}
                        <div className="row">
                            <div>
                                {/* className="col-12 col-md-6" */}

                                <form
                                    id="product-form"
                                    onSubmit={handlePostType}
                                >
                                    <div className="mb-3">
                                        <label htmlFor="product-name">
                                            Name
                                            <span className="text-danger fw-bold">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="product-name"
                                            placeholder="Enter product name"
                                            autoComplete="off"
                                            required=""
                                            name="name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="row mt-5 mb-3">
                                        <div className="col-6">
                                            <a
                                                className="btn btn-lg btn-light rounded-pill w-100 p-2"
                                                href=""
                                            >
                                                Cancel
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <button
                                                className="btn btn-lg btn-primary rounded-pill w-100 p-2"
                                                type="submit"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* ============ */}
                    </section>
                </div>
            </section>
            {/* End New Product Section */}
        </>
    );
}
