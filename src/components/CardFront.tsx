interface CardBackProps {
    numberCard: string;
    nameCard: string;
    month: string;
    year: string;
}
function CardFront({ numberCard, nameCard, month, year }: CardBackProps) {
    const formatDate = (number: string) => {
        if (number.length === 1) {
            return `0${number}`
        }
        return number
    }
    return (
        <div className='relative w-[80%] h-full 
                            bg-[url(./assets/images/bg-card-front.png)] bg-cover bg-no-repeat bg-center
                            rounded-[0.8rem] shadow-[0_0_15px_rgba(0,0,0,0.19)]'>
            <div className="absolute top-0 left-0 w-full h-full p-5">
                <div className="w-full h-full flex flex-col justify-between">
                    <img src="./assets/images/card-logo.svg" alt="logo" className="w-12 sm:w-18 h-auto" />
                    <div className="flex flex-col justify-between gap-3
                                    text-white">
                        <p className="text-[.9rem] sm:text-[1.2rem] tracking-[.25rem]">{numberCard ? numberCard : "0000 0000 0000 0000"}</p>
                        <div className="flex flex-row justify-between items-center
                                        text-[.65rem] sm:text-xs font-light sm:font-normal tracking-[.1rem]">
                            <p>{nameCard}</p>
                            <p>{month ? formatDate(month) : '00'}/{year ? formatDate(year) : "00"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFront
