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