import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"
import Image1 from "../../assets/images/bilateral-relations/IMAGE-1.jpeg"
import Image2 from "../../assets/images/bilateral-relations/IMAGE-2.jpeg"
import Image3 from "../../assets/images/bilateral-relations/IMAGE-3.jpeg"

const OfficialVisitsPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl text-center font-bold text-white uppercase">Official Visits</p>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <p className="my-8 text-3xl font-bold">H.E. President Uhuru Kenyatta's Visit to Germany</p>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
                    <VisitCard image={Image1} desc={"Photo: H.E. President Uhuru Kenyatta being received by Chancellor Angela Merkel at the Chancellery on 6th May, 2016.The President visited Germany from 6th to 8th May, 2016."} />
                    <VisitCard image={Image2} desc={"H.E. President Uhuru Kenyatta was received at the Berlin Tegel Airport by H.E. Amb. Joseph Magutt on 6th May, 2016. Also in the delegation was the Cabinet Secretary for Foreign Affairs, Amb. Amina Mohamed, among other dignitaries from Kenya."} />
                    <VisitCard image={Image3} desc={"PHOTO: From left, H.E. Amb. Andreas Peschke, Germany's Ambassador to Kenya; Amb. Amina Mohamed, Kenya's Cabinet Secretary for Foreign Affairs; Dr. Frank-Walter Steinmeier, Germany's Foreign Affairs Minister; and H.E. Amb. Joseph Magutt, Kenya's Ambassador to Germany in Nairobi in February 2015."} />
                </div>
                <p className="mt-8">Germany's Foreign Affairs Minister, Dr. Frank-Walter Steinmeier, visited Kenya from 21st to 22nd February, 2015, accompanied by a high-ranking business delegation from Germany.</p>
            </div>
            <Footer />
        </div>
    )
}

export default OfficialVisitsPage



interface VisitCardProps {
    image: string;
    desc: string
}


export const VisitCard = (props: VisitCardProps) => {
    return (
        <div>
            <div>
                <img src={props.image} alt="" />
                <p className="mt-2 lg:mt-4">{props.desc}</p>
            </div>
        </div>
    )
}
