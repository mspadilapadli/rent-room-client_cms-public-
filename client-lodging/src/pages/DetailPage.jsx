import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function DetailPage() {
    const params = useParams();
    const [dataDetail, setDataDetail] = useState({});

    async function fetchLodgingById() {
        try {
            let { data } = await axios({
                method: "get",
                // url: "http://localhost:3000/lodgings",
                url:
                    "https://server-myroom.mspadilapadli-dev.online/pub/lodgings/" +
                    params.id,
                // url: import.meta.env.VITE_API_URL + "/lodgings",
                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem("token")}`,
                // },
            });
            console.log(data, "<<<data");
            setDataDetail(data);
        } catch (error) {
            console.log(error);
            // showToast(error.response.data.message);
        }
    }

    useEffect(() => {
        fetchLodgingById();
    }, []);

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
                    <Link className="btn btn-outline-danger  mt-2" to={"/"}>
                        Back
                    </Link>
                </div>
            </section>
        </>
    );
}
