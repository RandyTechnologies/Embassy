import { Footer } from "../../Components/Footer"
import { NavBar } from "../../Components/NavigationBar"

const MarriagePage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[#994F06]">
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <div>
            <p className="text-2xl lg:text-4xl  font-bold text-white text-center ">
              OTHER CONSULAR SERVICES
            </p>
          </div>

        </div>
      </div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <p className="py-4  font-bold">Link : <a className="underline text-[#994F06]" href="http://kenyaembassyberlin.de/fileadmin/user_upload/app_forms/CONIM.pdf">CERTIFICATE OF NO IMPEDIMENT TO MARRIAGE</a></p>
        <p className="py-4 font-bold text-xl">
          Marrying in Kenya
        </p>
        <p className="mb-4 mt-4">
          Parties wishing to conduct a marriage ceremony in Kenya are required to contact:
        </p>
        <p>
          The Registrar of Marriages
        </p>
        <p>
          Department of the Registrar General
        </p>
        <p>
          Po Box 30031
        </p>
        <p>Nairobi.</p>
        <p>Tel: +254 20 227 461</p>
        <p>Fax: +254 20 215651</p>
        <div className="mt-6">
          <p>
            Senior Assistant Registrar General
          </p>
          <p>PO Box 80366</p>
          <p>Mombasa.</p>
          <p>Tel: +254 41 316061/2</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MarriagePage