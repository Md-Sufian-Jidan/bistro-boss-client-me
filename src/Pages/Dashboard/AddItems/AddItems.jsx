import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUtensilSpoon } from "react-icons/fa";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";

const AddItems = () => {
    const categories = ['salad', 'soup', 'pizza', 'dessert', 'drinks'];
    const [category, setCategory] = useState('');
    console.log(category);

    // use of react hook from
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const addItem = {
            recipeName: data.recipeName,
            category: data.categoryValue,
            recipePrice: data.recipePrice,
            recipeDescription: data.recipeDescription,
        };
        console.log(addItem);
    };


    return (
        <div>
            <div>
                <h2 className="text-2xl text-center font-bold mb-5">Add Menu</h2>
                {/* dark:bg-gray-800 */}
                <section className="max-w-4xl p-6 mx-auto bg-zinc-400 rounded-md shadow-md">
                    {/* <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2> */}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Recipe Name*</label>
                                <input {...register("recipeName", { required: true })} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                {errors.recipeName && <span className="text-red-500">This field is required</span>}
                            </div>

                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Category*</label>
                                    {/* <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" /> */}
                                    <select  {...register("categoryValue", { required: true })} name='category' id="" className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
                                        <option>Select Your category <FaDownLeftAndUpRightToCenter /> </option>
                                        {
                                            categories?.map(category => (
                                                <option key={category}>{category}</option>
                                            ))
                                        }
                                        {errors.categoryValue && <span className="text-red-500">This field is required</span>}

                                    </select>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Recipe Price*</label>
                                    <input {...register("recipePrice", { required: true })} id="password" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    {errors.recipePrice && <span className="text-red-500">This field is required</span>}
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Recipe Description</label>
                                <textarea {...register("recipeDescription", { required: true })} rows={5} id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                                {errors.recipeDescription && <span className="text-red-500">This field is required</span>}
                            </div>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 flex items-center gap-2">Add Menu <FaUtensilSpoon /></button>
                        </div>
                    </form>
                </section>
            </div>
        </div >
    );
};

export default AddItems;