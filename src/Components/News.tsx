import News1 from "../assets/images/news/news1.svg"

interface NewsProps {
    title: string,
    date: string,
    img: string,
    link: string,
}

const News = (props: NewsProps) => {
    return (
        <div className="flex gap-2 items-start py-4">
            <div>
                <p className="text-lg font-bold leading-[130%]">{props.title}</p>
                <p className="text-sm text-gray-400">{props.date}</p>
            </div>
            <img src={props.img} alt="" />
        </div>
    )
}

export default News



export const NewsComponent = () => {
    return (
        <div>
            <News title={"Diplomacy - A Publication by the Ministry of Foreign..."} date={"19 Feb 2021"} img={News1} link={""} />
            <div className="w-full h-0.5 bg-slate-100"></div>
            <News title={"H.E. Amb. Tom Amolo message to the 5th President."} date={"19 Feb 2021"} img={News1} link={""} />
            <div className="w-full h-0.5 bg-slate-100"></div>
            <News title={"Accreditation of Amb. Tom Amolo as Ambassador Extra..."} date={"19 Feb 2021"} img={News1} link={""} />
            <div className="w-full h-0.5 bg-slate-100"></div>
            <News title={"German-Africa Prize 2020"} date={"19 Feb 2021"} img={News1} link={""} />
            <div className="w-full h-0.5 bg-slate-100"></div>
            <News title={"Amb. Mungai flags off 3 Solar Desalination Machines destined..."} date={"19 Feb 2021"} img={News1} link={""} />
        </div>
    )
}
