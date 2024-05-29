import { FaCartArrowDown, FaMoneyBill, FaPhoneVolume, FaStar, FaWallet } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import useCart from "../../../../Hooks/useCart";
import { FaBookJournalWhills, FaShop } from "react-icons/fa6";

const UserHome = () => {
    const { user } = useAuth();
    // console.log(user);
    const [carts] = useCart();
    return (
        <div>
            <h2 className="text-3xl">Hi, Welcome Back {user?.displayName}</h2>
            {/* user stat */}
            <div className="flex items-center justify-evenly gap-5 mt-5">
                <div className="bg-gradient-to-tr from-[#BB34F5] to-[#FCDBFF] w-full p-10 text-white">
                    <div className="flex items-center justify-center gap-3">
                        <FaWallet size={30} />
                        <div>
                            <p className="text-2xl">205</p>
                            <p className="text-xl">menu</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-tr from-[#D3A256] to-[#FDE8C0] w-full p-10 text-white">
                    <div className="flex items-center justify-center gap-3">
                        <FaShop size={30} />
                        <div>
                            <p className="text-2xl">103</p>
                            <p className="text-xl">shop</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-tr from-[#FE4880] to-[#FECDE9] w-full p-10 text-white">
                    <div className="flex items-center justify-center gap-3">
                        <FaPhoneVolume size={30} />
                        <div>
                            <p className="text-2xl">03</p>
                            <p className="text-xl">Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex my-5">
                <div className="lg:flex-1 bg-[#FFEDD5] p-10 flex flex-col items-center justify-center">
                    <div className="avatar">
                        <div className="w-36 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <p className="text-3xl">{user?.displayName}</p>
                </div>
                <div className="flex-1 bg-[#FEF9C3] p-10 flex flex-col items-center justify-center space-y-2">
                    <h2 className="text-4xl">Your Activities</h2>
                    <p className="text-xl flex items-center gap-1 text-blue-500"><FaCartArrowDown /> Orders : {carts?.length}</p>
                    <h2 className="text-xl flex items-center gap-1 text-green-500"><FaStar /> Reviews : 3</h2>
                    <h2 className="text-xl flex items-center gap-1 text-yellow-400"><FaBookJournalWhills /> Booking : 5</h2>
                    <h2 className="text-xl flex items-center gap-1 text-red-500"><FaMoneyBill /> Payment : </h2>
                </div>
            </div>
        </div>
    );
};

export default UserHome;