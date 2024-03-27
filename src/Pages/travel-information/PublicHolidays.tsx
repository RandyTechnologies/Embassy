import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const PublicHolidays = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">Public holidays in Kenya</p>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-8">
                <p className="my-4">The following days are observed as public holidays in Kenya.</p>
                <li>New Year's Day 1st January</li>
                <li>Good Friday As per the Gregorian calendar</li>
                <li>Easter Monday As per the Gregorian calendar</li>
                <li>Labour Day 1st May</li>
                <li>Madaraka Day* 1st June</li>
                <li>Mashujaa Day* 20th October</li>
                <li>Jamhuri (Independence) Day* 12th December</li>
                <li>Christmas Day 25th December</li>
                <li>Boxing Day 26th December</li>
                <li>Boxing Day 26th December</li>
                <li>Idd – ul - Fitr</li>

                <p className="my-4">Any public holiday falling on a Sunday is observed the following Monday.</p>
                <p className="my-4">* Kenyan National Holidays</p>
                <p className="">We wish you a happy stay!!!!</p>
            </div>
            <Footer />
        </div>
    )
}

export default PublicHolidays