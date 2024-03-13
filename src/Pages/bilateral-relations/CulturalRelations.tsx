import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const CulturalRelations = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl text-center font-bold text-white uppercase">Cultural Relations</p>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <p className="py-4">
                    Cultural cooperation between Kenya and Germany, focuses on scholarships, scientific collaboration and the promotion of sports. The German Academic Exchange Service (DAAD), an organization of the institutions of higher education and student bodies in Germany, promotes international academic exchanges. It is also an intermediary for the implementation of foreign cultural and academic policy, as well as educational cooperation with developing countries. The DAAD regional office in Nairobi which was established in 1973, supports educational stays in Germany by Kenyans in various programmes, primarily to promote doctoral projects. DAAD arranges for about 80 students and post-graduates to travel to Germany every year.
                </p>
                <p className="pb-4">
                    The Goethe Institute in Nairobi, organizes and supports a broad spectrum of cultural events in order to develop and strengthen cultural ties and partnerships between Kenya and Germany. The main focus of its cultural programme is on visual arts and contemporary culture from Germany and Kenya. The events are normally public.
                </p>
                <p className="pb-4">
                    German has been taught at 32 Kenyan secondary schools since January 1988. The German School in Nairobi also provides classes in German leading to the higher education entrance qualification (Abitur). It provides important services to German-speaking experts, missionaries and business representatives in East Africa.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default CulturalRelations