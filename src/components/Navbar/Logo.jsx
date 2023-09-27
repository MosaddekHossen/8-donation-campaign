import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to={'/'}>
                <img src="https://i.ibb.co/FX8CRd1/Logo.png" alt="Logo" />
            </Link>
        </div>
    );
};

export default Logo;