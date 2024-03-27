import { Footer } from "../Components/Footer"
import { NavBar } from "../Components/NavigationBar"

const ContactPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">Contact</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-8">
                <p className="text-xl font-bold text-[#994F06]">
                    Correspondences:
                </p>
                <p>
                    The Ambassador<br />
                    Embassy of the Republic of Kenya<br />
                    Rheinbabenallee 49 <br />
                    14199 Berlin <br />
                    Germany
                </p>
                <p className="mb-10">E-mail: <a className="text-[#994F06] hover:underline" href="javascript:linkTo_UnCryptMailto('nbjmup+pggjdfAlfozbfncbttzcfsmjo/ef');">office(at)kenyaembassyberlin.de</a></p>
                <p className="text-xl font-bold text-[#994F06]">
                    Consular Services
                </p>
                <p>
                    Landline Telephone:  +49-30-259 2 660 ( 9.00 -13.00 and 14.00 - 16.00 hrs. eTA and Consular extensions only reachable from 9.00 - 13.00 hrs)
                </p>
                <p>Email:</p>
                <p>eTA enquiries: <a className="text-[#994F06] hover:underline" href="javascript:linkTo_UnCryptMailto('nbjmup+wjtbAlfozbfncbttzcfsmjo/ef');">eta@kenyaembassyberlin.de</a></p>
                <p>Passport & other consular enquiries: <a className="text-[#994F06] hover:underline" href="javascript:linkTo_UnCryptMailto('nbjmup+jnnjhsbujpoAlfozbfncbttzcfsmjo/ef');">immigration2@kenyaembassyberlin.de</a></p>
                <p>Ambassador's Office: <a className="text-[#994F06] hover:underline" href="javascript:linkTo_UnCryptMailto('nbjmup+pggjdfAlfozbfncbttzcfsmjo/ef');">office(at)kenyaembassyberlin.de
                </a></p>

            </div>
            <Footer />
        </div>
    )
}

export default ContactPage