import Form from "../components/Form";

export default function AddLodging() {
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
                            <h1 className="display-2">
                                New Product / Update Product
                            </h1>
                        </div>
                        <Form />
                    </section>
                </div>
            </section>
            {/* End New Product Section */}
        </>
    );
}
