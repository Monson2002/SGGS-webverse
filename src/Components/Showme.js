import React from "react";

export default function Showme() {
    return (
        <div>
            <div className="row bg-white">
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <img
                        src="	https://lokkeestudios.com/assets/source-code.webp"
                        alt=""
                        className=" w-100"
                        style={{height:"100vh"}}
                    />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 bg-light align-items-center justify-content-center d-flex rounded-2 bg-white">
                    <div className="container p-4 m-3 ">
                        <div className="d-flex flex-column ">
                            <h5
                                className="text-info fw-bold p-2"
                                style={{ fontSize: "3rem" }}>
                                {" "}
                                SOURCE CODE
                            </h5>
                            <h1 className="p-2" style={{ fontSize: "1.5rem" }}>
                                Behind the simulation
                            </h1>
                            <p className="w-75 p-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Numquam illo voluptatibus
                                adipisci at, nihil quia ipsam, amet, consectetur
                                laudantium unde culpa asperiores soluta.
                            </p>
                        </div>
                        <button
                            className="btn btn-outline-primary rounded-0 btn-lg p-2 mx-2"
                            style={{ width: "10rem" }}>
                            <span style={{ fontSize: "1rem" }}>Show Me</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
