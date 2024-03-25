import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const LegalizationOfDocumentsPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center ">Legalization of Documents</p>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <p className="my-4 font-bold text-2xl"> 1. LEGALIZATION OF GERMAN DOCUMENTS</p>
                <p className="mb-4">
                    Legalization is only done for documents that have been apostilled by German authorities  and are intended for use in Kenya. The normal processing time is 5 - 10 business days. You will be informed by the Embassy if your legalization is to take longer than the stated time-frame.
                </p>

                <div className="my-4">
                    <p className="mb-4 font-bold">
                        THESE ARE THE NECESSARY STEPS TO TAKE BEFORE SENDING THE DOCUMENTS TO THE EMBASSY:
                    </p>
                    <p>
                        (i) Have the original German document(s) officially translated into the English language by an sworn translator. (translation not necessary for passports) <br />
                        <div className="my-2"></div>
                        (ii) The (translated) document must be notarised by a German Notary Public (Notar) and then apostilled by a judge at the local administrative court. <br />
                        <div className="my-2"></div>
                        (iii) Business documents that have been certified by the Industrie- und Handelskammer (IHK) can be sent without the notarization or court apostille.<br />
                    </p>
                </div>
                <div className="my-4">
                    <p className="mt-6 mb-2 font-bold">
                        LEGALIZATION REQUIREMENTS
                    </p>
                    <p className="pb-2">Send the following to the Embassy:</p>
                    <p>
                        a) The original apostilled document/IHK certified document, <br />
                        <div className="my-2"></div>
                        b) A photocopy of a), <br />
                        <div className="my-2"></div>
                        c)A return DHL shipping label for returning the document and official receipt to the applicant. Obtain the lable by clicking {" "}
                        <a className="text-[#994F06] hover:underline" href="https://www.dhl.de/de/privatkunden/pakete-versenden/online-frankieren.html?type=ShipmentEditorProductSelection">
                            here</a> <br />
                        <div className="my-2"></div>
                        A bank transfer receipt of the legalization fee of Euros 26.00 for each original document with an Apostille payable only by bank transfer or EC-Debit card at the Embassy. Cash payments will not be accepted. Payments can be made to the Kenyan Embassy using the following details:
                    </p>
                    <p className="pl-4 mb-4">
                        Embassy of the Republic of Kenya <br />
                        Commerzbank Berlin <br />
                        IBAN: DE63 1004 0000 0266 0140 04 <br />
                        BIC:COBADEFFXXX <br />
                    </p>
                    <p>
                        For the bank transfer, please indicate your full name and in brief, the purpose for the payment, or services desired, attach a copy of the bank transfer form or Überweisungsbeleg to your application and post the documents to the Embassy.
                    </p>
                </div>
                <div className="mt-8">
                    <p className="my-4 font-bold text-2xl"> 2. SUPER-LEGALISATION OF KENYAN DOCUMENTS</p>
                    <p className="mb-4">
                        Super-legalisation or certification is only done for documents issued by Kenyan authorities. The documents must first be legalised by the Ministry of Foreign and Diaspora Affairs in Kenya after the necessary authentications
                        {" "} <a className="hover:underline text-[#994F06]" href="https://mfa.go.ke/authentication/">(https://mfa.go.ke/authentication/)</a>
                    </p>
                </div>
                <div className="my-4">
                    <p className="mb-4 font-bold">
                        THESE ARE THE NECESSARY STEPS TO TAKE BEFORE SENDING THE DOCUMENTS TO THE EMBASSY:
                    </p>
                    <p>
                        (i) Obtain the necessary authentication for your Kenyan document from the issuing authority/institution. <br />
                        <div className="my-2"></div>
                        (ii) Have the original Kenyan document(s) officially legalized by the Ministry of Foreign Affairs in Nairobi. <br />
                        <div className="my-2"></div>
                        (ii) Once you received the legalized documents back from the Ministry, send the following to the Embassy: <br />
                    </p>
                    <p>
                        a) The original document. <br />
                        <div className="my-2"></div>
                        b) The original Ministry of Foreign Affairs legalisation <br />
                        <div className="my-2"></div>
                        c) A photocopy (a) and (b) above, <br />
                        <div className="my-2"></div>
                        d) A return DHL shipping label for returning the document and official receipt to the applicant. Obtain the lable by clicking {" "}
                        <a className="text-[#994F06] hover:underline" href="https://www.dhl.de/de/privatkunden/pakete-versenden/online-frankieren.html?type=ShipmentEditorProductSelection">
                            here</a> <br /> {" "}
                        <div className="my-2"></div>
                        e) A bank transfer receipt of the legalization fee of Euros 26.00 for each page with a Ministry of Foreign Affair legalisation stamp. This fee is payable only by bank transfer to the Embassy. Cash payments will not be accepted.   Payments should be made to the Kenyan Embassy using the following details:
                    </p>
                    <p className="pl-4 mb-4">
                        Embassy of the Republic of Kenya <br />
                        Commerzbank Berlin <br />
                        IBAN: DE63 1004 0000 0266 0140 04 <br />
                        BIC:COBADEFFXXX <br />
                    </p>
                    <p className="my-4">
                        Please indicate your full name and in brief, the purpose for the payment then attach a copy of the bank transfer form or Überweisungsbeleg to your application and mail the same to the Embassy. This procedure will help us to serve you faster.
                    </p>
                    <p className="mb-4">
                        The normal processing time is 5 - 10 business days. You will be informed by the Embassy if it is to take longer than the stated time-frame.
                    </p>
                </div>
                <div className="mt-8">
                    <p className="mb-4 text-2xl font-bold">
                        3. LEGALISATION OF DOCUMENTS ISSUED BY POLAND OR THE CZECH REPUBLIC
                    </p>
                    <p className="mb-4">
                        Legalization is only done for documents that have first been legalised by your respective Ministry of Foreign Affairs and the legalisation confirmed by your respective Embassy in Berlin.
                    </p>
                    <p>
                        <a className="text-[#994F06] hover:underline" href="https://www.gov.pl/web/diplomacy/certification-of-documents"> i) For Poland click here </a> <br />
                        <div className="my-2"></div>
                        <a className="text-[#994F06] hover:underline" href="https://www.mzv.cz/jnp/en/about_the_ministry/location_and_contacts/public_inquiries.html"> ii) For Czech republic click here</a>
                    </p>
                    <div className="my-2"></div>
                    <p>
                        a) The original legalised document, <br />
                        <div className="my-2"></div>
                        b) A photocopy of a),<br />
                        <div className="my-2"></div>
                        c) A Verbal Note from the Polish/Czech Republic Embassy in Berlin with the sample signature of the legalising officer,<br />
                        <div className="my-2"></div>
                        d) A return DHL shipping label for returning the document and official receipt to the applicant. Obtain the lable by clicking {" "}
                        <a className="text-[#994F06] hover:underline" href="https://www.dhl.de/de/privatkunden/pakete-versenden/online-frankieren.html?type=ShipmentEditorProductSelection">
                            here</a> <br /> {" "}
                        <div className="my-2"></div>
                        e) A bank transfer receipt of the legalization fee of Euros 26.00 for each page with a Ministry of Foreign Affair legalisation stamp. This fee is payable only by bank transfer to the Embassy. Cash payments will not be accepted.   Payments should be made to the Kenyan Embassy using the following details:
                    </p>
                    <p className="pl-4 mb-4">
                        Embassy of the Republic of Kenya <br />
                        Commerzbank Berlin <br />
                        IBAN: DE63 1004 0000 0266 0140 04 <br />
                        BIC:COBADEFFXXX <br />
                    </p>
                    <p className="my-4">
                        Please indicate your full name and in brief, the purpose for the payment then attach a copy of the bank transfer form or Überweisungsbeleg to your application and mail the same to the Embassy. This procedure will help us to serve you faster.
                    </p>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LegalizationOfDocumentsPage