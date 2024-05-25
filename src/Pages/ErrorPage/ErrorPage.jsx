import { useNavigate } from 'react-router-dom';
import img from '../../assets/404.gif'
const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex justify-center'>
                <img className='h-[500px]' src={img} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center gap-3'>
                <p>Here are some useful link</p>
                <div className='flex justify-center items-center gap-5'>
                    <button onClick={() => navigate(-1)} className='btn btn-outline bg-[#d3ee89]'>Go Back</button>
                    <button onClick={() => navigate('/')} className='btn btn-outline bg-[#ebf3d6]'>Go Home</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;