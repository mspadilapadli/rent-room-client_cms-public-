import { Link } from "react-router-dom";
export default function Card({ e }) {
    return (
        <>
            <div className="col">
                <div
                    className="card"
                    // onClick={<Link to={`/lodgings/${e.id}`}>Detail</Link>}
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
                        <Link
                            className="btn btn-outline-warning"
                            to={`/lodgings/${e.id}`}
                        >
                            Detail
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
