import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { image, text, bg, id, Category, Title } = card || {}
    return (
        <div>
            <Link to={`/details/${id}`}>
                <div style={{
                    backgroundColor: bg
                }} className={`bg-opacity-[15%] rounded-md hover:cursor-pointer`}>
                    <img className="w-full" src={image} alt="Image" />
                    <h3 style={{
                        color: text,
                        backgroundColor: bg
                    }} className={`my-2 ml-4 rounded-md mt-4 py-1 px-5 inline-block`}>{Category}</h3>
                    <p style={{
                        color: text
                    }} className={`text-2xl ml-4 pb-4 font-semibold`}>{Title}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;