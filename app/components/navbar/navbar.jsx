"use client"; 
import { Menu, Popover, Transition,EditInactiveIcon } from "@headlessui/react";
import Styles from "./navbar.module.css";
import {HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch,HiMenu} from 'react-icons/Hi';
import { Fragment, useContext } from "react";
import { CollapseContext } from "@/app/context/collapse";
const Navbar =()=>{
  const { toggleSidebar } = useContext(CollapseContext);

  return (
   <div className={`${Styles.nav} h-16 px-4 flex justify-between items-center`}>
      <HiMenu onClick={toggleSidebar}  className="cursor-pointer" />
    <div className="relative">
      <HiOutlineSearch fontSize={20} className="absolute top-1/2 -translate-y-1/2 left-3"/>
      <input type="text" placeholder="Search..." className={`${Styles.search} text-sm focus:outline-none active:outline-none h-10 w-48  rounded-lg pl-11 pr-4`}/>
    </div>
    <div className="flex items-center gap-2">
    <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
             className="inline-flex items-center hover:text-opacity-100 focus:outline-none p-1.5 rounded-sm ">
               <HiOutlineChatAlt fontSize={20}/>
            </Popover.Button>
             <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-64">
               <div className={`${Styles.dropdown} rounded-lg shadow-md px-2 py-2.5`} >
                <strong>Messages</strong>
                 <div className="mt-2 py-1"> This is Messages Panel  </div>             
               </div>
                </Popover.Panel>
              </Transition>
            </>)}
                </Popover>

                <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
             className="inline-flex items-center hover:text-opacity-100 focus:outline-none p-1.5 rounded-sm ">
                    <HiOutlineBell fontSize={20}/>
            </Popover.Button>
             <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-64">
               <div className={`${Styles.dropdown} rounded-lg shadow-md px-2 py-2.5`} >
                <strong>Notifications</strong>
                 <div className="mt-2 py-1"> This is notification Panel  </div>             
               </div>
                </Popover.Panel>
              </Transition>
            </>)}
                </Popover>   

                 <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-1 focus:ring-neutral-400">
           <div className="h-10 w-10 rounded-full bg-center bg-no-repeat bg-cover" style={{backgroundImage:'url("https://source.unsplash.com/80x80?face)'}}>
            <span className="sr-only">Sam Jackson</span>
           </div>
          </Menu.Button>
    </div>
    <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={`${Styles.dropdown} origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-lg  px-2 py-2.5 shadow-md focus:outline-none`}>
           
              <Menu.Item>
                {({ active }) => (
                 <button className="block mt-1"> Your Profile</button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                 <button className="block mt-1">
                  Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                 <button className="block mt-1"> Sign out</button>
                )}
              </Menu.Item>
              </Menu.Items>
              </Transition>
          </Menu>     

    </div>
   </div>

  )
}

export default Navbar;