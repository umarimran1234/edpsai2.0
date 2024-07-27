"use client"
// import BentoGridDemo  from "@/components/Bagnatogriddemo"
import { BreadcrumbDemo } from "../../../components/BreadCrums"
 
import Modal from '../(components)/Modal'
export default function problempage() {
    return(
        
            <div className="marl  lg:col-span-2 col-span-3">
            <BreadcrumbDemo hreffirst='/' hrefthird='#' hrefsecond='/dashboard' condition={true} firstpath='Company' secondpath='Deshboard' thirdpath='Problems'  />
            <div className="mt-12">

           
            </div>
            
            
     <div className="  py-8">
      <div className="mb-5">

      <h5 style={{fontWeight:'bold'}} > Projects</h5>
      </div>
      
      <div className="container mx-auto px-4">
      
      <div className="grid grid-cols-1 md:grid-cols-1 w-50">


      </div>
    
      <Modal/>
      </div>
    </div>
            
            </div>
        
    )
}