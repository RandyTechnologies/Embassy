import { useEffect } from "react"
import Logo from "../assets/logo/EmbassyLogo.svg"
import { ArrowDown, MenuIcon, WebIcon } from "./Icons"


export const NavBar = () => {
    useEffect(() => {
        const button = document.getElementById('navbar-toggle') as HTMLElement;
        const menu = document.getElementById('navbar-dropdown') as HTMLElement;

        const dropdownButton = document.getElementById('dropdownNavbarLink') as HTMLElement;
        const dropdownMenu = document.getElementById('dropdownNavbar') as HTMLElement;

        const doubleDropdownButton = document.getElementById('dropdownMoreNavbarLink') as HTMLElement;
        const doubleDropdown = document.getElementById('dropdownMoreNavbar') as HTMLElement;

        const specialDropdownButton = document.getElementById('dropdownSpecialNavbarLink') as HTMLElement;
        const specialDropdown = document.getElementById('dropdownSpecialNavbar') as HTMLElement;

        const bilateralDropdownButton = document.getElementById('dropdownBilateralNavbarLink') as HTMLElement;
        const bilateralDropdown = document.getElementById('dropdownBilateralNavbar') as HTMLElement;

        const consularDropdownButton = document.getElementById('dropdownConsularNavbarLink') as HTMLElement;
        const consularDropdown = document.getElementById('dropdownConsularNavbar') as HTMLElement;

        const handleDropdownButtonClick = () => {
            dropdownMenu.classList.toggle('hidden');
        };

        const handleDoubleDropdownButtonClick = () => {
            doubleDropdown.classList.toggle('hidden');
        };

        const handleSpecialDropdownButtonClick = () => {
            specialDropdown.classList.toggle('hidden');
        };

        const handleBilateralDropdownButtonClick = () => {
            bilateralDropdown.classList.toggle('hidden');
        };

        const handleConsularDropdownButtonClick = () => {
            consularDropdown.classList.toggle('hidden');
        };

        const handleNavbarToggleClick = () => {
            menu.classList.toggle('hidden');
        };

        const handleDocumentClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                !target.closest('#navbar-toggle') &&
                !target.closest('#navbar-dropdown') &&
                !target.closest('#dropdownNavbarLink') &&
                !target.closest('#dropdownNavbar') &&
                !target.closest('#doubleDropdownButton') &&
                !target.closest('#doubleDropdown') &&
                !target.closest('#specialDropdownButton') &&
                !target.closest('#specialDropdown') &&
                !target.closest('#bilateralDropdownButton') &&
                !target.closest('#bilateralDropdown') &&
                !target.closest('#consularDropdownButton') &&
                !target.closest('#consularDropdown')
            ) {
                menu.classList.add('hidden');
                dropdownMenu.classList.add('hidden');
                doubleDropdown.classList.add('hidden');
                specialDropdown.classList.add('hidden');
                bilateralDropdown.classList.add('hidden');
                consularDropdown.classList.add('hidden');
            }
        };

        dropdownButton.addEventListener('click', handleDropdownButtonClick);
        doubleDropdownButton.addEventListener('click', handleDoubleDropdownButtonClick);
        specialDropdownButton.addEventListener('click', handleSpecialDropdownButtonClick);
        bilateralDropdownButton.addEventListener('click', handleBilateralDropdownButtonClick);
        consularDropdownButton.addEventListener('click', handleConsularDropdownButtonClick);
        button.addEventListener('click', handleNavbarToggleClick);
        document.addEventListener('click', handleDocumentClick);

        return () => {
            dropdownButton.removeEventListener('click', handleDropdownButtonClick);
            doubleDropdownButton.removeEventListener('click', handleDoubleDropdownButtonClick);
            specialDropdownButton.removeEventListener('click', handleSpecialDropdownButtonClick);
            bilateralDropdownButton.removeEventListener('click', handleBilateralDropdownButtonClick);
            consularDropdownButton.removeEventListener('click', handleConsularDropdownButtonClick);
            button.removeEventListener('click', handleNavbarToggleClick);
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div>
            <nav className="bg-white shadow-sm z-50 w-full p-2">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:p-4">
                    <a href="/" className="flex items-center">
                        <img src={Logo} alt="" className="w-12 lg:w-20" />
                    </a>

                    <div className="hidden lg:block">
                        <div className="flex items-center justify-center gap-1 mb-2">
                            <WebIcon />
                            <p className="text-sm ">Thursday, February 25, 2021</p>
                        </div>
                        <h1 className="uppercase text-xl lg:text-[32px] font-bold">Kenya Embassy Berlin</h1>
                    </div>
                    <div>
                        <div className="hidden lg:block">
                            <a href="" className="px-6 py-2 bg-[#994F06] text-white rounded-full">Contact Us</a>
                        </div>
                    </div>

                    <button id="navbar-toggle" data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-4 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon />
                    </button>
                </div>
                <div className="lg:hidden">
                    <div>
                        <div className="flex items-center justify-center gap-1">
                            <WebIcon />
                            <p className="text-sm">Thursday, February 25, 2021</p>
                        </div>
                        <h1 className="uppercase text-xl lg:text-[32px] font-bold text-center">Kenya Embassy Berlin</h1>
                    </div>
                </div>
                <div className="flex justify-center pb-4">
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 min-h-screen lg:min-h-0">
                            <li>
                                <a href="/" className="block py-2 px-2 hover:text-[#994F06]" >Home</a>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                    className="cursor-pointer md:p-0 md:w-auto px-2 my-2">
                                    <div className="flex items-center gap-1 hover:text-[#994F06]">
                                        <p>About Kenya</p>
                                        <ArrowDown />
                                    </div>

                                </button>
                                <div id="dropdownNavbar" className="lg:absolute z-10 hidden font-normal w-full lg:w-44 bg-gray-100 lg:bg-white">
                                    <ul className="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="/history" className="block px-4 py-2 hover:text-[#994F06]">History</a>
                                        </li>
                                        <li>
                                            <a href="/geograpgy" className="block px-4 py-2 hover:text-[#994F06]">Geography</a>
                                        </li>
                                        <li>
                                            <a href="/people" className="block px-4 py-2 hover:text-[#994F06]">The People</a>
                                        </li>
                                        <li>
                                            <a href="/culture" className="block px-4 py-2 hover:text-[#994F06]">The Culture</a>
                                        </li>
                                        <li>
                                            <a href="/media" className="block px-4 py-2 hover:text-[#994F06]">The Media</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div id="dropdownSpecialNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                    className="cursor-pointer md:p-0 md:w-auto px-2 my-2">
                                    <div className="flex items-center gap-1 hover:text-[#994F06]">
                                        <p>Special Pages</p>
                                        <ArrowDown />
                                    </div>

                                </div>
                                <div id="dropdownSpecialNavbar" className="lg:absolute z-10 hidden w-full lg:w-auto shadow-sm bg-gray-100 lg:bg-white">
                                    <ul className="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="/faqs" className="block px-4 py-2 hover:text-[#994F06]">Frequently Asked Questions</a>
                                        </li>
                                        <li>
                                            <a href="/recieving-passport-after-biometrics" className="block px-4 py-2 hover:text-[#994F06]">How to Recieve Your Passport After Biomentrics</a>
                                        </li>
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">Lost and Found Items</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="/the-kenyan-government" className="block py-2 px-2 hover:text-[#994F06]">The Kenyan Government</a>
                            </li>
                            <li>
                                <button id="dropdownBilateralNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                    className="cursor-pointer md:p-0 md:w-auto px-2 my-2">
                                    <div className="flex items-center gap-1 hover:text-[#994F06]">
                                        <p>Bilateral Relations</p>
                                        <ArrowDown />
                                    </div>
                                </button>
                                <div id="dropdownBilateralNavbar" className="lg:absolute z-10 hidden w-full lg:w-auto shadow-sm bg-gray-100 lg:bg-white">
                                    <ul className="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="/official-visits" className="block px-4 py-2 hover:text-[#994F06]">Official Visits</a>
                                        </li>
                                        <li>
                                            <a href="/dev-cop" className="block px-4 py-2 hover:text-[#994F06]">Development Co-op</a>
                                        </li>
                                        <li>
                                            <a href="/cultural-relations" className="block px-4 py-2 hover:text-[#994F06]">Cultural Relations</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <a href="/the-embassy" className="block py-2 px-2 hover:text-[#994F06]">The Embassy</a>
                            </li>
                            <li>
                                <div id="dropdownConsularNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                    className="cursor-pointer md:p-0 md:w-auto px-2 my-2">
                                    <div className="flex items-center gap-1 hover:text-[#994F06]">
                                        <p>Consular Section</p>
                                        <ArrowDown />
                                    </div>

                                </div>
                                <div id="dropdownConsularNavbar" className="lg:absolute z-10 hidden w-full lg:w-auto shadow-sm bg-gray-100 lg:bg-white">
                                    <ul className="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">Consular Section</a>
                                        </li>
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">eTA</a>
                                        </li>
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">Marriage</a>
                                        </li>
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">Kenya Permits and Passes</a>
                                        </li>
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">Repatriation of a Decerased <br></br> Kenyan National</a>
                                        </li>
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">Legalization Documents</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div id="dropdownMoreNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                    className="cursor-pointer md:p-0 md:w-auto px-2 my-2">
                                    <div className="flex items-center gap-1 hover:text-[#994F06]">
                                        <p>More</p>
                                        <ArrowDown />
                                    </div>

                                </div>
                                <div id="dropdownMoreNavbar" className="lg:absolute z-10 hidden w-full lg:w-auto shadow-sm bg-gray-100 lg:bg-white">
                                    <ul className="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">Information for Kenyans in Disaspora</a>
                                        </li>
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">Tourism</a>
                                        </li>
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">Travel Information for Kenya</a>
                                        </li>
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">Useful Links</a>
                                        </li>
                                        <li>
                                            <a href="" className="block px-4 py-2 hover:text-[#994F06]">The Media</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
