import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="mb-10 flex text-center justify-center items-center h-[80vh]">
            <Link to={'/'}>
            <h2>Page not found</h2>
            <button className="my-2 font-semibold rounded-md mt-4 py-2 bg-[#009444] text-white text-[16px] px-7">
                        Back to home
                    </button>
            </Link>
        </div>
    );
};

export default Error;