import { useEffect } from "react"
import Logo from "../assets/logo/EmbassyLogo.svg"
import { ArrowDown, MenuIcon, WebIcon } from "./Icons"

const NavigationBar = () => {
    return (
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex justify-between items-center">
                <img src={Logo} alt="" className="w-12 lg:w-auto" />
                <div className="hidden lg:block">
                    <div className="flex items-center justify-center gap-1 mb-2">
                        <WebIcon />
                        <p className="text-sm ">Thursday, February 25, 2021</p>
                    </div>
                    <h1 className="uppercase text-xl lg:text-[32px] font-bold">Kenya Embassy Berlin</h1>
                </div>

                <div className="hidden lg:block">
                    <a href="" className="px-6 py-2 bg-[#994F06] text-white rounded-full">Contact Us</a>
                </div>
                <div className="lg:hidden">
                    <MenuIcon />
                </div>
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
            <div className="hidden lg:flex justify-center py-4">
                <div className="flex items-center gap-4">
                    <a href="" className="hover:text-[#994F06]">Home</a>
                    <a href="" className="flex items-center gap-2 hover:text-[#994F06]">
                        <span>Special Pages</span>
                        <span><ArrowDown /></span>
                    </a>
                    <a href="" className="flex items-center gap-2 hover:text-[#994F06]">
                        <span>About Kenya</span>
                        <span><ArrowDown /></span>
                    </a>
                    <a href="" className="hover:text-[#994F06]">The Kenyan Government</a>
                    <a href="" className="hover:text-[#994F06]">Bilateral Relations</a>
                    <a href="" className="hover:text-[#994F06]">The Embassy</a>
                    <a href="" className="hover:text-[#994F06]">Consular Section</a>
                    <a href="" className="flex items-center gap-2 hover:text-[#994F06]">
                        <span>More</span>
                        <span><ArrowDown /></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar




export const NavBar = () => {
    useEffect(() => {
        const button = document.getElementById('navbar-toggle') as HTMLElement;
        const menu = document.getElementById('navbar-dropdown') as HTMLElement;
        const dropdownButton = document.getElementById('dropdownNavbarLink') as HTMLElement;
        const dropdownMenu = document.getElementById('dropdownNavbar') as HTMLElement;
        // const doubleDropdownButton = document.getElementById('doubleDropdownButton') as HTMLElement;
        // const doubleDropdown = document.getElementById('doubleDropdown') as HTMLElement;

        const handleDropdownButtonClick = () => {
            dropdownMenu.classList.toggle('hidden');
        };

        // const handleDoubleDropdownButtonClick = () => {
        //     doubleDropdown.classList.toggle('hidden');
        // };

        const handleNavbarToggleClick = () => {
            menu.classList.toggle('hidden');
        };

        const handleDocumentClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                !target.closest('#navbar-toggle') &&
                !target.closest('#navbar-dropdown') &&
                !target.closest('#dropdownNavbarLink') &&
                !target.closest('#dropdownNavbar')
                // !target.closest('#doubleDropdownButton') &&
                // !target.closest('#doubleDropdown')
            ) {
                menu.classList.add('hidden');
                dropdownMenu.classList.add('hidden');
                // doubleDropdown.classList.add('hidden');
            }
        };

        dropdownButton.addEventListener('click', handleDropdownButtonClick);
        // doubleDropdownButton.addEventListener('click', handleDoubleDropdownButtonClick);
        button.addEventListener('click', handleNavbarToggleClick);
        document.addEventListener('click', handleDocumentClick);

        return () => {
            dropdownButton.removeEventListener('click', handleDropdownButtonClick);
            // doubleDropdownButton.removeEventListener('click', handleDoubleDropdownButtonClick);
            button.removeEventListener('click', handleNavbarToggleClick);
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div>
            <nav className="bg-white shadow-sm z-20 w-full">
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
                        <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <a href="/" className="block py-2 px-2 hover:text-[#994F06]" >Home</a>
                            </li>
                            <li>
                                <div id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                    className="cursor-pointer md:p-0 md:w-auto">
                                    <div className="flex items-center gap-1 hover:text-[#994F06]">
                                        <p>About Kenya</p>
                                        <ArrowDown />
                                    </div>

                                </div>
                                {/* Dropdown menu */}
                                <div id="dropdownNavbar" className="absolute z-10 hidden font-normal w-44 bg-white">
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
                                <a href="#" className="block py-2 px-2 hover:text-[#994F06]">Special Pages</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-2 hover:text-[#994F06]">The Kenyan Government</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-2 hover:text-[#994F06]">Bilateral Relations</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-2 hover:text-[#994F06]">The Embassy</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-2 hover:text-[#994F06]">Consular Section</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-2 hover:text-[#994F06]">More</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
