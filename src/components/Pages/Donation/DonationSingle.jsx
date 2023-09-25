import { Link } from "react-router-dom";

const DonationSingle = ({ data }) => {
    const { id, image, Title, Price, Category } = data;
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-sky-200 bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h3 className="my-2 rounded-md mt-4 py-1 bg-[purple] px-5 inline-block">{Category}</h3>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {Title}
                    </h4>
                    <h3>{Price}</h3>
                    <a className="inline-block" href="#">
                        <Link to={`/details/${id}`}>
                        <button className="my-2 rounded-md mt-4 py-1 bg-[aqua] text-2xl px-5 inline-block">
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