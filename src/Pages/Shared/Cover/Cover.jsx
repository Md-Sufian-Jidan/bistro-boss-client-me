import PropTypes from 'prop-types';

const Cover = ({ img, title, description }) => {
    // bgColor
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            {/* bg-[${bgColor}] */}
            <div className={`hero-content text-center text-white bg-[#15151599] py-10 px-36 rounded-lg`}>
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">{description}</p>
                </div>
            </div>
        </div>
    );
};
Cover.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    // bgColor: PropTypes.string,
};
export default Cover;