// import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUtensilSpoon } from "react-icons/fa";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
// import useAuth from "../../../Hooks/useAuth";
// image hosting links
const VITE_IMAGE_HOSTING_KEY = import.meta.env.VITE_IMGBB_APIKEY;
const image_hosting_api = `${import.meta.env.VITE_IMGBB_URL}?key=${VITE_IMAGE_HOSTING_KEY}`;

const AddItems = () => {
    // const { loading} = useAuth();
    // use of react hook from
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    //custom disabled
    const [disabled, setDisabled] = useState(false);

    const onSubmit = async (data) => {
        setDisabled(true);
        // 1. select the image field 
        const image_file = { image: data.image[0] };
        console.log(image_file);
        //2. make a request to the imgbb
        const res = await axiosPublic.post(image_hosting_api, image_file, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const addItem = {
                name: data.recipeName,
                recipe: data.recipeDescription,
                image: res.data.data.display_url,
                price: parseFloat(data.recipePrice),
                category: data.category,
            };
            // console.log(addItem);
            await axiosSecure.post('/menu', addItem)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success(`${addItem.name} added to the menu`);
                        reset();
                    }
                })
        }
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
                                {errors.recipeName && <span className="text-red-500">Recipe Name is required</span>}
                            </div>

                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Category*</label>
                                    <select defaultValue="default" {...register("category", { required: true, maxLength: 20 })}
                                        name='category' id="" className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
                                        {/* {
                                            categories?.map(category => (
                                                <option value={category} key={category}>{category}</option>
                                            ))
                                        } */}
                                        <option disabled value="default">Select A Category <FaDownLeftAndUpRightToCenter /></option>
                                        <option value="salad">salad</option>
                                        <option value="pizza">pizza</option>
                                        <option value="soup">soup</option>
                                        <option value="dessert">dessert</option>
                                        <option value="drinks">drinks</option>
                                        {errors.categoryValue && <span className="text-red-500">Category is required</span>}

                                    </select>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Recipe Price*</label>
                                    <input {...register("recipePrice", { required: true })} id="password" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    {errors.recipePrice && <span className="text-red-500">Recipe Price is required</span>}
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Recipe Description</label>
                                <textarea {...register("recipeDescription", { required: true })} rows={5} id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                                {errors.recipeDescription && <span className="text-red-500">Recipe Description is required</span>}
                            </div>
                            <div className="mt-2">
                                <input {...register("image", { required: true, maxLength: 20 })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button disabled={disabled} type="submit" className="px-8 py-2.5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 flex items-center gap-2 btn">Add Menu <FaUtensilSpoon /></button>
                        </div>
                    </form>
                </section>
            </div>
        </div >
    );
};

export default AddItems;