import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const FrequentlyAQs = () => {
    return (
        <div>
            <div>
                <NavBar />
                <div className="bg-[#994F06]">
                    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                        <div>
                            <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">FREQUENTLY ASKED QUESTIONS</p>
                        </div>

                    </div>
                </div>
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                    <div>
                        <p className="font-bold text-3xl uppercase">1. Passports</p>
                        <p className="font-bold text-md lg:text-xl py-4">a. My passport is no longer valid. What should I do?</p>
                        <p className="mb-4">
                            All passport applications must now be made online on the page of the Department of Immigration Services page on <span><a href="www.ecitizen.go.ke" className="text-[#994F06] underline">www.ecitizen.go.ke</a></span>
                        </p>
                        <p className="mb-4">
                            If you are 18 years and above, you must have a valid <a href="https://www.kenyahighcom.org.uk/kenyan-national-id#services" className="text-[#994F06]">Kenya National Identity Card (ID Card) </a> in order to register on eCitizen and be able to apply for a passport/ passport replacement. If you do not have an ID Card, you will have to obtain one before applying. The same applies for those applying for a passport for their children. The Kenyan parent must have a valid ID card in order to apply for the child's passport on the ecitizen portal.
                        </p>
                        <p className="mb-4">
                            Kindly note that the Embassy endeavours to assist all Kenyans in emergency situations. <span className="font-bold"> Kenya does not have an Emergency or Temporary Passport.</span> Those who wish to travel to Kenya but do not have a valid passport may be issued a one-way Emergency Travel Certificate, which will only be valid for entry to Kenya. You must produce proof of kenyan citizenship (Kenya passport or Kenya ID copy) to be elligible for a travel document. <span className="font-bold">Note that a birth certificate is not proof of Kenyan citizenship.</span>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">b. How can I apply for the replacement of my passport through the Embassy?</p>
                        <p className="mb-4">
                            As specified <span><a href="https://kenyaembassyberlin.de/Epassport-Application.69.0.html" className="text-[#994F06] underline">here</a></span>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">c. How long will it take for my passport to be ready?</p>
                        <p className="mb-4">
                            Epassports are printed in Kenya. Once you have succesfully sumitted your application and biometrics physically at the Embassy, your details are transfered digitally to the Department of Immigration for the necessary process of passport issuance. If all is clear, your passport should be ready within 4-6 weeks. You will receive a system-generated notification on the status of your application on your eCitizen account and an sms on the Kenyan number registered to your account.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">d. I have lost my passport what should I do?</p>
                        <p className="mb-4">
                            Find out from your local lost and found office if the passport was found and deposited there. You can also check at Embassy if your passport was found by writing an email to <span className="text-[#994F06] underline">immigration(at)kenyaembassyberlin.de</span>  . If your search remains futile, you will have to report the passport as lost at your nearest police station and then proceed to apply for the replacement of the passport in the prescribed manner.
                        </p>
                        <p className="mb-4">
                            Kindly note that a Kenyan passport remains property of the Kenyan government and should therefore be handled with care and kept safe under all circumstances. You are advised to only carry photocopies of your passport and your residence permit for identification purposes and keep your original passport in a safe place.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">e. I would like to apply for a first passport for my child. What should I do?</p>
                        <p className="mb-4">
                            Kenyan passport holders who hold a valid Kenya National Identity Card and those who gave birth to children while citizens of Kenya can apply for first passports for their children in the prescribed manner.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">f. I would like to apply for a new passport due to change of name. How should I go about it?</p>
                        <p className="mb-4">
                            All applications for change of name or any particulars should be made on eCitizen under 3. APPLICATION FOR CHANGE OF PARTICULARS. Ensure that you enter your new and not old name when filling in the online application form.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">g. Why do I need a recommender?</p>
                        <p className="mb-4">
                            All passport applications must be recommended by a Kenyan ID holder who is not related to the applicant. He or she must sign the recommender´s section and then give you a copies of the front and back of his/her Kenyan ID. There is no exception to this requirement. The recommender can be based anywhere in the world.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">h. Should I bring my application personally to the Embassy?</p>
                        <p className="mb-4">
                            Yes all ePassport applications must be submitted personally and the applicant be present for biometrics capture. Ensure that you have booked an appointment online and have all the required application documents with you, duly filled and arranged to avoid unnecessary delays.Epassport applications CANNOT be processed by post.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">i. I do not have a passport and have no other documents except a birth certificate. How can I obtain a passport?</p>
                        <p className="mb-4">
                            A birth certificate is not proof of Kenyan citizenship or Kenyan identity. If you have held a Kenyan passport before and are able to provide the original birth certificate with the official immigration stamp and your previous passport details, upon being interviewed and determined to be a Kenya, you can apply for a one-way Emergency Travel Document to travel to Kenya. You can then follow the necessary channels of acquiring identity documents.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">j. I have been sent by the Ausländerbehörde to come to the Embassy to apply for a passport and need a letter to prove that I was here</p>
                        <p className="mb-4">
                            The Ausländerbehörde does not send one to present him or herself to the Embassy. One is sent to apply for a passport or a travel document. The Embassy does NOT issue any letters to any individual as proof that they were at the Embassy. Epassport applicants who have successfully submitted their application at the Embassy will be issued a Token receipt of their application as proof of having successfully gone through the epassport application process and are awaiting a passport.
                        </p>
                    </div>

                    <div className="pt-6">
                        <p className="font-bold text-3xl uppercase">2. Visas</p>
                        <p className="font-bold text-md lg:text-xl py-4">a. Do I need a visa for Kenya? Where can I get the visa?</p>
                        <p className="mb-4">
                            As from 01.01.2021, all visa applications must be made on the official government website <span><a href="http://www.evisa.go.ke/" className="text-[#994F06] underline">www.evisa.go.ke</a></span>
                        </p>
                        <p className="mb-4">
                            Find out if you require a visa to enter Kenya <a href="http://www.evisa.go.ke/" className="underline text-[#994F06]">here</a>
                        </p>
                        <p className="mb-4">
                            Kenya issues visas under the following categories:
                        </p>
                        <li className="mb-4">
                            <a href="http://evisa.go.ke/single-entry-visa.html" className="font-semibold text-[#994F06]">Single Entry Visa for Kenya: </a>
                            <span>
                                Holders of passports from the following countries: Afghanistan, Armenia, Azerbaijan, Democratic Republic of Korea (Formerly N.Korea), Eritrea, Iraq, Jordan, Kosovo, Lebanon, Palestine, Somalia, Syria, Tajikistan, Yemen, as well as Refugee and EU Travel Documents require a Referred Visa and the processing period is at least 4 weeks.
                            </span>
                        </li>
                        <li className="mb-4">
                            <a href="http://evisa.go.ke/courtesy-visa.html" className="font-semibold text-[#994F06]">Courtesy/Diplomatic Visa</a>
                        </li>
                        <li className="mb-4">
                            <a href="http://evisa.go.ke/multiple-entry-visa.html" className="font-semibold text-[#994F06]">Multiple Entry Visa </a> (Only for frequent trips in a calender year)
                        </li>
                        <li className="mb-4">
                            <a href="http://evisa.go.ke/transit-visa.html" className="font-semibold text-[#994F06]">Transit Visa </a>
                        </li>
                        <li className="mb-4">
                            <a href="http://evisa.go.ke/5yr-multiple-entry-visa.html" className="font-semibold text-[#994F06]">5 Year Multiple Entry Visa for USA citizens only</a>
                        </li>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">b. How long does it take to process  visa?</p>
                        <li className="mb-4">
                            Single journey visa, East Africa Visa and Transit Visa applications once submitted online are issued within 5 working days.
                        </li>
                        <li>
                            Referred Visa and Multiple Journey Visa applications cases may take up to 6 weeks to get approval/rejection.
                        </li>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">c. Do I need a Multiple Entry Visa if I wish to re-enter Kenya after travelling to another country?</p>
                        <p className="mb-4">
                            You can use the same visa to re-enter Kenya from Tanzania or Uganda within the validity period of your Kenyan stay. If you however re-entering from any other country, you will need to apply for a visa again.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">d. I am travelling to Kenya to work as an intern/volunteer or take up employment. What kind of visa do I need?</p>
                        <p className="mb-4">
                            You will need a normal Single Journey Visa to enter Kenya but have to apply for and be issued the necessary permits/passes before commencing your work in Kenya. The permits/passes have to be applied for directly at the Department of Immigration in Nairobi through the website <span className="underline text-[#994F06]">www.fns.immigration.go.ke</span>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">e. I am a frequent traveller. Can I get a Multiple Journey Visa?</p>
                        <p className="mb-4">
                            If travelling often for business purposes or family visit, you can apply for an MJV .
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">f. Can I get a Visa on arrival in Kenya?</p>
                        <p className="mb-4">
                            No. Visa on arrival is no longer possible since 01.01.2021.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">g. I applied for an evisa and haven't received it</p>
                        <p className="mb-4">
                            Log into you evisa account and download the evisa directly from there. If your status reads processing after 7 days, check if you have to make any correction and re-submit your application.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">h. I cannot log into my evisa account</p>
                        <p className="mb-4">
                            Contact <span className="text-[#994F06] underline">support(at)ecitizen.go.ke</span>
                        </p>
                    </div>

                    <div className="pt-6">
                        <p className="font-bold text-3xl">3. RENUNCIATION OF KENYAN CITIZENSHIP</p>
                        <p className="font-bold text-md lg:text-xl py-4">a. I have to give up my Kenyan citizenship. What should I do?</p>
                        <p className="mb-4">
                        </p>
                        <p className="mb-4">
                            If you have been naturalised or have received the assurance of naturalisation upon renouncing your Kenyan citizenship, you can apply for renunciation through the Embassy. The application form and requirements are available <a href="http://kenyaembassyberlin.de/fileadmin/user_upload/app_forms/RENUNCIATION_2020.pdf" className="text-[#994F06]">here</a>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">b. How long does it take?</p>
                        <p className="mb-4">
                            The Embassy forwards your application to the Citizenship Department at the Department of Immigration in Kenya for the processing and issuance of the renunciation certificate. Due to the processes involved, a renunciation can take up to 2 years to be finalised depending on each individual's immigration background check. One cannot influence the process and has to wait until due process is followed and the certificate issued.
                        </p>
                        <p className="mb-4">
                            Kindly note that according to Part III, 19 (2) a and b of the Kenya Citizenship and Immigration Act of 2011, the Cabinet Secretary cannot register a renunciation application until fully satisfied that the applicant's identity and residence has been established and the applicant is fully aware of the implication of being renounced. The Citizenship Department must therefore carry out meticulous research into the background of each applicant according to the law.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">c. How can I identify myself or travel if I surrender my passport as I wait for the certificate?</p>
                        <p className="mb-4">
                            You can request in writing to retain you passport as the process goes on. The information is available on the checklist of requirements.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">d. Will I get my passport (and ID) back when I have renounced?</p>
                        <p className="mb-4">
                            No the Embassy will withdraw and cancel your passport and ID after you have been officially renounced.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">e. The German authorities naturalised me and withdrew my passport before I renounced. What should I do?</p>
                        <p className="mb-4">
                            Contact the Embassy to find out if your passport was forwarded by the German authorities by sending an email to <a href="http://immigration.go.ke/" className="text-[#994F06] underline">immigration@kenyaembassyberlin.de</a>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">f. Kenya allows dual citizenship. Why must I give up my Kenyan citizenship?</p>
                        <p className="mb-4">
                            You are renouncing upon the behest of the German government. Kindly engage your local German authority on that matter.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">g. Can I regain the Kenyan citizenship later?</p>
                        <p className="mb-4">
                            If issued a Beibehaltungsgenehmigung by the German authorities, you can apply to regain your Kenyan citizenship. Kindly engage your local German authorities for the procedure to get the Beibehaltungsgenehmigung.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">h. We are renouncing as a family. Should I also apply for my under 18 year old child?</p>
                        <p className="mb-4">
                            Children under 18 cannot renounce their citizenship. You can therefore not apply for them when applying for yourself, attach a letter requesting a confirmation from the Embassy that your child cannot renounce until 18 and attach copies of his/her passport and birth certificate.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">i. Do I need to have the ePassport to renounce?</p>
                        <p className="mb-4">
                            No it is not a requirement unless your manual passport expired before you made the naturalisation application and the German authorities require you to have a valid passport before accepting your application. If you do not have an ePassport and have already been issued the Einbürgerungszusicheriung, you may renounce using your manual passport.
                        </p>
                    </div>


                    <div className="pt-6">
                        <p className="font-bold text-3xl">4. EMERGENCY TRAVEL DOCUMENT</p>
                        <p className="font-bold text-md lg:text-xl py-4">How long does it take to have an Emergency Travel Document issued and what are the requirements?</p>
                        <p className="mb-4">
                            It is issued during the working hours of the Consular Section after and you have booked an appointment. The appointment should be booked 2 weeks before the intended date of travel. The earliest date of issue of the travel document is 3 working days prior to the date of travel. The applicant has to personally appear at the Embassy in Berlin and bring 2 biometric passport photos, copies of all the official pages of his/her Kenyan passport and/or the front and back side of his/her Kenya National Identity Card and the flight booking. For lost passports, a police report must also be produced. For children, an international birth certificate must be produced.
                        </p>
                    </div>
                    <div className="pt-6">
                        <p className="font-bold text-3xl">5. MARRIAGES</p>
                        <p className="font-bold text-md lg:text-xl py-4">a. I wish to marry/get married and have been told to contact the Embassy</p>
                        <p className="mb-4">
                            You will need to apply for a Certificate of No Impediment to Marriage. The application form and requirements are available <a href="http://kenyaembassyberlin.de/fileadmin/user_upload/app_forms/CONIM_2020.pdf" className="text-[#994F06] underline">here</a>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">b. How long will the process take?</p>
                        <p className="mb-4">
                            The application is forwarded to the Registrar of Marriages in Nairobi Kenya and might take up to 3 months or more. You are therefore urged to apply early enough
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-md lg:text-xl py-4">c. Can I marry/get married or register my marriage at the Embassy</p>
                        <p className="mb-4">
                            No. The Embassy has not been gazetted by the Registrar of Marriages to register or conduct marriages.
                        </p>
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default FrequentlyAQs