import NavigationBar from "../Components/NavigationBar"
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
                <NavigationBar />
            </section>
            <section>
                <div className="relative">
                    <img src={Hero} alt="" />
                    <div className="w-[590px] absolute z-10 bg-[#994F06] left-[14%] bottom-[5%] text-white p-6 bg-opacity-85">
                        <p>Latest News</p>
                        <p className="text-[40px] leading-none font-semibold">Jane Fraser Is Hitting Refresh at Citigroup</p>
                        <p className="py-3">Scott Morrison says Coalition is ‘getting on with’ reductions, but analysis finds end of lockdowns and drought will reverse trend</p>
                        <a href="" className="px-6 py-2 text-[#994F06] bg-white rounded-full">Read More</a>
                    </div>
                </div>
            </section>
            <section className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <div className="">
                            <p className="text-center text-xl font-bold py-4">Tobong'u Lorre! Welcome Home</p>
                            <p className="text-[32px] italic text-center">'Kenya is the home of humanity'</p>
                            <p className="text-center text-sm">H.E. President William S. Ruto</p>
                        </div>
                        <div>
                            <QuickActionsComponent />
                            <div className="w-full h-0.5 bg-slate-100"></div>
                        </div>
                        <div className="">
                            <div className="grid grid-cols-3 gap-4 py-16">
                                <div className="col-span-2">
                                    <p className="text-2xl font-bold text-[#994F06]">eTA</p>
                                    <p className="text-xl py-3">From 01.01.2024, an electronic travel authorization (eTA) is required for ALL visitors (foreigners except citizens of EAC member states) including infants and children, to enter the Republic of Kenya.
                                        This must be applied for via the following link:<span><a href="" className="underline text-[#994F06]">www.etakenya.go.ke</a></span></p>
                                    <p className="pb-3 text-xl font-bold text-[#994F06]">eTA on arrival is NOT possible!</p>
                                    <p className="text-xl">Already paid and issued eVisas are valid and can be used to enter Kenya until the expiry of their validity. You do NOT need an eTA when you have a valid visa.</p>
                                </div>
                                <img src={ETA} alt="" />
                            </div>
                            <div className="w-full h-0.5 bg-slate-100"></div>
                        </div>
                        <div>
                            <div className="py-16">
                                <p className="text-2xl font-bold text-[#994F06]">Mobile Consular Service</p>
                                <p className="text-xl pt-3">The Embassy informs that it has already received a certain number of ID cards. Please send an e-mail with your details to <span className="text-[#994F06]">immigration2@kenyaembassyberlin.de</span> so that we can let you know whether your ID card is already in Berlin.</p>
                            </div>
                            <div className="w-full h-0.5 bg-slate-100"></div>
                        </div>
                        <div>
                            <div className="flex gap-4 py-16">
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
                    <div className="border-l pl-4">
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