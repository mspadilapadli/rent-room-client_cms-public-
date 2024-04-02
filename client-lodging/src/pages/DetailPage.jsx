export default function DetailPage() {
    return (
        <>
            <section id="detail">
                <div className="container my-5">
                    <div className="card p-4">
                        <h2>Detail Room</h2>
                        <div className="d-flex gap-4">
                            <img
                                src="https://img.freepik.com/free-photo/mockup-frames-living-room-interior-with-chair-decorscandinavian-style_41470-5148.jpg?t=st=1711982453~exp=1711986053~hmac=98ab75bb1c4534b808275f2ab34efc1e0ab2c45e57c924dc878cb72600c64fd3&w=740"
                                style={{ height: "22rem", objectFit: "cover" }}
                                alt=""
                            />
                            <div>
                                <h3>KetaBo Kost</h3>
                                <h3>Rp 3.000.000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
