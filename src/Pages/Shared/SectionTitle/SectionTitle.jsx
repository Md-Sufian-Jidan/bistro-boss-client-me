
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center max-w-2xl mx-auto my-5">
            <p className="text-yellow-500">{subHeading}</p>
            <p className="text-3xl p-4 border-y-4 my-3">{heading}</p>
        </div>
    );
};

export default SectionTitle;