import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PropTypes from 'prop-types'
const FeaturedBanner = ({featuredImg}) => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="Check it Out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-opacity-40 bg-gray-400">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-3">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where Can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae excepturi earum facilis ullam qui dicta quisquam voluptates cum a dolores, tempore quos, nihil similique reprehenderit est veritatis alias rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat porro, officiis eum natus explicabo maxime esse? Delectus, nemo. Nobis tempore odio a atque, voluptate ratione laborum porro assumenda enim id!
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

FeaturedBanner.propTypes = {
    featuredImg: PropTypes.object
}
export default FeaturedBanner;