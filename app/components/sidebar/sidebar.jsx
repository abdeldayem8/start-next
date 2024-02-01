"use client"; 
import Link from 'next/link'
import React, { useContext, useRef, useState } from 'react'
import Styles from './sidebar.module.css'
import {FaHome, FaPhone, FaTimes} from 'react-icons/fa';
import { CiSettings ,CiLogout} from "react-icons/ci";
import { IoHelpOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import {togglesidebar,sidebaropen} from "../../store/collapseSlice"
import { useDispatch, useSelector } from 'react-redux';


const Sidebar =()=> {
 
    const isSidebarOpen = useSelector(prevState => prevState.collapse.sidebaropen);
    const dispatch = useDispatch();
    console.log(sidebaropen,togglesidebar());
   const overlayStyles = {
      display: sidebaropen ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: sidebaropen ? '15rem' : '0', // Adjust based on  sidebar width
      width: `calc(100% - 15rem)`, // Adjust based on  sidebar width
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: 'left 0.3s ease',
    };
  return <>
   {sidebaropen && <div style={overlayStyles} onClick={() => dispatch(togglesidebar())} ></div>}
   <div className={sidebaropen ? Styles.opened : Styles.closed}>
      <div className='flex items-center gap-2 px-1 py-3 '>
         <FaCartShopping fontSize={24}/> 
         <span className='text-lg'>OpenShop</span>
         </div>
      <div className='flex-1 py-4 gap-0.5 flex flex-col'>
         <ul>
            <li onClick={() => dispatch(togglesidebar())}  className={Styles.link}>
              
               <Link  className={Styles.title} href='/home'>
                     <FaHome className="mr-3" />Home
               </Link>
               
            </li>
            <li onClick={() => dispatch(togglesidebar())} className={Styles.link}>
               <Link className={Styles.title} href='/dashbord'>
               <FaHome className="mr-3" />About
               </Link>
             
            </li>
            <li onClick={() => dispatch(togglesidebar())} className={Styles.link}>
              
               <Link  className={Styles.title} href='/about'>
               <FaHome className="mr-3" />Blogs
               </Link>
              
            </li>
            <li onClick={() => dispatch(togglesidebar())} className={Styles.link}>
               
               <Link  className={Styles.title} href='/contact'>
               <FaPhone className="mr-3" />Contacts
               </Link>
               
            </li>
            </ul>
      </div>
      <div className='flex flex-col gap-0.5 pt-2 border-t'>
          <ul>
            <li onClick={() => dispatch(togglesidebar())} className={Styles.link}>
               <Link className={Styles.title} href='/contact'>
                  <CiSettings className='mr-3'/> Settings
               </Link>
            </li>
            <li onClick={() => dispatch(togglesidebar())} className={Styles.link}>
               <Link className={Styles.title} href='/contact'>
                  <IoHelpOutline className='mr-3'/> Help and Support
               </Link>
            </li>
            <li onClick={() => dispatch(togglesidebar())} className={Styles.link}>
               <Link className={Styles.title} href='/contact'>
                  <CiLogout className='mr-3'/> Logout
               </Link>
            </li>
          </ul>
      </div>
   </div>
  </>

}

export default Sidebar;