import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const ExportProducts = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center ">Export Products</p>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <p className="my-4 font-bold">
                    KENYA’S EXPORT PRODUCTS
                </p>
                <p className="font-bold mb-4">TEA</p>
                <p className="mb-2">
                    Tea is Kenya's top foreign exchange earner, bringing in more than €1 billion (Sh100 billion) every year. The tea industry in Kenya contributes 4% to Kenya's Gross Domestic Product (GDP) and accounts for 26% of foreign exchange earnings.
                </p>
                <p className="mb-2">
                    For more information on Kenya's tea industry, please visit the following websites:
                </p>
                <p className="mb-2">
                    The Tea Directorate - <a href="http://www.ktdateas.com/" className="hover:underline text-[#994F06]">www.teaboard.or.ke</a>
                </p>
                <p className="mb-2">
                    The Tea Research Foundation  -www.tearesearch.or.ke
                </p>
                <p className="font-bold mt-4">FLOWERS</p>
                <p className="mb-2">
                    Kenya exports more than 130,000 tonnes of flowers, bringing in around €500 million (Sh50 billion) in revenue annually. The country has 2,700 acres of land under flower farming
                </p>
                <p className="mb-2">
                    For more information on Kenya's flower industry, please visit the following websites:
                </p>
                <p className="mb-2">
                    Horticultural Crops Directorate - www.agricultureauthority.go.ke
                </p>
                <p className="mb-2">Kenya Flower Council - <a href="http://www.kenyaflowercouncil.org/" className="hover:underline text-[#994F06]">www.kenyaflowercouncil.org</a></p>

                <p className="font-bold mt-4">COFFEE</p>
                <p className="mb-2">
                    Coffee fetches around €220 million (Sh22 billion) annually.
                </p>
                <p className="mb-2">
                    For more information on Kenya's coffee industry, please visit the following website:
                </p>
                <p className="mb-2">
                    The Coffee Directorate - www.codf.co.ke
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default ExportProducts