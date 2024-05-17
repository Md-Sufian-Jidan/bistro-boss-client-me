import PropTypes from 'prop-types'

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center max-w-2xl mx-auto my-5">
            <p className="text-yellow-500">{subHeading}</p>
            <p className="text-3xl p-4 border-y-4 my-3">{heading}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}
export default SectionTitle;