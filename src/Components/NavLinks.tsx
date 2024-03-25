import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Links";
import { IonIcon } from "@ionic/react";

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    return (
        <>
            {links.map((link) => (
                <div>
                    <div className="text-left md:cursor-pointer group">
                        <h1
                            className="p-4 flex justify-between items-center md:pr-0 pr-5 group hover:text-[#994F06]"
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                                setSubHeading("");
                            }}
                        >
                            {link.name}
                            <span className="text-xl md:hidden inline">
                                <IonIcon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></IonIcon>
                            </span>
                            <span className="text-xl md:mt-1 md:ml-1 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                <IonIcon name="chevron-down"></IonIcon>
                            </span>
                        </h1>
                        {link.submenu && (
                            <div>
                                <div className="absolute top-36 hidden group-hover:md:block hover:md:block">
                                    <div className="py-3">
                                        <div
                                            className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"
                                        ></div>
                                    </div>
                                    <div className="bg-white p-5 gap-6 grid grid-cols-2 shadow-lg">
                                        {link.sublinks.map((mysublinks) => (
                                            <div>
                                                <h1 className="text-lg font-semibold uppercase">
                                                    {mysublinks.Head}
                                                </h1>
                                                {mysublinks.sublink.map((slink) => (
                                                    <li className="text-sm text-gray-900 my-4 hover:text-[#994F06]">
                                                        <Link
                                                            to={slink.link}
                                                            className="hover:text-primary"
                                                        >
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
                        {/* sublinks */}
                        {link.sublinks.map((slinks) => (
                            <div>
                                <div>
                                    <h1
                                        onClick={() =>
                                            subHeading !== slinks.Head
                                                ? setSubHeading(slinks.Head)
                                                : setSubHeading("")
                                        }
                                        className="bg-gray-100 py-2 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                                    >
                                        {slinks.Head}

                                        <span className="text-xl md:mt-1 md:ml-2 inline">
                                            <IonIcon
                                                name={`${subHeading === slinks.Head
                                                    ? "chevron-up"
                                                    : "chevron-down"
                                                    }`}
                                            ></IonIcon>
                                        </span>
                                    </h1>
                                    <div
                                        className={` ${subHeading === slinks.Head ? "md:hidden" : "hidden"
                                            }`}
                                    >
                                        {slinks.sublink.map((slink) => (
                                            <li className="py-2 pl-14 bg-gray-200">
                                                <Link to={slink.link}>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;