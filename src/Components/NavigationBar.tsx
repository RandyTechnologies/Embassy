import { useState } from "react"
import Logo from "../assets/logo/EmbassyLogo.svg"
import { WebIcon } from "./Icons"
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { IonIcon } from "@ionic/react";


export const NavBar = () => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white">
            <div>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:pt-4">
                    <a href="/" className="lg:flex items-center z-50 hidden">
                        <img src={Logo} alt="" className="w-12 lg:w-20" />
                    </a>
                    <div className="hidden lg:block">
                        <div className="flex items-center justify-center gap-1 mb-2">
                            <WebIcon />
                            <p className="text-sm ">{formattedDate}</p>
                        </div>
                        <h1 className="uppercase text-xl lg:text-[32px] font-bold">Kenya Embassy Berlin</h1>
                    </div>
                    <div>
                        <div className="hidden lg:block">
                            <a href="" className="px-6 py-2 bg-[#994F06] text-white rounded-full">Contact Us</a>
                        </div>
                    </div>
                    <div className="md:hidden z-50 p-5 md:w-auto w-full flex justify-between">
                        <a href="/" className="flex items-center z-50">
                            <img src={Logo} alt="" className="w-12 lg:w-20" />
                        </a>
                        <div className="text-3xl" onClick={() => setOpen(!open)}>
                            <IonIcon name={`${open ? "close" : "menu"}`}></IonIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center font-medium justify-around">
                <ul className="z-20 md:flex hidden items-center gap-4">
                    <li>
                        <Link to="/" className="px-3 inline-block normal-case hover:text-[#994F06] py-4">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/the-kenyan-government" className="px-3 inline-block normal-case hover:text-[#994F06] py-4">
                            The Kenyan Government
                        </Link>
                    </li>
                    <li>
                        <Link to="/the-embassy" className="px-3 inline-block normal-case hover:text-[#994F06] py-4">
                            The Embassy
                        </Link>
                    </li>
                    <NavLinks />
                </ul>
                {/* Mobile nav */}
                <ul
                    className={`z-20 md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}
                >
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block normal-case">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/the-kenyan-government" className="px-3 inline-block normal-case hover:text-[#994F06] py-4">
                            The Kenyan Government
                        </Link>
                    </li>
                    <li>
                        <Link to="/the-embassy" className="px-3 inline-block normal-case hover:text-[#994F06] py-4">
                            The Embassy
                        </Link>
                    </li>
                    <NavLinks />
                </ul>
            </div>
        </nav>
    )
}
