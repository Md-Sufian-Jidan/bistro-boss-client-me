import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from 'prop-types'

const MenuCategory = ({ img, title, description, items }) => {
    return (
        <div>
            {
                title && <Cover img={img} title={title} description={description} />
            }
            <div className="grid md:grid-cols-2 gap-10 my-5">
                {
                    items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

        </div>
    );
};

MenuCategory.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.object,
}
export default MenuCategory;