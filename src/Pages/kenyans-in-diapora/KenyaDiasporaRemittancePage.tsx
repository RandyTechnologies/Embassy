import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const KenyaDiasporaRemittancePage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">Kenya Diaspora Remittances Survey</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <p className="my-4">
                    The Central Bank of Kenya in collaboration with the Kenya National Bureau of Statistics and Ministry of Foreign Affairs is conducting an online survey on Kenyans living abroad. The survey will be conducted from 19th March to 17th May 2021.
                </p>
                <p className="mb-4">
                    The main objective of the survey is to collect valuable information to improve the quality of remittance statistics and guide policy on harnessing remittances for economic development, and address challenges facing remitters.
                </p>
                <p className="mb-4">
                    The survey will focus on the efficiency and cost of remittance channels, the difficulties encountered in remitting cash or non-cash transfers, the use of remittances received and the availability of information on investment opportunities in Kenya. Your responses to this survey will help address these issues and will be highly beneficial.
                </p>
                <p className="mb-4">
                    It is important to note that the survey respondents will remain anonymous and the data provided will be treated with utmost confidentiality, will not be used by third parties, and the resultant reports will only have aggregated data.
                </p>
                <p className="mb-4">
                    You are invited to participate in this brief online survey on remittances that will take about 15 minutes of your time to complete.
                </p>

                <p className=" font-bold text-lg py-6">
                    DATA PROTECTION POLICY
                </p>
                <p className="mb-4">
                    The Central Bank of Kenya strictly adheres to the data protection principles of privacy, fairness and transparency, legitimacy, relevance and accuracy as stipulated in the Data Protection Act.
                </p>
                <a href="http://kenyalaw.org/kl/fileadmin/pdfdownloads/Acts/2019/TheDataProtectionAct__No24of2019.pdf" className="hover:underline text-[#994F06] py-4">The Data Protection Act No. 24 of 2019</a>
                <p className="my-4">
                    Should you have any questions or comments, please contact the Central Bank of Kenya on:
                </p>
                <p className="mb-4">
                    Tel: +254 20 286 0000 <br />
                    Email: remittancesurvey@centralbank.go.ke
                </p>
                <p className="mb-4">
                    We appreciate your participation in this survey.
                </p>
                <a href="https://www.surveymonkey.com/r/DiasporaRemittancesSurvey" className="hover:underline text-[#994F06]"> Click here to start the survey</a>
            </div>
            <Footer />
        </div>
    )
}

export default KenyaDiasporaRemittancePage