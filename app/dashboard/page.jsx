"use client"
// import BentoGridDemo  from "@/components/Bagnatogriddemo"
import { BreadcrumbDemo } from "../../components/BreadCrums"
import Card from "../../components/Gridcard"
import { Input } from "../../components/ui/input"
import coffie from "../../public/Images/dashboard/Rectangle 33.png" 

export default function dashboard() {
    return(
        
            <div className=" lg:col-span-2 col-span-3">
            <BreadcrumbDemo firstpath='company' hreffirst='/' secondpath='EDPS Dashboard' hrefsecond='#' condition={false}  />
            <div className="mt-12">

        <Input className='borderdark' disable value='Welcome back  Bassie Copper'/>       
            </div>
            
            
     <div className="min-h-screen  py-8">
      <div className="mb-5">

      <h5 style={{fontWeight:'bold'}} >Recent Project</h5>
      </div>
      
      <div className="container mx-auto px-4">
      
      <div className="grid grid-cols-1 md:grid-cols-1 w-50">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card imageSrc={coffie} heading="Circuit Burnout " text="This is the first card." />
          <Card imageSrc={coffie} heading="Motor Squealing" text="This is the second card." />
          <Card imageSrc={coffie} heading="The Shredding" text="This is the third card." />
          <Card imageSrc={coffie} heading="Coffiee machine leaking" text="This is the fourth card." />
        </div>
      </div>
      </div>
    </div>
            
            </div>
        
    )
}