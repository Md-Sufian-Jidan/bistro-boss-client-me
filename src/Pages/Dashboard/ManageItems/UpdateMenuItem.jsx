import PropTypes from 'prop-types'
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
// import toast from 'react-hot-toast';
import { FaDownLeftAndUpRightToCenter } from 'react-icons/fa6';
import { FaUtensilSpoon } from 'react-icons/fa';
import Swal from 'sweetalert2/dist/sweetalert2.js'

// image hosting links
const VITE_IMAGE_HOSTING_KEY = import.meta.env.VITE_IMGBB_APIKEY;
const image_hosting_api = `${import.meta.env.VITE_IMGBB_URL}?key=${VITE_IMAGE_HOSTING_KEY}`;

const UpdateMenuItems = ({ setIsEditModalOpen, isOpen, food, setSingleMenu }) => {
    console.log(food);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    //custom disabled
    const [disabled, setDisabled] = useState(false);
    // close the modal 
    const handleCloseModal = () => {
        setSingleMenu(null);
        setIsEditModalOpen(false);
        reset();
    }
    // update a menu 
    const onSubmit = async (data) => {
        setDisabled(true);
        // 1. select the image field 
        const image_file = { image: data.image[0] };
        // console.log(image_file);
        //2. make a request to the imgbb
        const res = await axiosPublic.post(image_hosting_api, image_file, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const updateItem = {
                name: data.recipeName,
                recipe: data.recipeDescription,
                image: res.data.data.display_url,
                price: parseFloat(data.recipePrice),
                category: data.category,
            };
            // console.log(addItem);
            await axiosSecure.put(`update/menu/${food?._id}`, updateItem)
                .then(res => {
                    // console.log('full response 59',res);
                    // console.log(res.data);
                    if (res.data.matchedCount > 0) {
                        setIsEditModalOpen(false);
                        // toast.success(`${updateItem.name} Updated to the menu`);
                        Swal.fire({
                            position: "top-start",
                            icon: "success",
                            title: (`${updateItem.name} Updated to the menu`),
                            showConfirmButton: false,
                            timer: 1500
                        });
                        reset();
                    }
                })
        }
    };


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={() => setIsEditModalOpen(false)}
            >
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Update Menu Info
                                </DialogTitle>
                                <div className='mt-2 w-full'>{/* Update room form */}
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div>
                                            <div>
                                                <label className="text-purple-700 " htmlFor="username">Recipe Name*</label>
                                                <input defaultValue={food?.name} {...register("recipeName", { required: true })} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-indigo-500/70 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-purple-400 focus:ring-purple-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                {errors.recipeName && <span className="text-red-500">Recipe Name is required</span>}
                                            </div>

                                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                                <div>
                                                    <label className="text-purple-700" htmlFor="emailAddress">Category*</label>
                                                    <select defaultValue={food?.category} {...register("category", { required: true, maxLength: 20 })}
                                                        name='category' id="" className="w-full px-4 py-3 mt-2 text-indigo-500/70 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
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
                                                    <label className="text-purple-700" htmlFor="password">Recipe Price*</label>
                                                    <input defaultValue={food?.price} {...register("recipePrice", { required: true })} id="password" type="text" className="block w-full px-4 py-2 mt-2 text-indigo-500/70 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                    {errors.recipePrice && <span className="text-red-500">Recipe Price is required</span>}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-purple-700 " htmlFor="passwordConfirmation">Recipe Description</label>
                                                <textarea defaultValue={food?.recipe} {...register("recipeDescription", { required: true })} rows={5} id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-indigo-500/70 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                                                {errors.recipeDescription && <span className="text-red-500">Recipe Description is required</span>}
                                            </div>
                                            <div className="my-2">
                                                <div className='flex justify-center w-full my-2'>
                                                    <img className='h-24' alt="Menu Food Picture" src={food?.image} />
                                                </div>
                                                {/* required: true, */}
                                                <input {...register("image", { maxLength: 20 })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                                {/* {errors.image && <span className="text-red-500">Image field is required</span>} */}
                                            </div>
                                        </div>

                                        <div className="flex justify-center mt-6">
                                            <button disabled={disabled} type="submit" className="w-full px-8 py-2.5 text-white transition-colors duration-300 transform bg-purple-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 flex items-center gap-2 btn">Update Menu <FaUtensilSpoon /></button>
                                        </div>
                                    </form>


                                </div>
                                <hr className='mt-8 ' />
                                <div className='mt-2 flex justify-center mx-10'>
                                    {/* <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                                        onClick={() => setIsEditModalOpen(false)}
                                    >
                                        Update
                                    </button> */}
                                    <button
                                        type='button'
                                        className=' w-full inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                        onClick={() => handleCloseModal()}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

UpdateMenuItems.propTypes = {
    setIsEditModalOpen: PropTypes.func,
    isOpen: PropTypes.bool,
    food: PropTypes.object,
    setSingleMenu: PropTypes.object,
}

export default UpdateMenuItems;