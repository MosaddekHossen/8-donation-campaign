
const Card = ({ card }) => {
    const { image,Card_bg } = card || {}
    return (
        <div>
            <div className="bg-red-200 rounded-md">
                <img className="w-full" src={image} alt="Image" />
                <button className="my-2 ml-4 rounded-md mt-4 py-1 bg-slate-600 px-5">Buy Now</button>
                <p className="text-2xl ml-4 pb-4 font-semibold">If a dog chews </p>
            </div>
        </div>
    );
};

export default Card;