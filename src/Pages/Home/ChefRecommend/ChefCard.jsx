import PropTypes from 'prop-types';

const ChefCard = ({ item }) => {
    const { image, name, recipe } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className="font-normal">{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 text-[#BB8506]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};
ChefCard.propTypes = {
    item: PropTypes.object
};
export default ChefCard;