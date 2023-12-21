import { Link } from "react-router-dom";
import NavBer from "../Shared/NavBer/NavBer";
import { FcGoogle } from 'react-icons/fc'
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {

    const { signIn, googleLogin } = useAuth()

    // login with email and password
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Login Successful",
                    text: "You clicked the button!",
                    icon: "success"
                });
            })
    }

    // google login
    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Login Successful",
                    text: "You clicked the button!",
                    icon: "success"
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="bg-gradient-to-r from-[#ffdee9] to-[#c8fff4]">
            <div>
                <NavBer></NavBer>
            </div>
            {/* login card */}
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col md:max-w-md w-full mx-6 p-6 rounded-md sm:p-10 bg-white text-gray-900 border lg:mt-32 lg:mb-8 my-12 '>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold text-[#050748]'>Sign In</h1>
                        <p className='text-sm text-[#050748]'>
                            Sign in to access your account
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}
                        noValidate=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
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
                                    className='w-full px-3 py-2 rounded-md border-2 border-[#FF3811] focus:outline-[#FF3811]'
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
                                    className='w-full px-3 py-2 border-2 border-[#ff370f] rounded-md focus:outline-[#FF3811]'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='btn bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] w-full rounded-md py-3 text-white'
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
                    <div onClick={handleGoogle} className='flex justify-center items-center space-x-2 border my-3 p-2 text-white bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] border-rounded cursor-pointer btn'>
                        <FcGoogle size={32} />
                        <p>Continue with Google</p>
                    </div>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Don&apos;t have an account yet?{' '}
                        <Link
                            to='/signup'
                            className='hover:underline hover:text-rose-500 text-gray-600'
                        >
                            Sign up
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;