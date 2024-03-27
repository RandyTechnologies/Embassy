import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const HumanTourismResourcesPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">Human Tourism Resources</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 lg:h-screen">
                <p className="mb-4">
                    Sustaining tourism in Kenya has been successful due to the development undertaken in human resources. The country has several institutions both public and private undertaking requisite training in the hotel and hospitality industry. For example, the Kenya Utalii College located in Nairobi has built over the years, a resource capacity that has facilitated quality training for the hotel and tourism industry for all cadres of personnel in Kenya and the African continent.
                </p>
                <p>
                    A number of local universities also offer degree and post-graduate programmes related to tourism and hospitality industry. Some of these are Moi University, University of Nairobi, Maseno University, Kenyatta University and the Nairobi Campus of United States International University. Kenya Wildlife Service also offers specialised training for wildlife and park management for the sustainability of the wildlife in their natural habitat.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default HumanTourismResourcesPage