import Cover from "../../Shared/Cover/Cover";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import homeCover from '../../../assets/home/banner.jpg'
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import CallUs from "../CallUs/CallUs";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Cover img={homeCover} title="Bistro Boss" description="Welcome to Bistro Boss, where culinary excellence meets cozy ambiance. Indulge in our chef's finest creations, crafted with the freshest ingredients. Join us for an unforgettable dining experience today!" />
            <FromOurMenu />
            <CallUs />
        </div>
    );
};

export default Home;