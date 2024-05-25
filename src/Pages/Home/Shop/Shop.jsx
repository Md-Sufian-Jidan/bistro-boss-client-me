import Cover from "../../Shared/Cover/Cover";
import shop from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../../../Component/OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
// import ChefCard from "../ChefRecommend/ChefCard";

const Shop = () => {
    const [menu] = useMenu();
    const categories = ["salad", "pizza", "soups", "desserts", "drink"]
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    // console.log(initialIndex);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    // our shop order tab data
    const salads = menu?.filter(item => item.category === 'salad');
    const pizzas = menu?.filter(item => item.category === 'pizza');
    const soups = menu?.filter(item => item.category === 'soup');
    const desserts = menu?.filter(item => item.category === 'dessert');
    const drinks = menu?.filter(item => item.category === 'drinks');
    return (
        <>
            <Helmet>
                <title>Jj Restaurant | Order Now</title>
            </Helmet>
            <div>
                <Cover img={shop} title="Our Shop" description="Would you like to try a dish?" />
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className="flex justify-center items-center gap-5 my-5">
                        <TabList>
                            <Tab>salad</Tab>
                            <Tab>pizza</Tab>
                            <Tab>soup</Tab>
                            <Tab>dessert</Tab>
                            <Tab>drink</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <OrderTab items={salads} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzas} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks} />
                    </TabPanel>
                </Tabs>
            </div></>
    );
};

export default Shop;