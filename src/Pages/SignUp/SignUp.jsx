import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const SignUp = () => {

    const { createUser, googleLogin } = useAuth()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Sign Up Successful",
                    text: "You clicked the button!",
                    icon: "success"
                });
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }

    // google login
    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Sign Up Successful",
                    text: "You clicked the button!",
                    icon: "success"
                });
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="bg-gradient-to-r from-[#ffdee9] to-[#c8fff4]">
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col md:max-w-md w-full my-8 mx-6 p-6 rounded-md sm:p-10 bg-white border text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-[#050748] text-4xl font-bold'>Sign Up</h1>
                        <p className='text-sm text-[#050748]'>
                            Sign up to access your account
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}
                        noValidate=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-2'>
                            <div>
                                <label htmlFor='email' className='block text-[#050748] mb-2 text-sm'>
                                    Your Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    required
                                    {...register("name", { required: true })}
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border-2 border-[#FF3811] rounded-md focus:outline-[#FF3811]'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm text-[#050748]'>
                                    Email address
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border-2 border-[#FF3811] rounded-md focus:outline-[#FF3811]'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2 text-[#050748]'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    {...register("password", { required: true })}
                                    type='password'
                                    name='password'
                                    autoComplete='current-password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border-2 border-[#FF3811] rounded-md focus:outline-[#FF3811]'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='btn w-full bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] rounded-md py-3 text-white'
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                    <div className='space-y-1'>
                        <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                            Forgot password?
                        </button>
                    </div>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm text-[#050748]'>
                            Login with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <div onClick={handleGoogle} className='flex justify-center items-center space-x-2 my-3 p-2 bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] border-rounded cursor-pointer text-white rounded-md'>
                        <FcGoogle size={32} />
                        <p>Continue with Google</p>
                    </div>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Don&apos;t have an account yet?{' '}
                        <Link
                            to='/login'
                            className='hover:underline hover:text-rose-500 text-gray-600'
                        >
                            Login
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;