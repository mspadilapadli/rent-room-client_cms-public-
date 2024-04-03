export default function DetailPage({ dataDetail, closeDetail }) {
    return (
        <>
            <section id="detail">
                <div className="container my-5">
                    <div className="card p-4">
                        <h4>Detail Room</h4>
                        <div className="d-flex gap-4">
                            <img
                                src={dataDetail.imgUrl}
                                style={{ height: "22rem", objectFit: "cover" }}
                                alt=""
                            />
                            <div>
                                <h3>{dataDetail.name}</h3>
                                <h5>Rp {dataDetail.price}</h5>
                                <br />
                                <p>Location : {dataDetail.location} </p>
                                <p>
                                    Capacity : {dataDetail.roomCapacity} person
                                </p>
                                <p>Facilities : {dataDetail.facility} </p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn btn-warning mt-2"
                        onClick={() => {
                            closeDetail();
                        }}
                    >
                        Back
                    </button>
                </div>
            </section>
        </>
    );
}
