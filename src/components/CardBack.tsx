interface CardBackProps {
    cardNumber: string
}
function CardBack({ cardNumber }: CardBackProps) {
    return (
        <div className='relative w-[80%] h-full ml-auto
                            bg-[url(./assets/images/bg-card-back.png)] bg-cover bg-no-repeat bg-center
                            rounded-[0.8rem] shadow-[0_0_15px_rgba(0,0,0,0.19)]'>
            <p className="absolute top-1/2 right-10 transform -translate-y-1/2 
                            text-white text-[0.65rem] sm:text-xs tracking-[.1rem] ">
                {cardNumber ? cardNumber : "000"}
            </p>
        </div >
    )
}

export default CardBack
