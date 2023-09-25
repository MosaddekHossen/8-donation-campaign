import { useEffect, useState } from "react";
import DonationSingle from "./DonationSingle";

const Donation = () => {
    const [donation, setDonation] = useState();
    const [noFound, setNofound] = useState();
    const [isShow, setIsShow] = useState(false);
    console.log(donation)


    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('donation'));
        if (donationItem) {
            setDonation(donationItem);
        }
        else {
            setNofound("No data found!");
        }
    }, [])

    return (
        <div>
            {
                noFound
                    ? <p className="h[80vh] flex justify-center items-center">{noFound}</p>
                    : <div>
                        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                isShow ? donation?.map(data => <DonationSingle key={data.id} donation={donation}></DonationSingle>)
                                    : donation?.slice(0, 4).map(data => <DonationSingle key={data.id} donation={donation}></DonationSingle>)
                            }
                        </div>
                    </div>
            }
            <div className=" mb-10 flex justify-center">
                {/* {
                    donation.length > 4 ? <button onClick={() => setIsShow(!isShow)} className="my-2 rounded-md mt-4 py-1 bg-[#218f4d] text-2xl px-5">
                        See All
                    </button> : ''
                } */}
            </div>

        </div>
    );
};

export default Donation;