import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"
import Tourist from "../../assets/images/tourism/tourist2.jpeg"

const TouristCustomerProfilePage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">Tourist Customer Profile</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-8">
                <p className="mb-4">
                    In relation to the resources summarised above, Kenya understands her customers based on the knowledge of tourist preferences built over a period of time. We appreciate the motives that drive a person to purchase a tourist product. The motives that crystallise into market segmentation include safari, business, conference, leisure, sports, studies, beach and culture among others. Our product and service packages are thus modelled to meet and satisfy the needs of these categories of visitors to Kenya.
                </p>
                <p className="mb-4">
                    Through various specialised agencies of government like the Kenya Tourist Board, Kenya continues to monitor the market trends based on variations of geographical sources, demographic formations, and psychographic interests in order to create, modify and modernise the tourist products and services to meet the demands of each tourist. The tourist industry in Kenya is highly sensitive to personalised tourist demand. For example, we appreciate the fact that some of our source markets are experiencing an ageing demographic trend, others are expecting high value for every single cent, others demanding individualised attention and some emphasizing on an ecologically friendly tourism environment.
                </p>
                <p className="mb-4">
                    The challenge to meet all these demands is top priority to the industry stakeholders and the government alike. We strive to offer excellent attention and service to our tourist visitors.
                </p>
                <img src={Tourist} alt="" className="w-full" />
            </div>
            <Footer />
        </div>
    )
}

export default TouristCustomerProfilePage