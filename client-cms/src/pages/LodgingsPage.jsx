import "./templete.css";
export default function LodgingsPage() {
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
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col" width="180px">
                                                Image
                                            </th>
                                            <th scope="col" width="250px">
                                                Description
                                            </th>
                                            <th scope="col">Stock</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Author</th>
                                            <th scope="col" width="50px" />
                                        </tr>
                                    </thead>
                                    <tbody id="table-product">
                                        <tr>
                                            <td scope="row">#1</td>
                                            <td className="fw-bold">
                                                MILLBERGET
                                            </td>
                                            <td>
                                                <img
                                                    src="https://img.freepik.com/free-photo/mockup-frames-living-room-interior-with-chair-decorscandinavian-style_41470-5148.jpg?t=st=1711982453~exp=1711986053~hmac=98ab75bb1c4534b808275f2ab34efc1e0ab2c45e57c924dc878cb72600c64fd3&w=740"
                                                    className="img-fluid"
                                                />
                                            </td>
                                            <td>Swivel chair, murum black</td>
                                            <td>13</td>
                                            <td className="fw-bold">
                                                Rp1.599.000
                                            </td>
                                            <td>admin@mail.com</td>
                                            <td>
                                                <span className="d-flex">
                                                    <a href="" className="ms-3">
                                                        <span className="icon material-symbols-outlined text-danger">
                                                            delete
                                                        </span>
                                                    </a>
                                                    <a href="" className="ms-3">
                                                        <span className="icon material-symbols-outlined text-danger">
                                                            edit
                                                        </span>
                                                    </a>
                                                    <a href="" className="ms-3">
                                                        <span className="icon material-symbols-outlined text-danger">
                                                            image
                                                        </span>
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">#2</td>
                                            <td className="fw-bold">MICKE</td>
                                            <td>
                                                <img
                                                    src="https://img.freepik.com/free-psd/living-room-with-white-sofa_176382-611.jpg?t=st=1712083352~exp=1712086952~hmac=c79ab9ff44bc5b6e7a19bd986efc8a3a183ddba23470993a80da3eceda11bc55&w=826"
                                                    className="img-fluid"
                                                />
                                            </td>
                                            <td>
                                                Desk, black-brown, 105x50 cm
                                            </td>
                                            <td>30</td>
                                            <td className="fw-bold">
                                                Rp1.799.000
                                            </td>
                                            <td>admin@mail.com</td>
                                            <td>
                                                <span className="d-flex">
                                                    <a href="" className="ms-3">
                                                        <span className="icon material-symbols-outlined text-danger">
                                                            delete
                                                        </span>
                                                    </a>
                                                    <a href="" className="ms-3">
                                                        <span className="icon material-symbols-outlined text-danger">
                                                            edit
                                                        </span>
                                                    </a>
                                                    <a href="" className="ms-3">
                                                        <span className="icon material-symbols-outlined text-danger">
                                                            image
                                                        </span>
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
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
