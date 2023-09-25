import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { image, Card_bg, id, Category,Title } = card || {}
    console.log(Card_bg)
    return (
        <div>
            <Link to={`/details/${id}`}>
                <div className={`bg-[${Card_bg}] bg-opacity-[15%] rounded-md hover:cursor-pointer`}>
                    <img className="w-full" src={image} alt="Image" />
                    <h3 className={`my-2 bg-[#0052FF] ml-4 rounded-md mt-4 py-1 px-5 inline-block`}>{Category}</h3>
                    <p className="text-2xl ml-4 pb-4 font-semibold">{Title}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;