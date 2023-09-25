import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";
import hooksCards from "../../Hooks/cards";


const Details = () => {
    const [card, setCard] = useState();
    const [getCard] = hooksCards();
    const { id } = useParams();
    console.log(getCard)

    useEffect(() => {
        const findCard = getCard?.find(item => item.id === id);
        setCard(findCard);
    }, [])

    return (
        <div>
        {card ? (
            <Detail key={card.id} card={card}></Detail>
        ) : (
            <p>Loading...</p>
        )}
    </div>
    );
};

export default Details;


// const Details = () => {
//     const [card, setCard] = useState(null); // Initialize card state
//     const [getCard] = hooksCards();
//     const { id } = useParams();
//     console.log(getCard);

//     useEffect(() => {
//         // Use the id and getCard in the dependency array
//         const findCard = getCard?.find(item => item.id === id);
//         setCard(findCard);
//     }, [id, getCard]); // Include id and getCard in the dependency array

//     return (
//         <div>
//             {card ? (
//                 <Detail key={card.id} card={card}></Detail>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default Details;
