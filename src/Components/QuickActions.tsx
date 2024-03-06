
import Foreign from "../assets/images/quick-actions/Foreign.png"
import Bussiness from "../assets/images/quick-actions/Business.png"
import Passport from "../assets/images/quick-actions/Passport.png"

interface QuickActionsProps {
    image: string,
    title: string,
    link: string,
}

const QuickActions = (props: QuickActionsProps) => {
    return (
        <div className="relative">
            <img src={props.image} alt="" className="" />
            <p className="absolute text-white z-10 bottom-[5%] left-[5%] leading-none text-xl font-bold w-56">{props.title}</p>
        </div>
    )
}

export default QuickActions



export const QuickActionsComponent = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 py-6 lg:py-16">
            <QuickActions image={Foreign} title={"Ministry of Foreign Affairs"} link={""} />
            <QuickActions image={Bussiness} title={"Doing Business with Kenya"} link={""} />
            <QuickActions image={Passport} title={"E-Passport Application"} link={""} />
        </div>
    )
}
