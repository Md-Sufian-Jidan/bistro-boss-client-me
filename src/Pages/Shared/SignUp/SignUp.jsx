import { Link, useNavigate } from 'react-router-dom';
import signUp from '../../../assets/others/authentication.gif'
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { imageUpload } from '../../../Utils/imgUpload';
import { Helmet } from 'react-helmet';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
// import sign from '../../../assets/others/authentication1.png'

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile, } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const image = data.image[0];
        console.log(name, password, email, image);
        const img_url = await imageUpload(image);
        console.log(img_url);
        createUser(email, password)
            .then((res) => {
                console.log(res.user);
                // TODO : save a user data in db
                const userInfo = {
                    email: res?.user?.email,
                    name: res?.user?.displayName,
                };

                axiosPublic.post('/users', userInfo)
                    .then((res) => {
                        console.log(res.data);
                    })
                updateUserProfile(name, img_url)
                    .then((res) => {
                        console.log(res);
                        navigate('/'); // fix this before deploying your project
                        toast.success('User Created Successfully');
                    })

                    .catch(err => {
                        toast.error(`${err.message}`)
                        console.log(err);
                    })
            })
    }
    return (
        <div>
            <Helmet>
                <title>Jj Restaurant | Sign Up page</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={signUp} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label block mb-2 text-sm">
                                    Photo
                                </label>
                                {/* <input required type='file' id='image' name='image' accept='image/*'/> */}
                                <input {...register("image")} type="file" accept='image/*' required />
                                {errors.name && <span className="text-red-600">Image is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                {/* <input  {...register("password")} type="password" placeholder="password" className="input input-bordered" required /> */}
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline bg-[#b69cec]">Sign up</button>
                            </div>
                        </form>
                        <p className='text-center my-3'>All Ready Have an account? <Link to="/login" className="underline">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;