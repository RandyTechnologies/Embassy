import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"
import Tourism from "../../assets/images/tourism/tourism.jpeg"

const NaturalTourismResourcesPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">Natural Tourism Resources</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="lg:flex my-4 gap-10">
                    <img src={Tourism} alt="" />
                    <div className="mt-4 lg:mt-0">
                        <p className="mb-4">
                            The rich natural resources found in Kenya are the country’s strength in attracting tourists. Wildlife in its natural habitat has made Kenya synonymous with the word “safari”.
                        </p>
                        <p>Kenya has 29 national parks including 4 marine parks (Malindi, Watamu, Kisite and Mombasa), and 22 game reserves. There are also five marine reserves located in Kisinga, Malindi, Mombasa, Watamu and Mpunguti and a national sanctuary in Maralal. The parks cover a total of 7.7% of the country.</p>
                    </div>
                </div>
                <p className="mb-4">
                    Abundant water resources provide tourists with sufficient water related tourism. The world’s second largest fresh water lake is in Kenya: Lake Victoria situated in western Kenya offers wonderful sunset attraction plus water sports. The Great Rift Valley from Jordan cuts across Kenya with wonderful lakes along it within the country. Lakes Bogoria, Naivasha, Nakuru, Turkana, Baringo and Elementaita are known for their rich bird life; especially the rare pink flamingos (popular in lakes Nakuru and Naivasha).
                </p>
                <p>
                    The natural Kakamega forest in western Kenya, and Arabuko Sokoke forest in the Coast are well known attractions for bird watching, snake watching, nature walk, and adventure tourism.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default NaturalTourismResourcesPage