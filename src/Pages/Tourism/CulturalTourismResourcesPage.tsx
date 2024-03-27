import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const CulturalTourismResourcesPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">Cultural Tourism Resources</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-8">
                <p>
                    Forty-two ethnic groups living harmoniously with their diverse cultural practices offer tourists a unique experience. Right from traditional dances, pastoral life, and bull fighting to polygamous practices, festivals and celebrations, Kenyan cultural life is rich, offers academic, and study tourists a fascinating destination. The myths surrounding “kaya” in the coast, “Kit Mikayi” and “Simbi Nyaima” in the west among others are great destination attractions. Several museums preserving national cultural heritage are spread across the country: Nairobi, Kisumu, Kitale, Kapenguria, Lamu and Meru. Others are Fort Jesus in Mombasa, Gedi Ruins in Malindi, Thimlich Ohinga in South Nyanza, Jumba la Mtwana ruins in Kilifi. Every corner of Kenya has unique cultural features of tourist interest.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default CulturalTourismResourcesPage