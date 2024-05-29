import { Link, useLocation, useNavigate } from 'react-router-dom';
import sign from '../../../assets/others/authentication1.png'
import toast from 'react-hot-toast';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import SocialIcon from '../../../Component/SocialIcon/SocialIcon';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';


const Login = () => {
    const { loginUser } = useAuth();
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    console.log(location);
    // const from = location?.state?.from?.pathname;
    // console.log(from);

    // captcha 
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // const name = data.name;
        const email = data.email;
        const password = data.password;
        // console.log(password, email);
        loginUser(email, password)
            .then((res) => {
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                };
                axiosPublic.post('/users', userInfo)
                    .then((res) => {
                        console.log(res.data);
                        navigate('/'); // fix this before deploying your project
                        toast.success("User login Successfully");
                    })
            })
            .catch((err) => {
                toast.error(err.message);
                console.log(err);
            });
    };

    const handleValidate = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    };

    return (
        <>
            <Helmet>
                <title>
                    Jj Restaurant | Login Page
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:w-[800px]">
                        <img src={sign} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                {/* {...register("captcha")} */}
                                <input onBlur={handleValidate} type="text" placeholder="Type the text above" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-outline bg-[#40cbfa]">Login</button>
                            </div>
                        </form>
                        <div className="divider mx-10">or login with social</div>
                        <div >
                            <SocialIcon />
                        </div>
                        <p className='text-center my-3'>New User? <Link to="/sign-up" className="underline">Create a Account</Link></p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;