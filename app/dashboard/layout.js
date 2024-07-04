"use client"

import DashboardSideBar from "./(components)/DashboardSideBar";
import DashboardTopNav from "./(components)/DashboardTopNav";


export default function dashboardlayout({ children }) {
  return (
    <div className="">
      <DashboardSideBar/>
      <DashboardTopNav>
        <main className="flex flex-col gap-4 p-4 lg:gap-6">
          {children}
          
        </main>

      </DashboardTopNav>
    
    </div>
  );
}
