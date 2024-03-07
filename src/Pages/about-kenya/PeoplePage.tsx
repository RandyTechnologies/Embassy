import { Footer } from "../../Components/Footer"
import NavigationBar from "../../Components/NavigationBar"
import PeopleImage from "../../assets/images/page-images/peoplw (1).png"

function PeoplePage() {
    return (
        <div>
            <div>
                <NavigationBar />
            </div>
            <div className="relative">
                <img src={PeopleImage} alt="" className="-z-10 h-[200px] object-cover lg:h-auto w-full" />
                <div>
                    <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">People</p>
                </div>
            </div>
            <section className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="mt-4">
                    <p className="font-bold text-2xl">Population</p>
                    <p className="mb-4">
                        According to the national population and housing census carried out in 2009, there are an estimated 38,610,097 Kenyans dispersed around the country. In the semi arid north and northeast regions, population density hardly reaches 2 per sq km, whereas in the rich and fertile western, population density rises to 120 persons per sq km. In the well endowed Rift Valley, population density varies from one area to another with an average of 13 inhabitants per sq km.
                    </p>
                    <p className="mb-4">
                        Nearly 25% of the total population is concentrated in the large cities of Nairobi, Mombasa and Kisumu including large towns such as Nakuru. Women account for 50.48% of the total population.
                    </p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-2xl">Ethnic Composition</p>
                    <p className="mb-4">
                        Cushites: This group includes the Somali, Orma, Rendille, and Borana.
                    </p>
                    <p className="mb-4">
                        Bantu: This includes the Gikuyu, Luhya, Kamba, Embu, Meru, Kisii, Mijikenda, Taveta, Taita, Pokomo, Bajuni, Boni and Sanye.
                    </p>
                    <p className="mb-4">
                        Nilotes: Includes the Luo, Kalenjin, Maasai, Teso and Samburu.
                    </p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-2xl">Ethnic Composition</p>
                    <p className="mb-4">
                        Protestants : 38%
                    </p>
                    <p className="mb-4">
                        Catholics : 28%
                    </p>
                    <p className="mb-4">
                        Indigenous religions : 26%
                    </p>
                    <p className="mb-4">
                        Muslims : 7%
                    </p>
                    <p className="mb-4">
                        Others 1%
                    </p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-2xl">Languages</p>
                    <p className="mb-4">
                        English (Official), Swahili (national), local languages.
                    </p>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default PeoplePage