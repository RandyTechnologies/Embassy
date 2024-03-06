import Logo from "../assets/logo/EmbassyLogo.svg"
import { WebIcon } from "./Icons"

const NavigationBar = () => {
    return (
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex justify-between items-center">
                <img src={Logo} alt="" className="" />
                <div>
                    <div className="flex items-center justify-center gap-1">
                        <WebIcon />
                        <p className="text-sm">Thursday, February 25, 2021</p>
                    </div>
                    <h1 className="uppercase text-[32px] font-bold">Kenya Embassy Berlin</h1>
                </div>
                <div>
                    <a href="" className="px-6 py-2 bg-[#994F06] text-white rounded-full">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar