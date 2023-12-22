import { useForm } from "react-hook-form";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";


const CreateTask = () => {

    const axiosPublic = useAxios()

    // get the data
    const { data: tasks = [],} = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`http://localhost:5000/task`)
            return res.data
        }
    })

    // post data from database
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        const priorityItem = {
            name: data.title,
            date: data.date,
            priority: data.priority,
            descriptions: data.descriptions,
        }
        const res = await axiosPublic.post('/task', priorityItem)
        console.log(res);
        if (res.data.insertedId) {
            reset()
            Swal.fire({
                title: "Confirm your Task",
                text: "You clicked the button!",
                icon: "success",
            });
        }

    }

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* to do list */}
                <div>
                    <div className="flex justify-between items-center border-b-4 border-[#460093] shadow-xl px-2">
                        <h3 className="text-md font-semibold">ToDo</h3>

                        {/* modal section start*/}
                        <button className="btn lg:my-5 text-xl mt-2 bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] text-white" onClick={() => document.getElementById('my_modal_4').showModal()}>+</button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box lg:w-8/12 w-full">
                                {/* form start */}
                                <form onSubmit={handleSubmit(onSubmit)}
                                    noValidate=''
                                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                                >
                                    <div className='space-y-4'>
                                        <div>
                                            <label htmlFor='title' className='block mb-2 text-sm text-[#050748]'>
                                                Title
                                            </label>
                                            <input
                                                {...register("title", { required: true })}
                                                type='text'
                                                name='title'
                                                id='title'
                                                required
                                                placeholder='Enter Your Title Here'
                                                className='px-3 py-2 rounded-md border-2 border-[#FF3811] focus:outline-[#FF3811] w-full'
                                                data-temp-mail-org='0'
                                            />
                                        </div>
                                        {/* date section */}
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Date</span>
                                            </label>
                                            <input {...register("date", { required: true })} type="date"
                                                placeholder="Date"
                                                name="date"
                                                className="px-3 py-2 rounded-md border-2 border-[#FF3811] focus:outline-[#FF3811] w-full" />
                                        </div>
                                        {/* priority section */}
                                        <div className="form-control w-full mr-6">
                                            <label className="label">
                                                <span className="label-text">Priority</span>
                                            </label>
                                            <select defaultValue='default' {...register("priority", { required: true })} name="priority" className="px-3 py-2 border-2 border-[#ff370f] rounded-md focus:outline-[#FF3811] w-full select">
                                                <option value='low'>Low</option>
                                                <option value="moderate">Moderate</option>
                                                <option value="high">High</option>
                                            </select>
                                        </div>
                                        {/* description section */}
                                        <div>
                                            <div className='flex justify-between'>
                                                <label htmlFor='password' className='text-sm mb-2 text-[#050748]'>
                                                    Descriptions
                                                </label>
                                            </div>
                                            <textarea
                                                {...register("descriptions", { required: true })}
                                                type='text'
                                                name='descriptions'
                                                id='descriptions'
                                                required
                                                placeholder='Write Here'
                                                className='px-3 py-2 border-2 border-[#ff370f] rounded-md focus:outline-[#FF3811] w-full'
                                                cols="50"
                                                rows="5"></textarea>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type='submit'
                                            className='btn bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] rounded-md py-3 text-white'
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                                {/* form end */}
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        {/* modal section end */}
                    </div>

                    {/* todo data */}
                    <div className="mt-8">
                        {
                            tasks.map(task => <div key={task._id} className="card bg-base-100 shadow-xl mt-4">
                            <div className="card-body">
                              <h2 className="card-title">Card title!</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                              </div>
                            </div>
                          </div>)
                        }
                    </div>
                </div>
                {/* ongoing list */}
                <div className=" border">
                    on going
                </div>
                {/* complete list */}
                <div className=" border">
                    complete
                </div>
            </div>
        </div>
    );
};

export default CreateTask;