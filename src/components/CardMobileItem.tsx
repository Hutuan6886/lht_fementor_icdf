import type { CardFormType } from "./Form"
import CardFront from "./CardFront"
import CardBack from "./CardBack"

interface CardMobileItemProps {
    cardData: CardFormType
}
function CardMobileItem({ cardData }: CardMobileItemProps) {
    return (
        <div className="relative w-full h-full">
            <div className="absolute top-0 right-0
                            w-full h-2/3">
                <CardBack cardNumber={cardData.cvc} />
            </div>
            <div className="absolute bottom-0 left-0
                            w-full h-2/3">
                <CardFront nameCard={cardData.nameCard} numberCard={cardData.numberCard} month={cardData.date.month} year={cardData.date.year} />
            </div>
        </div>
    )
}

export default CardMobileItem
