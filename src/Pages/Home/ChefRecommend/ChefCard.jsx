import PropTypes from 'prop-types';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';

const ChefCard = ({ item }) => {
    const { image, name, recipe, _id, price } = item;
    const [, refetch] = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    
    const handleAddToCart = () => {
        // console.log('add the item to db', food);
        if (user && user.email) {
            // cart item send to the database
            const cardItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            };
            axiosSecure.post('/carts', cardItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success(`${name} is added to cart`);
                        refetch();
                    }
                });
        }
        else {
            Swal.fire({
                title: "You are not logged In!",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then(() => {
                navigate('/login')
            });
        }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className="font-normal">{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart()} className="btn btn-outline border-0 border-b-4 text-[#BB8506]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};
ChefCard.propTypes = {
    item: PropTypes.object
};
export default ChefCard;