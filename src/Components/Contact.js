import React from 'react'

export default function Contact() {
  return (
    
    <div id='contact'>
                <div className="h-24 w-4/5 justify-center flex items-center m-auto">
                <h1 className="fw-bold font-roboto text-4xl m-2">"Winners don't do different things , they do things differently" </h1>
                </div>

      <div className="row bg-dark mt-5 " style={{height:"80vh" }}>
    <div className="col-lg-6 col-md-12 col-sm-12 bg-dark text-light justify-content-center d-flex align-items-center p-5 " >
        <div className="container d-flex justify-content-start flex-column ">
            <span className="text-primary fw-bold text-info" style={{fontSize: "1.5rem"}} >Contact</span>
            <h1 className="fw-bold" style={{fontSize: "4rem"}}>Got a problem to solve ?</h1>
            <p className="text-secondary">Get your space and tell me your ideas to develop your dream application</p>
            <div className="d-flex ">
                <span className="material-symbols-outlined me-3">mail</span>
                <span> hello@lokkeestudios.com</span>
            </div>
        </div>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 text-light bg-dark justify-content-center align-items-center d-flex " >
        <form  className="form w-75 me-5">
            <label className="form-label" for="name">Name</label>
            <input type="text "id="name" className="form-control" />

            <label className="form-label mt-3" for="email">Email</label>
            <input type="email" id="email" className="form-control" />

            <label className="form-label mt-3" for="name">Message</label>
         
            <textarea name="" id="" rows="5" className="form-control"></textarea>

            <button className="btn btn-primary  rounded-0 mt-5">Hit me up</button>
        </form>
    </div>

 </div>
    </div>
  )
}
