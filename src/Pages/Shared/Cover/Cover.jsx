import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    // bgColor
    return (
        <Parallax
            blur={{ min: -50, max: 30 }}
            bgImage={img}
            bgImageAlt="banner img"
            strength={-500}
        >
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                {/* bg-[${bgColor}] */}
                <div className={`hero-content text-center text-white bg-[#15151599] py-10 px-36 rounded-lg`}>
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};
Cover.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    // bgColor: PropTypes.string,
};
export default Cover;