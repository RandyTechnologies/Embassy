import { Footer } from '../../Components/Footer'
import { NavBar } from '../../Components/NavigationBar'

const GeographicalOriginPage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[#994F06]">
                <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div>
                        <p className="text-2xl lg:text-4xl  font-bold text-white text-center uppercase">Geographical Origin of Tourists to Kenya</p>
                    </div>

                </div>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-8 lg:h-screen">
                <p className='mb-4'>
                    For a long time Europe has maintained number one position as Kenya’s tourist source market. It constitutes about 60% of total arrivals. Africa is second with 23%, Americas 9% and Asia also 9%. At country level, the United Kingdom is the single largest source market followed by Germany, the USA and Italy respectively. The emerging source markets from the East include China, Japan and India.
                </p>
                <p>The emerging markets of eastern Europe and Asia are increasingly gaining significance as major origins.</p>
            </div>
            <Footer />
        </div>
    )
}

export default GeographicalOriginPage