import { Footer } from "../../Components/Footer"
import NavigationBar from "../../Components/NavigationBar"
import GeographyImage from "../../assets/images/page-images/Geograpgy (1).png"

import Image1 from "../../assets/images/page-images/images-of-nairobi/Rectangle 298-1.png"
import Image2 from "../../assets/images/page-images/images-of-nairobi/Rectangle 298.png"
import Image3 from "../../assets/images/page-images/images-of-nairobi/Rectangle 299-1.png"
import Image4 from "../../assets/images/page-images/images-of-nairobi/Rectangle 299.png"
import Image5 from "../../assets/images/page-images/images-of-nairobi/Rectangle 300-1.png"
import Image6 from "../../assets/images/page-images/images-of-nairobi/Rectangle 300.png"
import Image7 from "../../assets/images/page-images/images-of-nairobi/Rectangle 301-1.png"
import Image8 from "../../assets/images/page-images/images-of-nairobi/Rectangle 301.png"

const GeographyPage = () => {
    return (
        <div>
            <div>
                <NavigationBar />
            </div>
            <div className="relative">
                <img src={GeographyImage} alt="" className="-z-10 h-[200px] object-cover lg:h-auto w-full" />
                <div>
                    <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">Geography</p>
                </div>
            </div>
            <section className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="mt-4">
                    <p className="font-bold text-2xl">Location</p>
                    <p className="mb-4">
                        Kenya lies astride the equator on the eastern coast of Africa. It is bordered by South Sudan on the north-west, Ethiopia on the north, Somalia on the east, Uganda on the west, Tanzania on the south and the Indian Ocean on the south-east. Much of the country, especially in the north and east, is arid or semi-arid. From the Indian Ocean the land rises gradually through dry bush to the fine arable land of the highlands.
                    </p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-2xl">Area</p>
                    <p className="mb-4">
                        Kenya covers an area of approximately 586,600 square Kilometers.
                    </p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-2xl">Climate</p>
                    <p className="mb-4">
                        In the low-lying districts, particularly along the coast, the climate is tropical, hot and humid. On the Plateau and in the highlands the climate is more temperate. Western Kenya and most parts of Nyanza experience heavy conventional rain and have two rain seasons, the long rains from April to June and the short rains from October to November.
                    </p>
                    <p className="mb-4">
                        Kenyas warm climate is favourable for tourism during the drier season that is between September and March.
                    </p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-2xl">Climate</p>
                    <p className="mb-4">
                        Nairobi is the capital city and a commercial center. It is situated 300 miles from the Coast and lies midway between the capitals of Uganda and Tanzania. It is the largest city in East Africa and houses two UN agencies, UNEP and Habitat.
                    </p>
                    <p className="mb-4">
                        Mombasa is Kenyas main port and a popular holiday city. It is situated on an island in a natural sheltered inlet. It is the only port that serves not only Kenya but land locked countries like Uganda, Rwanda and Burundi and Eastern Democratic Republic of Congo and Southern Sudan.
                    </p>
                    <p className="mb-4">
                        Kisumu is the Chief Port city on the shores of lake Victoria. It serves western Kenya, Uganda and Tanzania.
                    </p>
                    <p className="mb-4">
                        Nakuru is an agricultural and industrial town in the Rift Valley basin.
                    </p>
                    <p className="mb-4">
                        Eldoret lies on the main road and rail route to Uganda. It is mainly an agricultural town that serves wheat and Maize farmers from the North Rift
                    </p>
                </div>
                <p className="mt-4 font-bold text-2xl">Images of Nairobi</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <img src={Image1} alt="" />
                    <img src={Image2} alt="" />
                    <img src={Image3} alt="" />
                    <img src={Image4} alt="" />
                    <img src={Image5} alt="" />
                    <img src={Image6} alt="" />
                    <img src={Image7} alt="" />
                    <img src={Image8} alt="" />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default GeographyPage