import ChefCard from "../../Pages/Home/ChefRecommend/ChefCard";
import PropTypes from 'prop-types'
const OrderTab = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
                {
                    items?.map(item => <ChefCard key={item._id} item={item}></ChefCard>)
                }
            </div>
        </div>
    );
};
OrderTab.propTypes = {
    items: PropTypes.object
}

export default OrderTab;