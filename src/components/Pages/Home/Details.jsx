import { useLoaderData, useParams } from "react-router-dom";
import Detail from "./Detail";


const Details = () => {
    const getCard = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    const findCard = getCard.find(item => item.id === intId);

    return (
        <div>
            {
                <Detail key={findCard.id} findCard={findCard}></Detail>
            }
        </div>
    );
};

export default Details;