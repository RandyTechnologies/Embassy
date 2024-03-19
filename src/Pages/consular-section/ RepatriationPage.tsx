import { NavBar } from '../../Components/NavigationBar'
import { Footer } from '../../Components/Footer'

const RepatriationPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center "> Repatriation of a Deceased Kenyan National</p>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <p className='text-lg lg:text-2xl font-bold my-4'>REQUIREMENTS FOR A REPATRIATION LETTER FROM THE EMBASSY</p>
                <p className='mb-4'>
                    The Embassy issues a Letter of conveyance free of charge, to enable the transportation of the remains of a deceased citizen of Kenya for burial.
                </p>
                <p className='mb-4'>
                    The following documents should be scanned and emailed to immigration@kenyaembassyberlin.de:
                </p>

                <p className='mb-4'>
                    1. International Death Certificate <br />
                    2. Copy of the deceased (Kenyan) Passport <br />
                    3. Corpse Transit Permit <br />
                    4. Embalming Certificate or Cremation Certificate <br />
                    6. Letter of Conveyance <br />
                    7. Letter from the family confirming that they will take care of the entire conveyance costs incurred <br />
                    8. For Non-Kenyans: Copy of the Kenyan Burial Permit
                </p>
                <p className='mb-4'>
                    The repatriation letter is issued and posted within 1 work day after receipt of the complete documents.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default RepatriationPage