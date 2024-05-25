import Cover from "../../Shared/Cover/Cover";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import homeCover from '../../../assets/home/banner.jpg'
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import CallUs from "../CallUs/CallUs";
import ChefRecommends from "../ChefRecommend/ChefRecommends";
import FeaturedBanner from "../Featured/FeaturedBanner";
import featureImg from '../../../assets/home/featured.jpg'
import Reviews from "../Reviews/Reviews";
import { Helmet } from "react-helmet";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Jj Restaurant | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <Cover img={homeCover} bgColor="#ffffff" title="Bistro Boss" description="Welcome to Bistro Boss, where culinary excellence meets cozy ambiance. Indulge in our chef's finest creations, crafted with the freshest ingredients. Join us for an unforgettable dining experience today!" />
            <FromOurMenu />
            <CallUs />
            <ChefRecommends />
            <FeaturedBanner featuredImg={featureImg} />
            <Reviews />
        </div>
    );
};

export default Home;