import type { FormCardType } from "../type"
import CardBack from "./CardBack"
import CardFront from "./CardFront"
interface CardItemProps {
    cardData: FormCardType
}

function CardItem({ cardData }: CardItemProps) {
    return (
        <div className="w-full h-full p-5
                        grid grid-cols-1 gap-5">
            <CardFront nameCard={cardData.nameCard} numberCard={cardData.numberCard} month={cardData.date.month} year={cardData.date.year} />
            <CardBack cardNumber={cardData.cvc} />
        </div>
    )
}

export default CardItem
