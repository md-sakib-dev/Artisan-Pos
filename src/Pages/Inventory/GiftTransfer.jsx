import React from 'react'
import { useFormik } from 'formik'
import { chalanSchema } from '../../schemas'

const GiftTransfer = () => {
  const initialValues={
    chalan:"",
    recieve:"",
  
   }
    const{values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
      initialValues:initialValues,
      validationSchema:chalanSchema,
      onSubmit:(values)=>{
  
      }
    })
  return (
    <div className='mt-10 w-full max-h-screen mx-auto'>
      <h1 className='text-center text-3xl font-signature font-semibold'>Gift Voucher Transfer</h1>
      <form class=" mt-10 flex flex-col gap-2 md:flex-row md:gap-4 justify-center items-center" onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1'>
              <p className='text-sm'>Transfer To</p>
        <select className="border-2 border-gray-300 text-sm   text-black   rounded-md mb-4  w-56 h-10 font-normal"   name='recieve' as='select'  value={values.recieve} onChange={handleChange} >
                    <option value="" >Select an type</option>
                    <option value="factory">Factory</option>
                    <option value="transfer">Transfer</option>     
                </select>
              {errors.recieve && touched.recieve ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.recieve}</p>): null}
            </div>
         <div className='flex flex-col gap-1'>
          <label htmlFor="" className='text-sm '>Voucher Serial</label>
         <input type="text" name="chalan" id="chalan"  value={values.chalan} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Barcode" class="border border-gray-300 rounded-md px-3 py-2 mb-4 w-[250px]"/>
         </div> 

            <div className='mt-6'>

            <button type='submit' class=" px-4 py-2  bg-red-600  w-28 text-white text-sm  rounded-md  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Add</button>
  
            </div>
            <div className='mt-6'>

            <button class=" px-4 py-2  bg-red-600  w-28 text-white text-sm  rounded-md  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Search</button>
  
            </div>
</form>
     

    </div>
  )
}

export default GiftTransfer