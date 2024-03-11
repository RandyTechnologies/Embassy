import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const RecievingPassportAfterBiometricsPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl font-bold text-white uppercase">How to receive your passport after biometrics</p>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div>
                    <p className="font-bold text-xl lg:text-3xl">The information on this page is only intended for those who have already undergone the biometrics process at the Embassy.</p>
                    <p className="mb-4 font-bold pt-4">
                        You cannot receive a passport without first having your fingerprints and passport photo taken at the Embassy (the so-called biometrics process).
                    </p>
                    <p className="mb-4 font-bold">
                        Personal pickup service is currently not available. Only delivery via DHL courier!
                    </p>

                </div>
                <div>
                    <p className="text-2xl font-bold uppercase pt-4 pb-4">Applications from Germany</p>
                    <p className="mb-4 ">
                        Your epassport will be posted to you via DHL. Send the following to the Embassy via secured mail:
                    </p>
                    <p className="pb-2">1. Your current passport</p>
                    <p className="pb-2">2. A photocopy of the Photo Token receipt you received on the day of biometrics</p>
                    <p className="pb-2">3. For sending the passports back to you: 1 DHL EXPRESS DOMESTIC  End of Day shipping label  for Germany costing 19 Euros <a href="https://mydhl.express.dhl/de/en/shipment.html#/#address-details" className="underline text-[#994F06]">(click here to access it)</a>. Buy this exact shipping label online and ensure you have entered the shipping details FROM: Embassy/ TO: You.</p>
                    <p className="font-bold">SELECT EXPRESS ENVELOPE PACKAGING.  DO NOT SCHEDULE PICKUP AND PAY VIA THE ONLINE PAYMENT OPTIONS AVAILABLE</p>
                    <p className="pb-2">4. An A4-size padded envelope with the DHL shipping/transport label stuck on it.</p>
                    <p className="italics uppercase py-4">
                        PASSPORTS WILL NOT BE DISPATCHED TO CLIENTS USING ANY OTHER METHOD EXCEPT THROUGH DHL EXPRESS AS CLEARLY STATED.</p>
                    <p className="font-bold">
                        Insert all of the 4 items above into another envelope and send to the Embassy via DHL.
                    </p>
                </div>

                <div className="lg:pt-8">
                    <p className="text-2xl font-bold uppercase pt-4 pb-4">APPLICANTS FROM OUTSIDE GERMANY</p>
                    <p className="mb-4 ">
                        You should send the following to the Embassy via any courier service of your choice:
                    </p>
                    <p className="pb-2">1. Your current passport</p>
                    <p className="pb-2">2. A photocopy of the Photo Token receipt you received on the day of biometrics</p>
                    <p className="pb-2">3. For sending the passports back to you: 1 DHL EXPRESS DOMESTIC  End of Day shipping label  for your country <a href="https://www.dhl.de/en/privatkunden/pakete-versenden/online-frankieren.html?type=ShipmentEditorProductSelection" className="underline text-[#994F06]">(click here to access it)</a>. Buy this exact shipping label online and ensure you have entered the shipping details FROM: Embassy/ TO: You.</p>
                    <p className="font-bold">SELECT EXPRESS ENVELOPE PACKAGING.  DO NOT SCHEDULE PICKUP AND PAY VIA THE ONLINE PAYMENT OPTIONS AVAILABLE</p>
                    <p className="pb-2">4. An A4-size padded envelope with the DHL shipping/transport label stuck on it.</p>
                    <p className="font-bold pt-4">
                        Insert all of the 4 items above into another envelope and send to the Embassy via any courier service of your choice.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RecievingPassportAfterBiometricsPage