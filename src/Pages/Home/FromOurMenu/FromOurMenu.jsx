import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const FromOurMenu = () => {
    const { menu } = useMenu();
    const popularMenu = menu?.filter(item => item.category === "popular");

    return (
        <div className="my-5">
            <SectionTitle heading="From Our Menu" subHeading="--- check it out ---" />
            <div className="grid md:grid-cols-2 gap-10 my-5">
                {
                    popularMenu?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center my-5">
                <button className="btn btn-outline border-0 border-b-4">View Full  Menu</button>
            </div>
        </div>
    );
};

export default FromOurMenu;