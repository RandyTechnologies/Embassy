import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"
import MediaImage from "../../assets/images/page-images/Media (1).png"

const MediaPage = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className="relative">
                <img src={MediaImage} alt="" className="-z-10 h-[200px] object-cover lg:h-auto w-full" />
                <div>
                    <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">The Media</p>
                </div>
            </div>
            <section className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <p className="py-4">
                    The Mass Media in Kenya is a vibrant industry. It includes daily newspapers, television and radio stations.
                </p>
                <div className="mt-4">
                    <p className="font-bold text-2xl">Regulations</p>
                    <p className="mb-4">
                        The communications industry in Kenya is regulated by an independent authority, the Communications Commission of Kenya (CCK). Its role is to license and regulate telecommunications, radio communication and postal/courier services in Kenya. This responsibility translates to several functions including: licensing (telecoms and postal/courier) operators; regulating tariffs for monopoly areas; establishing interconnection principles, type-approving communications equipment, managing the radio frequency spectrum and formulating telecommunication numbering schemes and assigning them to network operators.
                    </p>

                </div>
                <div className="mt-4">
                    <p className="font-bold text-2xl">Newspapers</p>
                    <p className="mb-4">
                        The two major newspapers by circulation are the Nation and the Standard Newspapers. Online editions of these newspapers are available.
                    </p>

                </div>
                <div className="mt-4">
                    <p className="font-bold text-2xl">Television</p>
                    <p className="mb-4">
                        Television stations include the Kenya Broadcasting Corporation (KBC), Kenya Television Network (KTN), Nation Television (NTV), Citizen TV, K24, etc.
                    </p>

                </div>
                <div className="mt-4">
                    <p className="font-bold text-2xl">Radio</p>
                    <p className="mb-4">
                        Radio stations include KBC, Easy FM, Capital FM, Kiss 100, Radio Citizen, etc. Radio stations in local languages are also available.
                    </p>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default MediaPage