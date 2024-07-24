"use client"

import DashboardSideBar from "./(components)/DashboardSideBar";
import DashboardTopNav from "./(components)/DashboardTopNav";
import Sidebar from "../dashboard/(components)/Leftsidebar"

export default function dashboardlayout({ children }) {
  return (
    <div >
      <DashboardSideBar/>
      <DashboardTopNav />
        <main className="flex flex-col gap-4 p-4 lg:gap-6">
   <div className="grid grid-cols-3 ">

          {children}
   <Sidebar/>
   </div>

   
          
        </main>

 
    
    </div>
  );
}
