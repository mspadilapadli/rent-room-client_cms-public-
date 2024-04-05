import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import showToast from "../utils/toast";

export default function Form() {
    const navigate = useNavigate();
    const [inputAdd, setInputAdd] = useState({
        name: "",
        facility: "",
        roomCapacity: "",
        imgUrl: "",
        location: "",
        price: null,
        typeId: null,
    });

    const handleInputAdd = (event) => {
        const { name, value } = event.target;
        setInputAdd({
            ...inputAdd,
            [name]: value,
        });
    };

    const handlePostForm = async (event) => {
        event.preventDefault();
        try {
            const response = await axios({
                method: "post",
                url: "https://server-myroom.mspadilapadli-dev.online/lodgings",
                // url: "http://localhost:3000/users/add-user",
                data: inputAdd,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            navigate("/");
        } catch (error) {
            console.log(error);
            showToast(error.response.data.message);
        }
    };

    return (
        <>
            <div>
                <div>name: {inputAdd.name} </div>
                <div>facility: {inputAdd.facility} </div>
                <div>roomCapacity: {inputAdd.roomCapacity} </div>
                <div>imgUrl: {inputAdd.imgUrl} </div>
                <div>location: {inputAdd.location} </div>
                <div>price: {inputAdd.price} </div>
                <div>typeId:{inputAdd.typeId} </div>
            </div>
            <div className="row">
                <div>
                    {/* className="col-12 col-md-6" */}

                    <form id="product-form" onSubmit={handlePostForm}>
                        <div className="mb-3">
                            <label htmlFor="product-name">
                                Name
                                <span className="text-danger fw-bold">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="product-name"
                                placeholder="Enter product name"
                                autoComplete="off"
                                required=""
                                name="name"
                                onChange={handleInputAdd}
                                value={inputAdd.name}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="product-name">
                                Location
                                <span className="text-danger fw-bold">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="product-name"
                                placeholder="Enter product location"
                                autoComplete="off"
                                required=""
                                name="location"
                                onChange={handleInputAdd}
                                value={inputAdd.location}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="product-category">
                                Type
                                <span className="text-danger fw-bold">*</span>
                            </label>
                            <select
                                id="product-category"
                                className="form-select"
                                required=""
                                name="typeId"
                                onChange={handleInputAdd}
                            >
                                <option value="" selected="" disabled="">
                                    -- Select Category --
                                </option>
                                <option value={1}>Small</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Large</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="product-desc">
                                Facility
                                <span className="text-danger fw-bold">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="product-desc"
                                placeholder="Enter product description"
                                autoComplete="off"
                                required=""
                                name="facility"
                                onChange={handleInputAdd}
                                value={inputAdd.facility}
                            />
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="product-stock">
                                        Room Capacity
                                        <span className="text-danger fw-bold">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="number"
                                        min={0}
                                        className="form-control"
                                        id="product-stock"
                                        placeholder="Enter product stock"
                                        autoComplete="off"
                                        required=""
                                        name="roomCapacity"
                                        onChange={handleInputAdd}
                                        value={inputAdd.roomCapacity}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="product-price">
                                        Price
                                        <span className="text-danger fw-bold">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="number"
                                        min={0}
                                        className="form-control"
                                        id="product-price"
                                        placeholder="Enter product price"
                                        autoComplete="off"
                                        required=""
                                        name="price"
                                        onChange={handleInputAdd}
                                        value={inputAdd.price}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="product-image">Image</label>
                            <input
                                type="text"
                                className="form-control"
                                id="product-image"
                                placeholder="Enter product image url"
                                autoComplete="off"
                                name="imgUrl"
                                onChange={handleInputAdd}
                                value={inputAdd.imgUrl}
                            />
                        </div>
                        <div className="row mt-5 mb-3">
                            <div className="col-6">
                                <a
                                    className="btn btn-lg btn-light rounded-pill w-100 p-2"
                                    href=""
                                >
                                    Cancel
                                </a>
                            </div>
                            <div className="col-6">
                                <button
                                    className="btn btn-lg btn-primary rounded-pill w-100 p-2"
                                    type="submit"
                                    href=""
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
