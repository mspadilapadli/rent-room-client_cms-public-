import Card from "../components/Card";
import data from "../data/lodgings.json";
const HomePage = ({ hitDetail }) => {
    return (
        <>
            <div className="container my-5">
                <h2 className="text-center my-5">WELCOME</h2>
                <div className="row row-cols-4 g-3">
                    {data.map((e, i) => {
                        return (
                            <Card e={e} key={i} hitDetail={hitDetail} />
                            // <div className="col" key={i}>
                            //     <div className="card">
                            //         <img
                            //             src={e.imgUrl}
                            //             style={{
                            //                 height: "12rem",
                            //                 objectFit: "cover",
                            //             }}
                            //             alt=""
                            //         />

                            //         <div className="card-body">
                            //             <h5 className="card-title">{e.name}</h5>
                            //             <p className="card-text">
                            //                 Rp {e.price}
                            //             </p>
                            //             <p className="card-text">
                            //                 Location : {e.location}
                            //             </p>
                            //         </div>
                            //     </div>
                            // </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default HomePage;
