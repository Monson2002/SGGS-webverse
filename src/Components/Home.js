import React from "react";

export default function Home() {
    return (
        <>
            <section className="h-screen w-screen bg-[url(https://lokkeestudios.com/assets/future-grid.webp)] bg-[blueviolet] lg:text-2xl bg-fixed bg-cover">
                <section className="navbar ">
        {/* <div class="container-fluid d-flex align-items-center">
      
          <div className="span navbar-toggler-icon me-4 ms-3"></div>
          <a class="navbar-brand d-flex align-items-center" href="#">
            
            <span className='mt-2'> Lokee</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <span class="navbar-text">
              <div className="form">
              <div className="row d-flex " >
                <input type="text" className='col p-1  bg-dark  text-light opacity-25   border-end-0 align-items-center' id="search" placeholder='Search' />
                <div className="col bg-dark opacity-25 justify-content-end d-flex" style={{borderBottom:"2px solid grey"}} >
    
                <span class=" material-symbols-outlined ">search</span>
                </div>
                <button className="col btn btn-primary fw-bold ms-4 me-4 opacity-75 rounded-1" style={{height:"35px"}}>SUBSCRIBE</button>
                <div className="col d-flex align-items-center "><a href="/" className="nav-link opacity-75 ">LOGIN</a></div>
              </div>
                
              </div>
            </span>
          </div>
        </div> */}

                    <ul className="flex justify-end items-center w-full lg:h-16 text-white lg:text-xl font-sans uppercase lg:mr-32">
                        <li className="m-4 p-2 hover:underline active:underline">
                            <a href="#about"  rel="noopener noreferrer">About</a>
                        </li>
                        <li className="m-4 p-2 hover:underline active:underline">
                        <a href="#work"  rel="noopener noreferrer">Work</a>
                        </li>
                        <li className="m-4 p-2 hover:underline active:underline">
                        <a href="#contact"  rel="noopener noreferrer">Contact</a>
                        </li>
                        <li className="m-4 p-2 mr-2 ml-4 px-0 hover:underline hover:scale-125 hover:transition-all active:underline">
                            <i className="fa-brands fa-github fa-xl"></i>
                        </li>
                        <li className="m-4 p-2 mx-2 px-0 hover:underline hover:scale-125 hover:transition-all active:underline">
                            <i className="fa-brands fa-discord fa-xl"></i>
                        </li>
                    </ul>
                </section>

                <section className="flex justify-center items-center w-10/12 m-auto">
                    <div className="image">
                        <img
                            src="https://images.pexels.com/photos/2635534/pexels-photo-2635534.jpeg"
                            alt="img not found"
                            srcset=""
                            className="rounded-full shadow-lg border-white border-4"
                            style={{ height: "30rem", width: "30rem" }}
                        />
                    </div>

                    <div className="title text-8xl font-bold text-white font-roboto leading-tight m-48">
                        <div className="name flex">
                            <h1 className="pr-4">Hi, I am</h1>
                            <div className="pl-4 text-slate-700">David</div>
                        </div>
                        <h1 className="text-3xl font-normal text-white font-roboto my-4">
                            React, Tailwind, Python and more...
                        </h1>

                        <div className="resume text-2xl flex  items-center">
                            <button className="m-8 p-4 ml-0 pl-0 font-semibold text-slate-50 border-4 hover:text-slate-800 transition-all duration-500 hover:bg-slate-50">
                                Resume
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
