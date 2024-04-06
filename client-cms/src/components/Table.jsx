import { Link } from "react-router-dom";
import showToast from "../utils/toast";
import axios from "axios";

export default function Table({ e, i, fetchLodgings }) {
    // console.log(e.id, "id ni boss");
    async function hanldeDelete() {
        try {
            const response = await axios({
                method: "DELETE",
                url:
                    "https://server-myroom.mspadilapadli-dev.online/lodgings/" +
                    e.id,
                // url: "http://localhost:3000/users/add-user",

                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            fetchLodgings();
        } catch (error) {
            console.log(error);
            showToast(error.response.data.message);
        }
    }

    // console.log(e);
    return (
        <>
            <tr>
                <td scope="row">{i + 1}</td>
                <td className="fw-bold">{e.name}</td>
                <td>
                    <img src={e.imgUrl} className="img-fluid" />
                </td>
                <td>{e.location}</td>
                <td>{e.roomCapacity}</td>
                <td className="fw-bold">Rp {e.price}</td>
                <td>{e.facility}</td>
                <td>{e.User.email}</td>
                <td>
                    <span className="d-flex">
                        <Link
                            onClick={() => {
                                hanldeDelete();
                            }}
                            className="ms-3"
                        >
                            <span className="icon material-symbols-outlined text-danger">
                                delete
                            </span>
                        </Link>
                        <Link to={`/update/${e.id}`} className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                                edit
                            </span>
                        </Link>
                        <Link to={`/update/img/${e.id}`} className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                                image
                            </span>
                        </Link>
                    </span>
                </td>
            </tr>
        </>
    );
}
