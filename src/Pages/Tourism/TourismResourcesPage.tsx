import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const TourismResourcesPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">Tourism Resources</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <p className="my-4">
                    Kenya is a traditional tourist destination. Following the concept of tour, trade and then invest, the oldest recorded tourists to Kenya went with the aim of trading with the East African coastal settlements. Apart from the early Arab traders, on 28th February 1498, a Portuguese sailor (tourist?), Vasco da Gama anchored his ship at the Kenyan coastal town of Malindi. On ones tour of Malindi today, a visit to Vasco da Gamas Pillar is a reminder of this historic early tourist!
                </p>
                <p className="mb-4">
                    The tourism sector in Kenya is an important economic activity committed to provision of high quality facilities and services for enjoyment by both the citizens and visitors alike. It is an instrument for promoting the economy in terms of job creation, good living standards and foreign exchange sources. Tourism further encourages international social integration through inter-cultural marriages and other interactions. Many Kenyans have encountered their life partners through tourism. Tourism therefore, plays a significant role in international social, cultural and racial understanding and tolerance.
                </p>
                <p className="mb-4">Kenya offers a variety of tourist attractions which range from wildlife safaris, beach holidays, ornithology, camping and hiking to conference tourism as well as sports tourism. The latter includes golf, fishing, sailing, river rafting, cycling, marathons and bungee jumping. Kenyas tourism products and services can therefore be broadly categorized as based on natural, cultural, human and capital resources.</p>
            </div>
            <Footer />
        </div>
    )
}

export default TourismResourcesPage