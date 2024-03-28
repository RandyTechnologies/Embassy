import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const ForeignAffairsPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">Ministry of Foreign and Diaspora Affairs</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <p className="mb-4 font-bold">Function</p>
                <div className="mb-4">
                    <li>Management of Kenya's Foreign Policy</li>
                    <li>Management of Bilateral and Multilateral Relations</li>
                    <li>Liaison with International and Regional Organizations</li>
                    <li>Management of Kenya's Missions and Embassies Abroad</li>
                    <li>Liaison with Foreign Missions in Kenya</li>
                    <li>Ratification of Treaties, Conventions and Agreements</li>
                    <li>Management of Diplomatic Privileges and Immunities</li>
                    <li>Coordination of State and Official Visits</li>
                    <li>Handling of Protocol Matters</li>
                    <li>Provision of Consular Matters</li>
                    <li>Management of Joint Commissions with other Countries</li>
                    <li>Official Communications on Foreign Affairs and Global Issues</li>
                    <li>International Trade Affairs</li>
                    <li>Trade Representative - Special Advisory/Negotiation Services</li>
                    <li>Management of Kenya's Diaspora Issues</li>
                </div>
                <p className="font-bold">Publications</p>
                <a href="http://kenyaembassyberlin.de/fileadmin/user_upload/documents/publications/Kenya_Foreign_Policy.pdf" className="hover:underline text-[#994F06]">
                    Kenya Foreign Policy
                </a> <br></br>
                <a href="http://kenyaembassyberlin.de/fileadmin/user_upload/documents/publications/Kenya_Diaspora_Policy.pdf" className="hover:underline text-[#994F06]">
                    Kenya Diaspora Policy
                </a>

                <p className="text-xl font-bold mt-6">
                    MINISTRY’S LEADERSHIP
                </p>
                <p className="font-bold">
                    Prime Cabinet Secretary of the Republic of Kenya & Cabinet Secretary for Foreign and Diaspora Affairs
                </p>
                <p className="mb-4">Hon. Musalia Mudavadi, E.G.H.</p>
                <p className="font-bold">
                    Principal Secretary, State Department for Foreign Affairs
                </p>
                <p className="mb-4">Dr. A. Korir SingOei</p>
                <p className="font-bold">
                    Principal Secretary, State Department for Diaspora Affairs
                </p>
                <p className="mb-4">Roseline K. Njogu</p>
                <p className="font-bold">
                    Contact Information
                </p>
                <p className="mb-4">
                    Old Treasury Building <br />
                    Harambee Avenue <br />
                    P.O Box 30551-00100 <br />
                    Nairobi, Kenya <br />
                    Tel: +254 20 3318888 <br />
                    Fax: +254 20 2240066<br />
                    Email: info@mfa.go.ke
                </p>
                <p>Website: <a href="http://www.mfa.go.ke/" className="hover:underline text-[#994F06]">www.mfa.go.ke</a></p>
            </div>
            <Footer />
        </div>
    )
}

export default ForeignAffairsPage