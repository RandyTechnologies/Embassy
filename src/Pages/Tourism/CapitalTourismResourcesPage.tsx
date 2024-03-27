import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const CapitalTourismResourcesPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">Capital Tourism Resources</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-8">
                <p className="mb-4">
                    Geographical dispersion of tourist resorts in Kenya is countrywide. Kenya due to her varied tourist products from sandy beaches, cultural safaris, ornithology, and game watching to leisure through sports and conferencing, has quality accommodation and lodging facilities at every product point. From Rusinga Island in western Kenya to Lamu in the east, tourists have quality accommodation befitting their ability to spend. From the Aberdares and Mt. Kenya in the north to Amboseli and Masai Mara in the south, exotic lodges and hotels adorn the destinations.
                </p>
                <p className="mb-4">
                    Kenya has highly trained travel agents and tour operators with sound capital investment to meet the demands of tourists of all classes. A good network of travel connections is available to any destination in the country. Air, rail, maritime and road travel are well connected.
                </p>
                <p className="mb-4">
                    Investment has furthermore been made in the development of security apparatus. Surveillance equipment installation, flying doctor service and tourist police services among other measures have been instituted to make Kenya one of the safest tourist destinations in the world. The country also continues to welcome more investment in the tourism industry. We therefore, invite potential investors to contact us for detailed discussions.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default CapitalTourismResourcesPage