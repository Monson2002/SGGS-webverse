import React from "react";

const data = [
    {
        name: "Daniel Dimitrow",
        month: "Feb",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi numquam rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi numquam rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi numquam rem? ",
    },
    {
        name: "Mr Bean ",
        month: "Mar",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi numquam rem?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi numquam rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi numquam rem? ",
    },
    {
        name: "John",
        month: "Jan",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi numquam rem?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi numquam rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi numquam rem? ",
    },
];

export default function Work() {
    console.log(data);
    return (
        <div className="mb-5"  id='work'>
            <div className="cotainer-fluid bg-light p-5">
                <div className="containr d-flex justify-content-center align-items-center flex-column p-5">
                    <div className="align-items-center d-flex flex-column m-4">
                        <h3
                            className="fw-bold text-3xl"
                            style={{ color: " #6919FF"}}>
                            Work
                        </h3>
                        <h1 className="fw-bold text-6xl">
                            Dig into my universe
                        </h1>
                    </div>
                </div>
            </div>
            <div className="cotainer-fluid ">
                <div id="carousel" className="carousel slide">
                    <div className="carousel-inner">
                        {data.map((item) => {
                            return (
                                <div className="carousel-item active">
                                    <div
                                        className="div bg-dark text-light"
                                        style={{ height: "80vh" }}>
                                        <div className="div h-50"></div>
                                        <div className="container d-flex justify-content-start flex-column p-5">
                                            <h1
                                                className="ps-2"
                                                style={{ fontSize: "1.5rem" }}>
                                                {item.month}
                                            </h1>
                                            <h1
                                                className="fw-bold mb-3"
                                                style={{ fontSize: "2rem" }}>
                                                {item.name}
                                            </h1>
                                            <p className=" text-secondary mb-2 text-lg">
                                                {item.text}
                                            </p>
                                            <h6 className = "pb-4 text-lg">
                                                <a
                                                    href="/"
                                                    className="link-light "
                                                    style={{
                                                        textDecoration: "none",
                                                    }}>
                                                    website
                                                </a>
                                            </h6>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carousel"
                        data-bs-slide="prev">
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carousel"
                        data-bs-slide="next">
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
