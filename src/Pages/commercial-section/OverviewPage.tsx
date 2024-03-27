import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const OverviewPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center ">OVERVIEW OF KENYA'S ECONOMIC AGENDA</p>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <p className="my-4">
                    Kenya's economic agenda is guided by the Kenya Vision 2030, which is currently the country's national development blueprint. The overriding goal of the Vision is to create a globally competitive and prosperous nation with a high quality of life by 2030. Under Vision 2030, Kenya aims to increase its Gross Domestic Product (GDP) growth rates to an average of 10% per year.
                </p>
                <p className="mb-4">
                    Key sectors have been given priority in acting as growth drivers in the journey to 2030, namely:
                </p>
                <li>
                    Tourism
                </li>
                <li>
                    Agriculture, Livestock and Fisheries

                </li>
                <li>
                    Wholesale and Retail Trade
                </li>
                <li>
                    Manufacturing
                </li>
                <li>
                    IT enabled services
                </li>
                <li>
                    Financial Services
                </li>
                <li>
                    Oil and Gas
                </li>

                <p className="my-4">For more information, please visit Kenya's Vision 2030 website: www.vision2030.go.ke</p>
            </div>
            <Footer />
        </div>
    )
}

export default OverviewPage