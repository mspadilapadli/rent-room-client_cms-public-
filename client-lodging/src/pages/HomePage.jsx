import Card from "../components/Card";
import data from "../data/lodgings.json";
const HomePage = ({ hitDetail }) => {
    return (
        <>
            <div className="container my-5">
                <h2 className="text-center my-5">WELCOME</h2>
                <div className="row row-cols-4 g-3">
                    {data.map((e, i) => {
                        return <Card e={e} key={i} hitDetail={hitDetail} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default HomePage;
