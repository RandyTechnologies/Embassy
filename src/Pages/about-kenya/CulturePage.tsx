import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"
import CultureImage from "../../assets/images/page-images/Culture (1).png"

const CulturePage = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className="relative">
                <img src={CultureImage} alt="" className="-z-10 h-[200px] object-cover lg:h-auto w-full" />
                <div>
                    <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">The Culture</p>
                </div>
            </div>
            <section className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <p className="mb-4 mt-8">
                    Traditional African beliefs play a significant role in the lives of Kenyans in spite of adapting to modern values. Kenyans practice traditional values of humility, concern for neighbors and maintenance of kinship ties. Beliefs in superstition are not common except deep in the rural areas. On the other hand, there has been an explosive growth in the number of Christian churches and Islamic mosques.
                </p>
                <p className="mb-4">
                    There is wide appreciation of the importance of a modern education and most people speak English though with varying accents depending on ethnic origin. A typical visitor may be surprised at the contradiction in professing traditional and modern beliefs simultaneously. Several commentators have interpreted this characteristic of Kenyans as a lack of commitment to either beliefs. To the Kenyans, however, the two beliefs contain elements that compliment each other. Its not necessary for an individual to completely embrace modernity and abandon tradition, or vice-versa. What most people do (subconsciously) is to take the components from either set of beliefs that are relevant to their lives, and then combine them into a lifestyle.
                </p>
                <p className="mb-4">
                    Some communities have retained more of the traditional African lifestyle than others. They live in huts, walk barefoot, dress in robes and decorate their hair with colored soils. The Maasai tribe is famous for maintaining a nomadic way of life revolving around cattle and the search for pasture. This fiercely proud tribe of warriors has resisted numerous attempts at modernization and consequently has gained great respect (and curiosity) internationally.
                </p>
                <p className="mb-4">
                    A visit to the bustling cities, towns and villages of Kenya will be an eye opener to the determination of the people. Right from casual workers in sprawling industrial complexes to executives at the stock market and further onwards to the roadsides where men and women of all ages are earning a living for their families. Everyday has its fortunes: sometimes business is good, other times they walk home with nothing. Entrepreneurship is the locomotive engine behind these attributes of hard work and perseverance as Kenyans remain united in the quest for success and fulfillment.
                </p>
            </section>
            <Footer />
        </div>
    )
}

export default CulturePage