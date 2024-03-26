import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

export const BusinessGrantPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">
                            Business Grant for Africa
                        </p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <p className="text-xl font-bold mb-4">
                    What is WIDU?
                </p>
                <p className="mb-4">
                    The WIDU Platform is an initiative of the Federal Ministry for Economic Cooperation and Development (BMZ), implemented by the Gesellschaft für Internationale Zusammenarbeit (GIZ).
                </p>
                <p className="mb-4">
                    The project redirects existing remittances into sustainable investments for start-ups and small businesses. The central tool for the project is the online platform WIDU. WIDU enables transparent and efficient management of the projects for all participants. In addition to financial support from the diaspora, sponsored entrepreneurs receive free coaching measures and a financial contribution from WIDU. The goal is the creation of new jobs, increased income and better economic perspectives for participating African countries.
                </p>
                <p className="text-xl font-bold my-4">
                    Who benefits from WIDU?
                </p>
                <p className="mb-4">
                    WIDU was developed for those who want to improve the economic situation in Africa sustainably. Specifically, the initiative is aimed at private individuals from the participating African diaspora in Germany who regularly transfer money to their home countries. With WIDU they gain insight into the funded project and its implementation from the beginning until the end. This allows diaspora donors to make sure that their transfer is deployed wisely. Entrepreneurs from participating African countries benefit equally from WIDU as they can invest in the sustainability of their businesses. The prerequisite for participation in the promotion programme is that the project partners already know and trust each other. It is also important that both parties – donors and entrepreneurs – are prepared to invest the same amount of money in the project. After successful coaching and proof of private investment on the platform, WIDU will match the joint contribution of the diaspora and the entrepreneur with a grant
                </p>
                <a href="http://kenyaembassyberlin.de/fileadmin/user_upload/documents/WIDU_AFRICA_FLYER.pdf" className="text-[#994F06] hover:underline">
                    Click here for more information
                </a>
            </div>
            <Footer />
        </div>
    )
}
