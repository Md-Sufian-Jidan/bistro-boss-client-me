import Cover from "../../Shared/Cover/Cover";
import menuBanner from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import { Helmet } from "react-helmet";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
const Menu = () => {
    const { menu } = useMenu();
    const desserts = menu?.filter(item => item.category === 'dessert');
    const soups = menu?.filter(item => item.category === 'soup');
    const salads = menu?.filter(item => item.category === 'salad');
    const pizza = menu?.filter(item => item.category === 'pizza');
    const drinks = menu?.filter(item => item.category === 'drinks');
    const offered = menu?.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuBanner} title="Our Menu" description="Would you like to try a dish?" />
            <SectionTitle heading="Today's Offer" subHeading="---Don't miss---" />
            {/* offered menu items*/}
            <MenuCategory items={offered} />
            {/* dessert menu items */}
            <MenuCategory items={desserts} img={dessertImg} title="Desserts" description="Indulge in our delightful selection of desserts, each crafted to satisfy your sweet cravings. From rich, decadent cakes to light and refreshing sorbets, our dessert menu offers a variety of treats that are perfect for ending your meal on a high note. Whether you're a chocolate lover or a fan of fruity flavors, you'll find something to love in our dessert offerings. Treat yourself to a sweet escape with our irresistible desserts, made with the finest ingredients and a touch of love." />
            {/* soups menu items */}
            <MenuCategory items={soups} img={soupImg} title="Soups" description="Warm up with our comforting selection of soups, perfect for any season. Our soup menu features a variety of hearty and flavorful options, from classic favorites like creamy tomato bisque and rich French onion soup to exotic delights such as spicy Thai coconut soup. Each bowl is prepared with fresh, high-quality ingredients to bring out the best flavors and aromas. Whether you're looking for a light starter or a satisfying meal, our soups are crafted to provide the perfect balance of taste and nourishment. Enjoy a bowl of warmth and comfort with every sip." />
            {/* dessert menu items */}
            <MenuCategory items={soups} img={soupImg} title="Soups" description="Warm up with our comforting selection of soups, perfect for any season. Our soup menu features a variety of hearty and flavorful options, from classic favorites like creamy tomato bisque and rich French onion soup to exotic delights such as spicy Thai coconut soup. Each bowl is prepared with fresh, high-quality ingredients to bring out the best flavors and aromas. Whether you're looking for a light starter or a satisfying meal, our soups are crafted to provide the perfect balance of taste and nourishment. Enjoy a bowl of warmth and comfort with every sip." />
        </div>
    );
};

export default Menu;