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
            {/* salads menu items */}
            <MenuCategory items={salads} img={saladImg} title="Salads" description="Discover a vibrant selection of salads that are as nutritious as they are delicious. Our salad menu offers a variety of fresh, crisp options that are perfect for a light lunch or a healthy start to your meal. From classic Caesar and Greek salads to inventive seasonal creations, each dish is prepared with the freshest ingredients, bursting with flavor and color. Whether you're looking for a simple green salad or a hearty entrée salad topped with proteins like grilled chicken or shrimp, our salads are crafted to satisfy your cravings while nourishing your body. Enjoy the perfect balance of taste and health with our delightful salads." />
            {/* pizzas menu items */}
            <MenuCategory items={pizza} img={pizzaImg} title="Pizza" description="Savor the taste of authentic, handcrafted pizzas made with passion and the finest ingredients. Our pizza menu features a diverse range of options, from classic Margherita and Pepperoni to gourmet creations like Truffle Mushroom and Prosciutto Arugula. Each pizza is baked to perfection with a crispy, golden crust and topped with fresh, high-quality ingredients that deliver an explosion of flavors in every bite. Whether you prefer a traditional favorite or an adventurous new combination, our pizzas are sure to satisfy your cravings. Enjoy a slice of heaven with our mouthwatering pizzas, perfect for sharing with friends and family." />
        </div>
    );
};

export default Menu;