import Swal from "sweetalert2";

const Detail = ({ findCard }) => {
    const { id, image, Title, Description, Price } = findCard;
    const handleAddDonation = () => {
        const addDonationArray = [];
        const donationItem = JSON.parse(localStorage.getItem('donation'));
        if (!donationItem) {
            addDonationArray.push(findCard);
            localStorage.setItem('donation', JSON.stringify(addDonationArray));
            Swal.fire(
                'Good job!',
                'Your donation successfully!',
                'success'
            )
        }
        else {
            const isExist = donationItem.find(item => item.id === id)
            if (!isExist) {
                addDonationArray.push(...donationItem, findCard);
                localStorage.setItem('donation', JSON.stringify(addDonationArray));
                Swal.fire(
                    'Good job!',
                    'Your donation successfully!',
                    'success'
                )
            }
            else {
                Swal.fire(
                    'Oops!',
                    'Already exist!',
                    'error'
                )
            }
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-8 lg:px-0 pb-20">
            <div className="relative">
                <img className="w-full h-[80vh] rounded-lg" src={image} alt="" />
                <div className="bg-[#0B0B0B80] absolute w-full bottom-0 pl-8 py-4">
                    <button onClick={handleAddDonation} className="bg-[#FF444A] text-xl font-semibold text-white px-5 py-3 rounded-lg">Donate {Price}</button>
                </div>
            </div>
            <h1 className="text-[#0B0B0B] text-[28px] md:text-[38px] lg:text-[48px] font-bold mb-2">{Title}</h1>
            <p>{Description}</p>
        </div>
    );
};

export default Detail;