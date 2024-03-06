import NavigationBar from "../Components/NavigationBar"
import Hero from "../assets/images/Rectangle 1 (1).png"


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
        </div>
    )
}

export default HomePage