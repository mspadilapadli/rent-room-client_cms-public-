export default HomePage = () => {
    return (
        <>
            <div className="container my-5">
                <h2 className="text-center my-5">WELCOME</h2>
                <div className="row row-cols-4 g-3">
                    <div className="col">
                        <div className="card">
                            <img
                                src="https://thumbs.dreamstime.com/z/room-rent-sign-isolated-white-background-simple-vector-logo-room-rent-sign-isolated-white-background-221788015.jpg"
                                style={{ height: "12rem", objectFit: "cover" }}
                                alt=""
                            />

                            <div className="card-body">
                                <h5 className="card-title">KetaBo Kost</h5>
                                <p className="card-text">
                                    KETAMADA RAP RAP KOST
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
