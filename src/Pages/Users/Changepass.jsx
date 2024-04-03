import { useFormik } from 'formik';
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { changeschema } from '../../schemas';

const Changepass = () => {
  const [visible, setVisible] = useState(false);
  const initialValues = { 
    original_password: "",
    password: "",
    confirm_password: "",   
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues: initialValues,
    validationSchema: changeschema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <div className='w-full h-full mt-20 mx-auto'>
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center md:mt-2 gap-8'>
          <div>
            <div className='flex flex-col gap-1 relative'>
              <input
                className=" bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black   px-0 block rounded-md  w-[250px] md:w-[250px] h-10  "
                type={visible ? "text" : "password"}
                name="original_password"
                id="original_password"
                value={values.original_password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=''
              />
              <label
                htmlFor="original_password"
                className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'
              >
                Original Password
              </label>
            </div>
            {errors.original_password && touched.original_password ? (
              <p className=" text-red-700 text-[12px] font-semibold">{errors.original_password}</p>
            ) : null}
          </div>
          <div>
            <div className='flex flex-col gap-1 relative'>
              <input
                className=" bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black   px-0 block rounded-md  w-[250px] md:w-[250px] h-10  "
                type={visible ? "text" : "password"}
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=''
              />
              <label
                htmlFor="password"
                className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'
              >
                New Password
              </label>
              <div onClick={toggleVisibility}>
                {visible ? (
                  <FaRegEye size={20} className='absolute top-4 right-4' />
                ) : (
                  <FaRegEyeSlash size={20} className='absolute top-4 right-4' />
                )}
              </div>
            </div>
            {errors.password && touched.password ? (
              <p className=" text-red-700 text-[12px] font-semibold">{errors.password}</p>
            ) : null}
          </div>
          <div>
            <div className='flex flex-col gap-1 relative'>
              <input
                className=" bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black  py-2.3 px-0 block rounded-md  w-[250px] md:w-[250px] h-10  "
                type={visible ? "text" : "password"}
                name="confirm_password"
                id="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=''
              />
              <label
                htmlFor="confirm_password"
                className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'
              >
                Confirm New Password
              </label>
              <div onClick={toggleVisibility}>
                {visible ? (
                  <FaRegEye size={20} className='absolute top-4 right-4' />
                ) : (
                  <FaRegEyeSlash size={20} className='absolute top-4 right-4' />
                )}
              </div>
            </div>
            {errors.confirm_password && touched.confirm_password ? (
              <p className=" text-red-700 text-[12px] font-semibold">{errors.confirm_password}</p>
            ) : null}
          </div>
        </div>
        <div className="flex justify-center py-2 mb-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Changepass;
