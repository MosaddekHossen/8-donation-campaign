import hooksCards from "../../Hooks/cards";
import Card from "./Card";

const Cards = () => {
    const [getCards] = hooksCards();
    return (
        <div className="max-w-7xl mx-auto py-24 px-8 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                getCards?.map(card => <Card key={card.id} card={card}></Card>)                
            }
            </div>
            
        </div>
    );
};

export default Cards;