"use client"
// import BentoGridDemo  from "@/components/Bagnatogriddemo"
import { BreadcrumbDemo } from "../../../components/BreadCrums"
import Card from "../../../components/Gridcard"
import { Input } from "../../../components/ui/input"
import coffie from "../../../public/Images/dashboard/Rectangle 33.png" 
import { PlusIcon } from "@radix-ui/react-icons"
export default function problempage() {
    return(
        
            <div className="marl container px-20 lg:col-span-2 col-span-3">
            <BreadcrumbDemo hreffirst='/' hrefthird='#' hrefsecond='/dashboard' condition={true} firstpath='Company' secondpath='Deshboard' thirdpath='Problems'  />
            <div className="mt-12">

           
            </div>
            
            
     <div className="min-h-screen  py-8">
      <div className="mb-5">

      <h5 style={{fontWeight:'bold'}} > Projects</h5>
      </div>
      
      <div className="container mx-auto px-4">
      
      <div className="grid grid-cols-1 md:grid-cols-1 w-50">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card  imageSrc={coffie}  heading="Circuit Burnout " text="This is the first card." />
          <Card imageSrc={coffie} heading="Motor Squealing" text="This is the second card." />
          <Card imageSrc={coffie} heading="The Shredding" text="This is the third card." />
          <Card imageSrc={coffie} heading="Coffiee machine leaking" text="This is the fourth card." />
        </div>
      </div>
       <button style={{background:'#888888',padding:'1rem',  borderRadius:"1rem" } } className="mt-6"> <PlusIcon width={50} fontSize={100} /> </button>
      </div>
    </div>
            
            </div>
        
    )
}