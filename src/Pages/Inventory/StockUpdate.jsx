import React from 'react'
import { useFormik } from 'formik'
import { stockschema } from '../../schemas'


const StockUpdate = () => {
  const initialValues={
    bar:"",

  }
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema: stockschema,
    onSubmit:(values)=>{
      
    }
  })
  return (
    <div className='mt-20 w-full h-full mx-auto '>
      

      <h1 className='text-center text-3xl font-signature font-semibold'>Stock Update</h1>
      <form class=" mt-5 flex flex-col gap-2 md:flex-row md:gap-4 justify-center  " onSubmit={handleSubmit}>
        <div className='flex flex-col justify-between gap-0.5'>
          <label className='text-sm' htmlFor="">Barcode</label>

  <input type="text" name="bar" id="bar"  value={values.bar} onChange={handleChange} onBlur={handleBlur} placeholder="Enter ID" class="border border-gray-300 rounded-md px-3 py-2 mb-4 w-[250px]"/>
  {errors.bar && touched.bar ? (<p className="text-red-700 text-[12px] font-semibold">{errors.bar}</p>):null}
        </div>
        <div className='mt-8'>
        <button class=" px-4 py-2  bg-red-600  w-40 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Search Product</button>
        </div>
  
</form>
<div className='flex flex-col justify-center items-center'>
   <div className='mt-5  border w-80 md:w-full  rounded-lg'>
    <div className='flex flex-col md:flex-row justify-around items-center mt-2'>
      <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">group</label>
     <input type="text" name="name" id="name" placeholder="" class="border-2  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
      <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">Type</label>
  <input type="text" name="employee_name" id="employee_name" placeholder="" class="border-2  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
      <div className='flex flex-col'>
      <label for="id" class="mb-2 text-sm">Category</label>
     <input type="text" name="id" id="id" placeholder="" class=" border-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
      <div className='flex flex-col'>
      <label for="id" class="mb-2 text-sm">Style</label>
     <input type="text" name="id" id="id" placeholder="" class=" border-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
    </div>
    <div className=' flex flex-col md:flex-row justify-around items-center mt-0 md:mt-5'>
    <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">Brand</label>
      <input type="text" name="Role" id="Role" placeholder="" class="border-2  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
      <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">Size</label>
      <input type="text" name="Branch" id="Branch" placeholder="" class="border-2  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>

      <div className='flex flex-col '>
  <label htmlFor="password" className="mb-2 text-sm">Color</label>
  <input type="password" id="password" name="password" placeholder="" className=" border-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10  font-semibold" />
</div>

<div className='flex flex-col '>
  <label htmlFor="password" className="mb-2 text-sm">Current Stock</label>
  <input type="password" id="password" name="password" placeholder="" className=" border-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10  font-semibold" />
</div>

    </div>
<div className='flex  justify-start md:ml-8 mb-5 mt-8  gap-6'>

    <div className='flex flex-col '>
  <label htmlFor="password" className="mb-2 text-sm">Stock Update</label>
  <input type="password" id="password" name="password" placeholder="" className=" border-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10  font-semibold" />
</div>
  <div className='mt-7'>
  <button class=" px-4 py-2  bg-red-600  w-32 text-white  rounded-md  text-sm hover:opacity-90 hover:text-black hover:bg-emerald-500  mb-2 ml-4">Update</button>
  </div>
</div>

    </div>

    </div>
      </div>
  )
}

export default StockUpdate