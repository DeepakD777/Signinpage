import React from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit,formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>TEXLA CUlTURE</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("Enter mobile number")} placeholder='Enter mobile number' />
                    <input type="text" {...register("Enter pin")} placeholder='EnterPIN' />
                    <input type="text" {...register("Enter OTP")} placeholder='EnterOTP' />
                    <input type="text" {...register("SetupnewPIN", { required : true, maxLength: 5 })} placeholder='SetnewPIN' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
