export default function Card({ e, hitDetail }) {
    return (
        <>
            <div className="col">
                <div
                    className="card"
                    onClick={() => {
                        hitDetail(e);
                    }}
                >
                    <img
                        src={e.imgUrl}
                        style={{
                            height: "12rem",
                            objectFit: "cover",
                        }}
                        alt=""
                    />

                    <div className="card-body">
                        <h5 className="card-title">{e.name}</h5>
                        <p className="card-text">Rp {e.price}</p>
                        <p className="card-text">Location : {e.location}</p>
                        {/* <button
                            className="btn btn-outline-warning"
                            onClick={() => {
                                hitDetail();
                            }}
                        >
                            Detail
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
}
