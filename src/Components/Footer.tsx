import Logo from "../assets/logo/EmbassyLogo.svg"

export const Footer = () => {
    return (
        <div className="relative mt-16 bg-[#292219]">
            {/* <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#292219]"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="currentColor"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
            </svg> */}
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-5">
                    <div className="md:max-w-md lg:col-span-2">
                        <a
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >

                            <img src={Logo} alt="" className="w-36" />
                        </a>
                        <p className="text-2xl font-bold text-white">Embassy of Kenya in Germany
                            with accreditation to
                            Poland and Czechia</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-3 md:grid-cols-3">
                        <div>

                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Special Pages
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        About Kenya
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        The Kenyan Government
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Bilateral Relations
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        The Embassy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Consular Section
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Information for Kenyans in Diaspora
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Commercial Section
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Tourism
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Travel Information for Kenya
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Useful Links
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Contact
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-[#473c2e] sm:flex-row">
                    <p className="text-sm text-gray-500">
                        © 2011-2024 Embassy of the Republic of Kenya, Rheinbabenallee 49, 14199 Berlin. All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};