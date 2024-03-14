import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"
import Image from "../../assets/images/the-embassy/09e7485b87.jpg"

const TheEmbassyPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl text-center font-bold text-white uppercase">The Embassy</p>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
                    <div>
                        <div className="py-4">
                            <div>
                                <p className="font-bold text-2xl uppercase">
                                    Our Vision
                                </p>
                                <p className="pb-4">
                                    A peaceful, united, and prosperous Kenya, participating fully in a just and equitable world.
                                </p>
                            </div>
                            <div>
                                <p className="font-bold text-2xl uppercase">
                                    Our Mission
                                </p>
                                <p className="pb-4">
                                    To pursue the interests and values of the Kenyan people and those of Africa, in Germany, Romania and Bulgaria, through effective diplomatic engagement.
                                </p>
                            </div>
                        </div>
                        <p className="text-2xl font-bold py-4 uppercase">The Embassy</p>
                        <p className="pb-4">
                            Kenya opened her embassy in Bonn, Germany in 1964 just after attaining her independence from Britain in 1963. It is therefore, one of the oldest African embassies in Germany.
                        </p>
                        <p className="pb-4">
                            On 18th December, 2000, the Embassy moved to Berlin, following the relocation of the Federal capital from Bonn to Berlin.
                        </p>
                        <p className="pb-4">
                            The Embassy is also accredited to Poland and The Czech Republic.
                        </p>
                        <p className="pb-2 font-bold">
                            Our Address is:
                        </p>
                        <p>Embassy of the Republic of Kenya</p>
                        <p>Rheinbabenallee 49</p>
                        <p>14199 Berlin</p>
                        <p>Tel.: +49-30-259266 - 0</p>
                        <p>Fax. +49-30-259266-50</p>
                        <p>Emergency number after 17.00 hrs: +49-170-5653817 (Not for passport, visa or any other application enquiry)</p>

                        <p className="text-xl font-bold pt-8">All Email enquiries should be to:</p>
                        <p className="pb-4">General enquiries:
                            <a href="javascript:linkTo_UnCryptMailto('nbjmup+pggjdfAlfozbfncbttzcfsmjo/ef');" className="underline text-[#994F06]">office(at)kenyaembassyberlin.de</a>
                        </p>
                        <p className="pb-4">Passports and other Kenyan applications :
                            <a href="javascript:linkTo_UnCryptMailto('nbjmup+jnnjhsbujpoAlfozbfncbttzcfsmjo/ef');" className="underline text-[#994F06]">immigration(at)kenyaembassyberlin.de</a>
                        </p>
                        <p className="pb-4">Consular Section  - Visa for Kenya:
                            <a href="javascript:linkTo_UnCryptMailto('nbjmup+jnnjhsbujpoAlfozbfncbttzcfsmjo/ef');" className="underline text-[#994F06]">immigration(at)kenyaembassyberlin.de</a>
                        </p>
                        <p className="pb-4 text-xl font-bold text text-[#994F06]">BUSINESS HOURS (for clients seeking Consular services, i.e. passports, visas, certificates, etc.)</p>
                        <p className="pb-4 font-bold text">
                            Mondays to Fridays, 9.00 - 13.00 hrs only
                        </p>
                        <p className="pb-4">Browse the Consular Section page for the application of documents/services from the Embassy</p>
                        <p className="pb-4">
                            The Embassy remains closed on weekends and public holidays (both in Germany and Kenya).
                        </p>
                        <div className="my-4">
                            <p className="text-2xl font-bold mb-4">The Staff</p>
                            <p className="mb-4">Ambassador - Deputy Head of Mission -
                                <span className="font-bold">Ambassador Valerie Rugene</span>
                            </p>
                            <p className="mb-4">First Counsellor -
                                <span className="font-bold">Mr. Idriss Hassan</span>
                            </p>
                            <p className="mb-4">Second Secretary -
                                <span className="font-bold">Mr. Isaak Mamo Jirma</span>
                            </p>
                            <p className="mb-4">Head of Consular Section -
                                <span className="font-bold">Ms. Emma M. K. Malinda</span>
                            </p>
                            <p className="mb-4">Deputy Head of Consular Section -
                                <span className="font-bold">Mr. Alexander N. Karuma</span>
                            </p>
                            <p className="mb-4">Commercial and Trade Attachée -
                                <span className="font-bold">Ms. Fatuma Hashim</span>
                            </p>
                            <p className="mb-4">Financial Attachée  -
                                <span className="font-bold">Ms. Rael Rottich</span>
                            </p>
                            <p className="mb-4">Administrative Attachée  -
                                <span className="font-bold">Ms. Irene Naeku Mpaayei Kudate</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-2xl font-bold mb-4">THE AMBASSADOR</p>
                        <img src={Image} alt="" />
                        <p className="py-4 font-bold">
                            H.E. Ambassador Tom Amolo EBS, is the Ambassador of Kenya to the Federal Republic of Germany and concurrently accredited to Poland and The Czech Republic.
                        </p>
                        <p className="pb-4">
                            I am privileged and honoured to welcome you to the official website of the Embassy of the Republic of Kenya in Berlin, Germany. The site is targeted to those seeking general information about Kenya as well ass specific assistance from the Mission.
                        </p>
                        <p className="pb-4">
                            The site also highlights key sectors of tourism, investment, trade, agriculture and further invites the reader to sector-specific government services and websites.
                        </p>
                        <p className="pb-4">
                            Geostrategically, Kenya is the regional anchor state, a communication hub and is the gateway to Africa's hinterland, including Regional Economic Communities (RECs) namely EAC, COMESA and SADC.
                        </p>
                        <p className="pb-4">
                            Kenya is imbued with a rich and diverse landscape. It is a magical mosaic and a tapestry of arresting natural sights, culture, game and is home to the BIG FIVE and the finest long-distance athletics in the world.
                        </p>
                        <p className="pb-4">
                            This platform encourages Kenyan citizens - visiting or residing in Germany, Poland and The Czech Republic to register with the Embassy and access our services.
                        </p>
                        <p className="pb-4">
                            The Embassy is further considering expanding its foot print of Honorary Consulates in strategic cities in the countries of accreditation to enhance service delivery. Interested parties are encouraged to
                            Karibu.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TheEmbassyPage