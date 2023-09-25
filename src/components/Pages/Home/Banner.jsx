import './Style.css';

const Banner = () => {
    return (
        <>
            <div className='overlay top-0 0 w-full -z-10 h-[100vh] text-center flex justify-center items-center'>
                <h1 className='text-[#0B0B0B] text-[28px] md:text-[38px] lg:text-[48px] font-bold mb-28'>I Grow By Helping People In Need</h1>
                <div className="absolute md:w-1/3 w-1/2 top-1/2 md:left-1/3">
                    <form>
                        <input type="search" id="search" className="block w-full p-4 border rounded-lg bg-gray-50" placeholder="Search here...." required />
                        <button type="submit" className="text-white absolute right-0 bottom-[3px] bg-[#FF444A] hover:bg-blue-800 font-medium rounded-lg text-sm px-3 md:px-8 py-4">Search</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Banner;