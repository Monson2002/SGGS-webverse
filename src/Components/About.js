import React from 'react'

export default function About() {
  return (

      <div className="about row bg-[#0F1922]" id='about' >
        <div className="col-lg-6 col-md-12 col-sm-auto justify-content-center d-flex">
           <img src="https://lokkeestudios.com/assets/about.webp" alt="" style={{height:"100vh",width:"100%"}} />
        </div>
        <div className=" col-lg-6 col-md-12 col-sm-auto justify-content-center d-flex text-light align-items-center overflow-hidden" style={{backgroundColor: "#0F1922"}}>
            <div className="container d-flex flex-column m-3">
                <h3 className="fw-bold text-4xl m-2" style={{color: "blueviolet"}}>About</h3>
                <h1 className="fw-bold font-monospace text-6xl m-2">Developer </h1>
                <p className="w-75 m-2 text-2xl">I'm David, a passionate freelancer bringing you programming and design from the future. I am experienced in developing web and desktop applications including full front end design. This includes brand identity, graphics and illustrations.</p>

            </div>
        </div>

    </div>
 
  )
}
