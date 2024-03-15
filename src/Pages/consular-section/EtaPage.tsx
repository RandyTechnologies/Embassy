import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const EtaPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center ">Electronic Travel Authorisation (eTA)</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <p className="py-4">There is a German version of the eTA homepage and FAQs: https://www.etakenya.go.ke/de</p>
                <p className="mb-4">
                    If you need help with your application, please email eTA at etakenya@immigration.go.ke or contact eTA by phone at +254 202 222 022. For urgent questions, please use the live chat to be connected to a customer service representative.
                </p>
                <p className="mb-4">
                    eTAs are approved 24/7 in Kenya, the embassy in Berlin can only answer general questions by phone or email to eta@kenyaembassyberlin.de.
                </p>
                <p className="mb-4">
                    Please also read the eTA FAQs (frequently asked questions) on the eTA website.
                </p>
                <p className="mb-4">
                    ALL already paid and issued eVisa are valid and allow entry to Kenya until their expiry date.
                </p>
                <p className="mb-4">
                    Please apply for an eTA for accompanying children under the age of 16 if you are in possession of an eVisa on which the children are indicated, as they are not shown on the visa.
                </p>
                <p className="mb-4">
                    You must enter the country within 90 days of the date of issue of the eTA. Upon entry, the border official will decide whether you are allowed to enter and how many days or months you are allowed to stay in Kenya. He will enter this Kenya Visitor's Pass (KVP) manually in your passport, e.g. KVP/1m/H (Kenya Visitor's Pass/1 month/Holiday). The Kenya Visitor's Pass can be extended online: https://immigration.go.ke/extension-of-visitors-pass-application/
                    Please make sure that the KVP has sufficient validity, if you are unsure, please ask the border official
                </p>
                <p className="mb-4">
                    Re-entry from Tanzania is possible.
                </p>
                <p className="mb-4">
                    Please switch off the automatic translation of the eTA website if the page "does not work", it works fine in English.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default EtaPage