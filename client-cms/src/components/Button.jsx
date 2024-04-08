import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
export default function CancelButton() {
    return (
        <>
            <div className="col-6">
                <button
                    className="btn btn-lg btn-light rounded-pill w-100 p-2"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Cancel
                </button>
            </div>
        </>
    );
}
