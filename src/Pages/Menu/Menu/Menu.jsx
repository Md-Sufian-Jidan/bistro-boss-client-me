import Cover from "../../Shared/Cover/Cover";
import menuBanner from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
const Menu = () => {
    const {menu} = useMenu();
    return (
        <div>
            <Cover img={menuBanner} title="Our Menu" description="Would you like to try a dish?" />
            <SectionTitle heading="Today's Offer" subHeading="---Don't miss---" />
        </div>
    );
};

export default Menu;