import errorImg from '../../assets/error.jpg'

const Error = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
            <img className='lg:w-[600px]' src={errorImg} alt="" />
            
        </div>
        </div>
    );
};

export default Error;