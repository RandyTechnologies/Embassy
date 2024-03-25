import { NavBar } from "../Components/NavigationBar"
import { QuickActionsComponent } from "../Components/QuickActions"
import Hero from "../assets/images/Rectangle 1 (1).png"
import ETA from "../assets/images/eta.svg"
import Public from "../assets/images/public-notice/publicnotice.svg"
import President from "../assets/images/public-notice/presnotice.svg"
import { NewsComponent } from "../Components/News"
import { Footer } from "../Components/Footer"


const HomePage = () => {
    return (
        <div>
            <section>
                <NavBar />
            </section>
            <section>
                <div className="relative">
                    <img src={Hero} alt="" className="h-[600px] lg:h-auto object-cover w-full -z-10" />
                    <div className="lg:w-[590px] absolute  bg-[#994F06] left-0 bottom-0 lg:left-[14%] lg:bottom-[5%] text-white p-6 bg-opacity-85">
                        <p className="text-sm">Latest News</p>
                        <p className="mt-2 text-xl lg:text-[40px] leading-none font-bold">Jane Fraser Is Hitting Refresh at Citigroup</p>
                        <p className="py-3 text-xs lg:text-base">Scott Morrison says Coalition is ‘getting on with’ reductions, but analysis finds end of lockdowns and drought will reverse trend...</p>
                        <a href="" className="text-xs lg:text-base px-6 py-2 text-[#994F06] bg-white rounded-full">Read More</a>
                    </div>
                </div>
            </section>
            <section className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid lg:grid-cols-6 gap-4">
                    <div className="col-span-4">
                        {/* <div className="">
                            <p className="text-center text-xl font-bold py-4">Tobong'u Lorre! Welcome Home</p>
                            <p className="text-2xl lg:text-[32px] italic text-center">'Kenya is the home of humanity'</p>
                            <p className="text-center text-sm">H.E. President William S. Ruto</p>
                        </div> */}
                        <div>
                            <QuickActionsComponent />
                            <div className="w-full h-0.5 bg-slate-100 hidden lg:block"></div>
                        </div>
                        <div className="">
                            <div className="lg:grid grid-cols-3 gap-4 lg:py-16">
                                <div className="col-span-2">
                                    <p className="text-xl font-bold text-[#994F06]">eTA</p>
                                    <p className=" py-3">From 01.01.2024, an electronic travel authorization (eTA) is required for ALL visitors (foreigners except citizens of EAC member states) including infants and children, to enter the Republic of Kenya.
                                        This must be applied for via the following link:<span><a href="" className="underline text-[#994F06]">www.etakenya.go.ke</a></span></p>
                                    <p className="pb-3 text-xl font-bold text-[#994F06]">eTA on arrival is NOT possible!</p>
                                    <p className="">Already paid and issued eVisas are valid and can be used to enter Kenya until the expiry of their validity. You do NOT need an eTA when you have a valid visa.</p>
                                </div>
                                <img src={ETA} alt="" className="mt-4 lg:mt-0" />
                            </div>
                            <div className="w-full h-0.5 bg-slate-100 hidden lg:block"></div>
                        </div>

                        <div>
                            <div className="py-6 lg:py-16">
                                <p className="text-xl font-bold text-[#994F06]">Mobile Consular Service</p>
                                <p className=" pt-3">The Embassy informs that it has already received a certain number of ID cards. Please send an e-mail with your details to <span className="text-[#994F06]">immigration2@kenyaembassyberlin.de</span> so that we can let you know whether your ID card is already in Berlin.</p>
                            </div>
                            <div className="w-full h-0.5 bg-slate-100 hidden lg:block"></div>
                        </div>
                        <div>
                            <div className="flex flex-col lg:flex-row gap-4 pt-6 lg:py-16">
                                <div>
                                    <p className="font-bold text-xl uppercase">Public Notice</p>
                                    <img src={Public} alt="" />
                                </div>
                                <div>
                                    <p className="font-bold text-xl uppercase">H.E. DR. WILLIAM SAMOEI RUTO IS KENYA'S FIFTH PRESIDENT</p>
                                    <img src={President} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-l pl-4 hidden lg:block col-span-2">
                        <div>
                            <p className="font-bold mb-2 text-[#994F06]">Latest News</p>
                            <NewsComponent />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default HomePage