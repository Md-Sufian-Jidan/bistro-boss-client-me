import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from 'prop-types'

const MenuCategory = ({ img, title, description, items }) => {
    return (
        <div className="my-5">
            {
                title &&
                <Cover img={img} title={title} description={description} />
            }
            <div className="grid md:grid-cols-2 gap-10 my-5">
                {
                    items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
            <Link to={`/shop/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button>
            </Link>
            </div>
        </div>
    );
};

MenuCategory.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,
}
export default MenuCategory;