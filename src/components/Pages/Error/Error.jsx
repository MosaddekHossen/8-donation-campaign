import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <Link to={'/'}>
            <h2>Page not found</h2>
            </Link>
        </div>
    );
};

export default Error;