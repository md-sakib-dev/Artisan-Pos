import React, { useEffect } from 'react';
import { useState } from 'react';
import logo from '../assets/pic.png';
import logo1 from '../assets/artisan.png';
import { MdOutlineDashboard } from 'react-icons/md';
import { IoLogOutOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { FcSalesPerformance } from 'react-icons/fc';
import { MdOutlineInventory2 } from 'react-icons/md';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
import SubMenu from './SubMenu';
import { useMediaQuery } from 'react-responsive';
import { CiMenuBurger } from 'react-icons/ci';
import pic2 from '../assets/logo.png';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaRegMessage } from 'react-icons/fa6';

const Sidebar = ({ isOpen, setIsOpen }) => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpenLocal, setIsOpenLocal] = useState(isTabletMid ? false : true);

  useEffect(() => {
    console.log("Is tablet mid?", isTabletMid);
    if (isTabletMid) {
      setIsOpenLocal(false);
    } else {
      setIsOpenLocal(false);
    }
  }, [isTabletMid, setIsOpenLocal]);
  

  const Slidebar_Animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: '17rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const MenusList = [
    {
      name: "Users",
      icon: FaRegUser,
      menus: ["Change Password"],
      path: ["/change"],
    },
  ];

  const subMenusList = [
    {
      name: "Sales",
      icon: FcSalesPerformance,
      menus: ["Sales", "Refund", "Search Invoice", "Gift Voucher Sale", "Customer Search"],
      path: ["/Sales", "/refund", "/invoice", "/gift", "/customsearch"],
    },
    {
      name: "Inventory",
      icon: MdOutlineInventory2,
      menus: ["Product Recieve", "Gift Voucher Recieve", "Challan Reprint", "Stock Update", "Factory Refresh", "Stiock Transfer", "Gift Voucher Transfer"],
      path: ["/productrecieve", "/giftrecieve", "/challan", "/stockupdate", "/factory", "/stockT", "/giftT"],
    },
    {
      name: "Product",
      icon: MdProductionQuantityLimits,
      menus: ["Label Print", "Search Product", "Get Product Info", "Product Manage"],
      path: ["/label", "/searchpro", "/getpro", "/productmanage"],
    },
    {
      name: "Admin",
      icon: RiAdminLine,
      menus: ["New User", "UserList", "Edit Product", "New Product", "Edit Price", "Configuration"],
      path: ["/newuser", "/userlist", "/editproduct", "/newproduct", "/editprice", "/configure"],
    },
  ];

  return (
    <div className='h-full'>
      <div>
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 max-h-screen z-[998] bg-black/50 md:bg-white/10 ${isOpen ? "block" : "hidden"}`}
        ></div>
        <div className='w-full h-12 md:hidden flex justify-center md:justify-between items-center fixed bg-slate-50'>
        <div className='mr-20' onClick={() => { setIsOpen(true); console.log("Sidebar opened"); }}>
  <CiMenuBurger size={25} />
</div>

          <div className="md:hidden">
            <img src={logo1} width={180} alt="" />
          </div>
          <div className='hidden md:mr-14'>
            <div className='flex justify-between items-center gap-2'>
              <IoIosNotificationsOutline size={23} />
              <FaRegMessage size={23} />
            </div>
          </div>
        </div>
        <motion.div variants={Slidebar_Animation} animate={isOpen ? "open" : "closed"} className='bg-green-500 text-gray shadow-xl h-screen z-[999] w-[16rem] max-w-[16rem] overflow-hidden fixed text-white'>
          <div className='flex items-center gap-2 border-b border-b-slate-500 py-3 mx-2 '>
            <img to="/" src={logo} width={60} className='' alt="" />
            <span className='text-sm font-bold whitespace-pre'>Artisan Outfitter Limited</span>
          </div>
          <div className='flex flex-col h-full'>
            <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-green-500 scrollbar-thumb-green-300 h-[75%] md:h[75%]'>
              <li>
                <NavLink to="/" className={'link'}>
                  <MdOutlineDashboard size={25} className='min-w-max' />
                  Home
                </NavLink>
              </li>
              {isOpen && (
                <div className='border-y py-3 border-slate-500'>
                  <small className='pl-3 text-white inline-block mb-2'>Categories</small>
                  {subMenusList?.map(menu => (
                    <div key={menu.name} className='flex flex-col gap-1'>
                      <SubMenu data={menu} />
                    </div>
                  ))}
                </div>
              )}
              {isOpen && (
                <div className='border-b py-3 border-slate-500'>
                  <small className='pl-3 text-white inline-block mb-2'>User's Information</small>
                  {MenusList?.map(menu => (
                    <div key={menu.name} className='flex flex-col gap-1'>
                      <SubMenu data={menu} />
                    </div>
                  ))}
                </div>
              )}
              <li>
                <NavLink to="/report" className={'link'}>
                  <MdOutlineReportGmailerrorred size={25} className='min-w-max' />
                  Reports
                </NavLink>
              </li>
              <li>
                <NavLink to="/logout" className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer font-medium">
                  <IoLogOutOutline size={25} className='min-w-max' />
                  Logout
                </NavLink>
              </li>
            </ul>
            <div className=''></div>
          </div>
          <motion.div
            animate={
              isOpen ? {
                x: 0,
                y: 0,
                rotate: 0,
              } : {
                x: -10,
                y: -200,
                rotate: 180,
              }
            }
            transition={{
              duration: 0,
            }}
            onClick={() => { setIsOpen(!isOpen) }} className='absolute hidden w-fit h-fit bottom-5 z-50 right-2 md:block cursor-pointer'>
            <IoIosArrowBack size={25} />
          </motion.div>
        </motion.div>
      </div>
      <div className='fixed bottom-0 w-full'>
        <div className='border bg-white h-10 '>
          <div className='flex justify-center  items-center'>
            <img className='md:ml-10' width={90} src={pic2} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
