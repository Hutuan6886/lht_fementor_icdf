import CardItem from "./CardItem"
import { useFormValueStore } from "../store/useFormValueStore"
import { useWindowWidth } from "../hooks/useWindowSize"
import CardMobileItem from "./CardMobileItem"

import bgImage from "/src/assets/images/bg-main-desktop.png"

function Card() {
    const windowWidth = useWindowWidth()
    const { formData } = useFormValueStore()
    return (
        <div className="relative w-full h-[18.75rem] sm:h-full
                        grid grid-row-4 sm:grid-cols-3">
            <div style={{ backgroundImage: `url(${bgImage})` }} className='row-span-3 sm:col-span-2 
                            w-full h-full 
                            bg-cover bg-center bg-no-repeat'></div>
            <div className="row-span-1 sm:col-span-1
                            w-full h-full bg-white"></div>
            <div className="absolute sm:top-1/2 sm:right-10 sm:transform sm:-translate-y-1/2
                            sm:w-[29rem] sm:h-[26rem]
                            top-5 left-1/2 -translate-x-1/2 w-[95%] h-[90%] 
                            ">
                {windowWidth && windowWidth > 640
                    ? <CardItem cardData={formData} />
                    : <CardMobileItem cardData={formData} />}
            </div>
        </div>
    )
}

export default Card
