import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialIcon = () => {
    const { user, googleLoginUser, githubLoginUser } = useAuth();
    const axiosPublic = useAxiosPublic();

    const location = useLocation();
    const from = location?.state?.from?.pathname;
    const navigate = useNavigate();

    // google login 
    const handleGoogleLogin = () => {
        googleLoginUser()
            .then(() => {
                const userInfo = {
                    email: user?.email,
                    name: user?.displayName,
                };

                axiosPublic.post('/users', userInfo)
                    .then((res) => {
                        console.log(res.data);
                        navigate('/')
                    })


                toast.success("User login Successfully");
                navigate('/' || from); // fix this before deploying your project
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };
    // github login
    const handleGithubLogin = () => {
        githubLoginUser()
            .then(() => {
                toast.success("User login Successfully");
                navigate('/' || from); // fix this before deploying your project
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };
    return (
        <div className='flex flex-col justify-center items-center gap-2 mx-5'>
            <button onClick={handleGoogleLogin} className='btn btn-outline btn-success w-full'>Google</button>
            <button onClick={handleGithubLogin} className='btn btn-outline  w-full'>Github</button>
        </div>
    );
};

export default SocialIcon;