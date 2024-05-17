import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const FromOurMenu = () => {
    const { menu } = useMenu();
    return (
        <div>
            <SectionTitle heading="From Our Menu" subHeading="--- check it out ---" />
            <div>

            </div>
        </div>
    );
};

export default FromOurMenu;