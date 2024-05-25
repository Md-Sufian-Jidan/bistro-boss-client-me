import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ChefCard from "./ChefCard";

const ChefRecommends = () => {
    const [menu]  = useMenu();
    const chefsRecommends = menu?.filter(recommend => recommend.category === "popular")
    return (
        <div className="my-5">
            <SectionTitle heading="CHEF RECOMMENDS" subHeading="---Should Try---" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    chefsRecommends?.map(chef => <ChefCard key={chef._id} item={chef}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;