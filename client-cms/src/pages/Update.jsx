import { useEffect, useState } from "react";
import axios from "axios";
import showToast from "../utils/toast";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../components/Form";

export default function Update() {
    const params = useParams();
    const [populate, setPopulate] = useState({
        name: "",
        facility: "",
        roomCapacity: "",
        imgUrl: "",
        location: "",
        price: null,
        typeId: null,
    });
    // const [inputAdd, setInputAdd] = useState({
    //     name: "",
    //     facility: "",
    //     roomCapacity: "",
    //     imgUrl: "",
    //     location: "",
    //     price: null,
    //     typeId: null,
    // });

    // const handleInputAdd = (event) => {
    //     const { name, value } = event.target;
    //     setInputAdd({
    //         ...inputAdd,
    //         [name]: value,
    //     });
    // };
    // console.log(params.id, "id params");
    async function fetchLodgingById() {
        try {
            let { data } = await axios({
                method: "get",
                // url: "http://localhost:3000/lodgings",
                url:
                    "https://server-myroom.mspadilapadli-dev.online/lodgings/" +
                    params.id,
                // url: import.meta.env.VITE_API_URL + "/lodgings",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            console.log(data, "<<<data");
            setPopulate(data);
        } catch (error) {
            console.log(error);
            showToast(error.response.data.message);
        }
    }

    useEffect(() => {
        fetchLodgingById();
    }, []);

    return (
        <>
            <section className="container-fluid" id="home-section">
                <div className="row">
                    <section
                        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                        id="new-product-section"
                    >
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="display-2">Update Product</h1>
                        </div>
                        <Form populate={populate} />
                    </section>
                </div>
            </section>
        </>
    );
}
