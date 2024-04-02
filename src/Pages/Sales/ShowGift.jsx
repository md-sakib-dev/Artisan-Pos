import { useFormik } from 'formik'
import React from 'react'
import { Giftslip } from '../../schemas'
import { IoMdClose } from "react-icons/io";

const ShowGift = ({closeModal}) => {
    const initialValues={
        price:"",
        group:"",
        gift:"",
    }
    const{values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:Giftslip,
        onSubmit:(values,action)=>{
        action.resetForm();
        }
    })
    return (
        <>
      
        <div className=' fixed inset-0 bg-black  backdrop-blur-sm bg-opacity-5    '>
        </div>
          <div className='fixed top-[50%] left-[50%] max-w-40rem transform -translate-x-1/2 -translate-y-1/2 bg-white  py-8 px-12 border rounded-lg '>
         <form className='flex flex-col justify-center md:justify-between  text-black mt-5 gap-8'onSubmit={handleSubmit}>
         <div className='flex justify-center  p-4 md:p-5  border-b-2 dark:border-gray-600'>
            
            <h1 className='font-signature text-black font-bold text-2xl text-center '>Gift Voucher</h1>
            <div className='text-gray-400 bg-transparent hover:bg-white hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' onClick={closeModal}>
            <IoMdClose color='black'  size={20}/>
            </div>
           </div>
           <div  className='flex flex-col md:flex-row md:justify-around gap-8'>
           <div className="flex flex-col gap-0">
                    <label htmlFor="serial" className='text-sm'>Gift Voucher Amount</label>
                    <input type="number" name="price" id="price" placeholder="Enter Amount" value={values.price} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48"/>
                    {errors.price && touched.price && (<p className="text-red-700 text-[12px] font-normal">{errors.price}</p>)}
                  </div>
                  <div className='flex flex-col gap-2'>
          <p className='text-sm'>Gift Voucher Type</p>
    <select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-normal"   name='group' as='select'  value={values.group} onChange={handleChange} >
                <option value="" >Select a Type</option>
                <option value="Admin">Admin</option>
                <option value="Branch Manager">Branch Manager</option>
                <option value="Pos Operator">Pos Operator</option>
                <option value="Pos Verifier">Pos Verifier</option>
            </select>
            {errors.group ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.group}</p>): null}
        </div>
                
           </div>
           <div className='flex flex-col md:flex-row md:justify-start gap-8'>
          
        <div className=" flex flex-col gap-1">
                    <label htmlFor="serial" className='text-sm'>Gift Voucher No</label>
                    <input type="text" name="mobile" id="mobile" placeholder="Enter Serial" value={values.gift} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48"/>
                    {errors.gift && touched.gift && (<p className="text-red-700 text-[12px] font-normal">{errors.gift}</p>)}
                  </div>
    
           </div>
                   
         <div className="flex justify-center py-2 mb-5 bg-red-600 mt-2 w-44 text-white  rounded-md h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
         <button className="" type='submit'>Save</button>
          </div>
    
         </form>
          </div>
        
         </>
      )
}

export default ShowGift