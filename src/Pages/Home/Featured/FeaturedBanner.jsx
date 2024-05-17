import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PropTypes from 'prop-types'
const FeaturedBanner = ({ featuredImg }) => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20" style={{ backgroundImage: `url(${featuredImg})` }}>
            <SectionTitle subHeading="Check it Out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-opacity-40 bg-gray-400">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-3">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where Can i get some?</p>
                    <p>Discover a symphony of flavors in every dish. Our menu offers a delectable selection of gourmet delights, from succulent appetizers to exquisite main courses and decadent desserts. Each plate is a masterpiece, meticulously crafted to tantalize your taste buds. Dive into our culinary offerings and savor the extraordinary today!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

FeaturedBanner.propTypes = {
    featuredImg: PropTypes.string
}
export default FeaturedBanner;