import { Link } from "react-router-dom";

const DonationSingle = ({ data }) => {
    const { id, image, Title, Price, Category, text, bg } = data;
    return (
        <div>
            <div style={{
                backgroundColor: bg
            }} className={`relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md`}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h3 style={{
                        backgroundColor: bg,
                        color: text
                    }} className={`my-2 rounded-md mt-4 py-1 px-5 inline-block`}>{Category}</h3>
                    <h4 className="text-[24px] text-[#0B0B0B] font-semibold">
                        {Title}
                    </h4>
                    <h3 style={{
                        color: text
                    }} className={`text-[16px] font-semibold`}>{Price}</h3>
                    <a className="inline-block" href="#">
                        <Link to={`/details/${id}`}>
                            <button style={{
                                backgroundColor: text
                            }} className={`my-2 rounded-md mt-4 py-1 text-white text-2xl px-5 inline-block`}>
                                View Details
                            </button>
                        </Link>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonationSingle;