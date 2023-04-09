import React from "react";

export default function Footer() {
    return (
        <>
            <section className="footer bg-[#0F1922]">
                <div className="flex justify-center items-center pt-16 pb-16">
                    <img
                        src="https://lokkeestudios.com/assets/logo.svg"
                        className="w-24"
                        alt=""
                        srcset=""
                    />
                </div>

                <div className="h-[1px] bg-slate-200 w-4/5 m-auto"></div>

                <div className="py-24 text-white">
                    <ul className="flex justify-center items-center text-2xl">
                        <li className="px-12"><a href="#about"  rel="noopener noreferrer">About</a></li>
                        <li className="px-12"><a href="#work"  rel="noopener noreferrer">Work</a></li>
                        <li className="px-12"><a href="#contact"  rel="noopener noreferrer">Contact</a></li>
                        <li className="px-12"><a href="https://github.com/Monson2002/SGGS_Webverse"  rel="noopener noreferrer">Source Code</a></li>
                    </ul>
                </div>

                <div className="h-[1px] bg-slate-200 w-4/5 m-auto"></div>

                <div className="h-24"></div>

                <div className="flex justify-center items-center">
                    <li className="m-4 p-2 mr-2 ml-4 px-0 hover:underline hover:scale-125 hover:transition-all active:underline">
                        <i className="fa-brands fa-github fa-xl bg-white text-light" ></i>
                    </li>
                    <li className="m-4 p-2 mx-2 px-0 hover:underline hover:scale-125 hover:transition-all active:underline">
                        <i class="fa-brands fa-discord text-light"></i>
                    </li>
                </div>

                <div className=""></div>

            </section>
        </>
    );
}
