export default function Table({ e, i }) {
    console.log(e);
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
        </>
    );
}
