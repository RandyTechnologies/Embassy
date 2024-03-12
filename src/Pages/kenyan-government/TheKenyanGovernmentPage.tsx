import { NavBar } from "../../Components/NavigationBar"
import Flag from "../../assets/images/page-images/kenyan-government/Flag_of_Kenya.svg.png"
import Arms from "../../assets/images/page-images/kenyan-government/Coat_of_arms_of_Kenya_(Official).svg"
import { Footer } from "../../Components/Footer"

const TheKenyanGovernmentPage = () => {
    return (
        <div>
            <div>
                <NavBar />
                <div className="bg-[#994F06]">
                    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                        <div>
                            <p className="text-2xl lg:text-4xl  font-bold text-white uppercase text-center">The Kenyan Government</p>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                    <div className="grid lg:grid-cols-3 gap-10">
                        <section className="col-span-2">
                            <div className="flex gap-10 lg:gap-20 items-center border-b pb-8 lg:pb-16">
                                <div>
                                    <img src={Flag} alt="" className="w-48" />
                                    <p className="pt-4 lg:text-xl lg:font-bold text-center leading-none">Flag of Kenya</p>
                                </div>
                                <div>
                                    <img src={Arms} alt="" className="w-48" />
                                    <p className="pt-4 lg:text-xl lg:font-bold text-center leading-none">Court of Arms</p>
                                </div>
                                <a href="#anthem" className="lg:hidden underline text-center text-[#994F06] leading-none">Kenya National Anthem</a>
                            </div>
                            <div className="pb-4 pt-8 lg:pt-16">
                                <p className="font-bold text-xl uppercase pb-2">Structure of the Kenyan Government</p>
                                <p className="pb-2">The 2010 Constitution established the structure of the Kenyan Government.</p>
                                <p className="mb-4">
                                    The Government of Kenya consists of the Legislature, the Executive, the Judiciary and the Devolved Government.
                                </p>
                            </div>
                            <div className="pb-4">
                                <p className="font-bold text-xl uppercase pb-2">The Executive</p>
                                <p className="pb-2">The President, the Deputy President and the Cabinet constitute the executive arm of the Kenyan Government.</p>
                                <p className="mb-4">
                                    The President is the Head of State and Government, Commander-in-Chief of the Kenya Defence Forces, and the Chairperson of the National Security Council.
                                </p>
                                <p className="pb-2">For further information on the President, please click on the following link <a href="http://www.statehousekenya.go.ke/" className="underline text-[#994F06]">http://www.statehousekenya.go.ke</a></p>
                                <p className="mb-4">
                                    The Deputy President is the President's principal assistant.
                                </p>
                                <p className="pb-2">For further information on the President, please click on the following link {" "}
                                    <a className="underline text-[#994F06]"> www.deputypresident.go.ke</a></p>
                            </div>

                            <div className="pb-4">
                                <p className="font-bold text-xl uppercase pb-2">The Parliament</p>
                                <p className="pb-2">Kenya's Parliament consists of two houses: {" "}
                                    <a className="font-bold text-[#994F06]">the National Assembly and the Senate.</a></p>
                                <p className="pb-2">For further information on the Parliament, please click on the following link. {" "}
                                    <a href="http://www.bunge.go.ke/" className="underline text-[#994F06]"> www.deputypresident.go.ke</a></p>
                            </div>
                            <div className="pb-4">
                                <p className="font-bold text-xl uppercase pb-2">The Judiciary</p>
                                <p className="pb-2">
                                    The Judiciary is divided into Superior Courts and Subordinate Courts. The Superior Courts are: the Supreme Court, the Court of Appeal and the High Court. The Supreme Court is the highest court in Kenya. The Subordinate Courts are: the Magistrates Courts, the Kadhi Courts, the Courts Martial and the Tribunals
                                </p>
                                <p className="pb-2">For further information on the Judiciary, please click on the following link {" "}
                                    <a href="http://www.judiciary.go.ke/" className="underline text-[#994F06]"> http://www.judiciary.go.ke/</a></p>
                            </div>
                            <div>
                                <p className="font-bold text-xl uppercase pb-2">The Devolved Government</p>
                                <p className="pb-2">
                                    The Kenyan Constitution established 47 Counties, each with its own Government. The County Governments consist of the County Assembly and the County Executive. The County Governor is the head of the County Executive.
                                </p>
                                <p className="pt-2">
                                    The 47 Counties are as follows: Mombasa, Kwale, Kilifi, Tana River, Lamu, Taita-Taveta, Garissa, Wajir, Mandera, Marsabit, Isiolo, Meru, Tharaka-Nithi, Embu, Kitui, Machakos, Makueni, Nyandarua, Nyeri, Kirinyaga, Murang'a, Kiambu, Turkana, West Pokot, Samburu, Trans Nzoia, Uasin Gishu, Elgeyo-Marakwet, Nandi, Baringo, Laikipia, Nakuru, Narok, Kajiado, Kericho, Bomet, Kakamega, Vihiga, Bungoma, Busia, Siaya, Kisumu, Homabay, Migori, Kisii, Nyamira and Nairobi.
                                </p>
                            </div>
                        </section>
                        <section className="lg:border-l lg:px-16" id="anthem">
                            <p className="font-bold text-xl">Kenya National Anthem</p>
                            <p className="font-bold text-2xl pb-8 pt-4">English</p>
                            <div className="mb-4">
                                <p>O God of all creation</p>
                                <p>Bless this our land and nation</p>
                                <p>Justice be our shield and defender</p>
                                <p>May we dwell in unity</p>
                                <p>Peace and liberty</p>
                                <p>Plenty be found within our borders.</p>
                            </div>
                            <div className="mb-4">
                                <p>Let one and all arise</p>
                                <p>With hearts both strong and true</p>
                                <p>Service be our earnest endeavour</p>
                                <p>And our homeland of Kenya</p>
                                <p>Heritage of splendour</p>
                                <p>Firm may we stand to defend.</p>
                            </div>
                            <div className="mb-4">
                                <p>Let all with one accord</p>
                                <p>In common bond united</p>
                                <p>Build this our nation together</p>
                                <p>And the glory of Kenya</p>
                                <p>The fruit of our labour</p>
                                <p>Fill every heart with thanksgiving.</p>
                            </div>

                            <p className="font-bold text-2xl py-8 pt-4">Kiswahili</p>
                            <div className="mb-4">
                                <p>Ee Mungu nguvu yetu</p>
                                <p>Ilete baraka kwetu</p>
                                <p> Haki iwe ngao na mlinzi</p>
                                <p>Natukae na undugu</p>
                                <p>Amani na uhuru</p>
                                <p>Raha tupate na ustawi.</p>
                            </div>
                            <div className="mb-4">
                                <p> Amkeni ndugu zetu</p>
                                <p> Tufanye sote bidii</p>
                                <p>Nasi tujitoe kwa nguvu</p>
                                <p>Nchi yetu ya Kenya</p>
                                <p>Tunayoipenda</p>
                                <p> Tuwe tayari kuilinda</p>
                            </div>
                            <div className="mb-4">
                                <p>Natujenge taifa letu</p>
                                <p> Ee, ndio wajibu wetu</p>
                                <p>Kenya istahili heshima</p>
                                <p>Tuungane mikono</p>
                                <p>Pamoja kazini</p>
                                <p> Kila siku tuwe na shukrani</p>
                            </div>
                        </section>
                    </div>


                </div>
                <Footer />
            </div>
        </div>
    )
}

export default TheKenyanGovernmentPage