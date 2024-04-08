import { useNavigate } from "react-router-dom";

export default function CancelButton() {
    const navigate = useNavigate();

    const handleCancle = () => {
        navigate("/");
    };
    return (
        <>
            <button
                className="btn btn-lg btn-light rounded-pill w-100 p-2"
                onClick={handleCancle}
            >
                Cancel
            </button>
        </>
    );
}
