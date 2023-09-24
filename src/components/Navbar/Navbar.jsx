import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between max-w-screen-xl mx-auto py-14 px-6 lg:px-0">
                <div className="w-[150px] md:w-auto">
                    <Logo></Logo>
                </div>
                <ul className="flex justify-center items-center md:text-[18px] text-[16px] text-[#0B0B0B] font-normal gap-3 md:gap-5">
                    <li>
                        <NavLink to='/'
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending'
                                    : isActive ? 'underline text-[16px] md:text-[18px] font-bold text-[#FF444A]' : ''}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/donation'
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending'
                                    : isActive ? 'underline text-[16px] md:text-[18px] font-bold text-[#FF444A]' : ''}
                        >Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/statistics'
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending'
                                    : isActive ? 'underline text-[16px] md:text-[18px] font-bold text-[#FF444A]' : ''}
                        >Statistics</NavLink>
                    </li>
                </ul>
            </nav >
        </>
    );
};

export default Navbar;