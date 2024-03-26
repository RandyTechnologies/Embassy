import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const GuidelinesForImportationPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">GUIDELINES (REVISED) FOR IMPORTATION OF DUTY FREE VEHICLES BY KENYAN RESIDENTS RETURNING FROM COUNTRIES THAT OPERATE LEFT HAND DRIVE VEHICLES</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="py-6">
                    <p className="font-bold mb-2 text-xl">
                        Importation procedure for Motor Vehicle.
                    </p>
                    <p className="font-bold mb-2">
                        What are some of the regulations for importing a car in Kenya?
                    </p>
                    <p className="mb-4">The vehicle must comply with the {" "}
                        <a href="https://kebs.org/index.php?option=com_content&view=article&id=87&Itemid=426" className="hover:underline text-[#994F06] italic">
                            Kenya Bureau of Standards requirements of Legal Notice No. 78 of 15th July 2005
                        </a> {" "}
                        (Verification of Conformity to Kenya Standards Imports Order, 2005) and KS1515:2000 Kenya Standard Code of Practice for Inspection of Road Vehicles. In Particular, The Imported Vehicle;
                    </p>
                    <li>Must be less than 8 years old form the year of first registration.</li>
                    <li>Will be subject to roadworthiness inspection by a KEBS appointed inspection agent in the country of expor</li>
                    <li>Must be Right Hand drive</li>
                    <p className="font-bold my-4 text-xl">
                        Taxes Applicable in Motor Vehicle Importation
                    </p>
                    <p className="mb-4">
                        The following taxes/duties are payable for motor vehicle imports based on customs value.
                    </p>
                    <p className="mb-4 font-bold italic">
                        Import Duty (25%)
                    </p>
                    <p className="mb-4 font-bold italic">
                        Excise Duty
                    </p>
                    <p className="mb-4">
                        his duty varies with vehicle category.
                    </p>
                    <li>
                        Private passenger vehicles of petrol engine whose engine capacity exceeds 2500cc (30%)
                    </li>
                    <li>
                        Private passenger vehicles of Diesel engine whose engine capacity exceeds 3000cc (30%)
                    </li>
                    <li>
                        All Other Vehicle Categories (20%)
                    </li>
                    <p className="my-4 font-bold italic">
                        Value Added Tax (14%)
                    </p>
                    <p className="my-4 font-bold italic">
                        mport Declaration Fees (2%)
                    </p>
                    <p className="my-4 font-bold italic">
                        Railway Development Levy (1.5%)
                    </p>
                    <p className="font-bold my-4 text-xl">
                        What documents are required?
                    </p>
                    <p className="mb-4">
                        Importation Supporting documents should be attached including but not limited to:
                    </p>
                    <li>
                        Original Commercial Invoice
                    </li>
                    <li>
                        Original Logbook from the country of importation that has been cancelled from the country of origin, as this will be required by National Transport and Safety Authority to give you an original Kenyan Log Book
                    </li>
                    <li>
                        Original Bill of lading
                    </li>
                    <li>
                        Pre-shipment inspection certificate. (certificate of road worthiness)
                    </li>
                    <li>
                        Copy of your PIN certificate/ Copy of certificate of Incorporation (applicable to companies)
                    </li>
                    <p className="my-4 font-bold">
                        Motor vehicle Importation Process
                    </p>
                    <p>
                        The motor vehicle Importation process is similar to that of other goods.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GuidelinesForImportationPage