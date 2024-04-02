import { useFormik } from 'formik'
import React from 'react'
import { giftvoucherSchema } from '../../schemas'

const GiftRecieve = () => {
 const initialValues={
  chalan:"",
  recieve:"",

 }
  const{values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:giftvoucherSchema,
    onSubmit:(values)=>{

    }
  })
  return (
    <div className='mt-16 w-full h-full mx-auto'>
      <h1 className='text-center text-3xl font-signature font-semibold'>Gift Product Recieve</h1>
      <form class=" mt-10 flex flex-col gap-2 md:flex-row md:gap-4 justify-center   " onSubmit={handleSubmit}>
         <div className='flex flex-col gap-1'>
          <label htmlFor="" className='text-sm '>Chalan no</label>
         <input type="text" name="chalan" id="chalan"  value={values.chalan} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Barcode" class="border border-gray-300 rounded-md px-3 py-2 mb-4 w-[250px]"/>
         {errors.chalan && touched.chalan ? (<p className="text-red-700 text-[12px] font-semibold">{errors.chalan}</p>):null}
         </div>
         <div className='flex flex-col gap-1'>
              <p className='text-sm'>Recieve Form</p>
        <select className="border-2 border-gray-300 text-sm   text-black   rounded-md  w-56 h-10 font-normal"   name='recieve' as='select'  value={values.recieve} onChange={handleChange} >
                    <option value="" >Select an type</option>
                    <option value="factory">Factory</option>
                    <option value="transfer">Transfer</option>     
                </select>
                {errors.recieve && touched.recieve ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.recieve}</p>): null}
            </div>
            <div className='mt-6'>

            <button class=" px-4 py-2  bg-red-600  w-52 text-white text-sm  rounded-md  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Load</button>
  
            </div>
</form>

    </div>
  )
}

export default GiftRecieve