import PropTypes from 'prop-types';

const Cover = ({ img, title, description }) => {
    console.log(img);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-black bg-[#FFFFFF] py-20 px-36 rounded-lg">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-[#151515]">{title}</h1>
                    <p className="mb-5 text-[#151515]">{description}</p>
                </div>
            </div>
        </div>
    );
};
Cover.propTypes = {
    img: PropTypes.object,
    title: PropTypes.object,
    description: PropTypes.object,
};
export default Cover;