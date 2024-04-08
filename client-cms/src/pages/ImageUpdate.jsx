import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import showToast from "../utils/toast";

export default function ImageUpdate() {
    const params = useParams();
    const navigate = useNavigate();
    //  console.log(params.id, "id image updete");
    const [file, setFile] = useState(null);

    const handleInputImage = (e) => {
        const image = e.target.files[0];

        setFile(image);
    };

    const handelSubmitImg = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("imgUrl", file);

            const { data } = await axios({
                method: "PATCH",
                url: `https://server-myroom.mspadilapadli-dev.online/lodgings/${params.id}/imgUrl`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
                data: formData,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
            showToast(error.response.data.message);
        }
    };

    return (
        <>
            <section
                className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                id="update-product-section"
            >
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="pt-3 pb-2 mb-3">
                            <form id="register-form" onSubmit={handelSubmitImg}>
                                <h1 className="h3 mb-3 display-1">
                                    Update Image
                                </h1>
                                {/* <div class="mb-3"> */}
                                <div className="input-group mb-3">
                                    <input
                                        type="file"
                                        className="form-control pb-2"
                                        id="inputGroupFile02"
                                        autoComplete="off"
                                        required=""
                                        name="imgUrl"
                                        onChange={handleInputImage}
                                    />
                                </div>
                                <button
                                    className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3"
                                    type="submit"
                                >
                                    Update Image
                                </button>
                                {/* </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
