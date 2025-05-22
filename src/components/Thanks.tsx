import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "../hooks/useWindowSize";

function Thanks() {
    const navigate = useNavigate();
    const windowWidth = useWindowWidth()
    return (
        <div className="relative w-full h-full my-10 sm:p-10">
            <div className={`absolute ${windowWidth && windowWidth > 640 ? 'top-1/2 transform -translate-y-1/2' : 'top-0 left-1/2 transform -translate-x-1/2'}
                                        w-[60%] h-auto
                                        flex flex-col items-center gap-6 justify-start`}>
                <img src="./assets/images/icon-complete.svg" alt="icon-complete" className="size-15" />
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-[1.2rem] tracking-[0.2rem]">THANK YOU!</h1>
                    <p className="text-[0.85rem] text-gray-400">We've added your card details</p>
                </div>
                <button type="button" className="w-full px-3 py-[0.6rem] 
                                rounded-[0.3rem] cursor-pointer
                                 bg-[#21092F] text-white text-[0.9rem] tracking-[.05rem]" onClick={() => navigate('/')}>Continue</button>
            </div>
        </div>
    )
}

export default Thanks
