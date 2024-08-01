
"use client"
import Topnav from "./(components)/Topnav"
import Sidebar from "./(components)/Sidebar"
import ButtonSection from './(components)/Bottom'
export default function Problelayout({ children }) {
  return (
 <>

 <div className="">

 <Topnav/>
<Sidebar>
  
</Sidebar>

 <main className="flex flex-col gap-4 p-4 lg:gap-6">
   <div className="">

          {children}

     </div>
       </main>

  </div>

 </>

)
}