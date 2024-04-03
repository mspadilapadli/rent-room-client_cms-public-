export default function DetailPage({ dataDetail }) {
    return (
        <>
            <section id="detail">
                <div className="container my-5">
                    <div className="card p-4">
                        <h4>Detail Room</h4>
                        <div className="d-flex gap-4">
                            <img
                                src="https://img.freepik.com/free-photo/mockup-frames-living-room-interior-with-chair-decorscandinavian-style_41470-5148.jpg?t=st=1711982453~exp=1711986053~hmac=98ab75bb1c4534b808275f2ab34efc1e0ab2c45e57c924dc878cb72600c64fd3&w=740"
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
                </div>
            </section>
        </>
    );
}
