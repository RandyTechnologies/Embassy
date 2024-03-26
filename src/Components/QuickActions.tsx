import Icon from "../assets/images/kenya_round_icon_640.png"
interface QuickActionsProps {
    image: string,
    title: string,
    link: string,
}

const QuickActions = (props: QuickActionsProps) => {
    return (
        <div className="font-bold py-4 px-6 border flex items-center">
            <img src={props.image} alt="" className="w-16" />
            <a href={props.link} className="hover:underline">{props.title}</a>
        </div>
    )
}

export default QuickActions



export const QuickActionsComponent = () => {
    return (
        <div className="pb-16 lg:pt-8">
            <div className="grid lg:grid-cols-2 lg:gap-4 gap-2">
                <QuickActions image={Icon} title={"Ministry of Foreign Affairs"} link={""} />
                <QuickActions image={Icon} title={"Doing Business with Kenya"} link={""} />
                <QuickActions image={Icon} title={"Epassport Application"} link={""} />
                <QuickActions image={Icon} title={"Application Downloads"} link={""} />
            </div>
        </div>
    )
}
