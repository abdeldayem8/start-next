"use client"; 
import { createContext, useState } from "react";

 export const CollapseContext =createContext();

 const CollapseProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
     
   
    return<CollapseContext.Provider value={{toggleSidebar,sidebarOpen}}>
    {children}
    </CollapseContext.Provider>
}

export default CollapseProvider;