import FrontentLayout from "@/components/layouts/FrontentLayout";
import Navbar from "@/components/navbar/Navbar";
import PropertyCard from "@/components/properties/PropertyCard";
import { dummyproperties } from "@/constants/dummyProperties";

export default function PropertiesPage(){
    return (
         <FrontentLayout>
            <Navbar variant="solid"/>
            <div className=" mx-auto max-w-7xl p-6 lg:px-12 w-full">
              <div className=" flex justify-between">
                <h2 className=" text-2xl font-bold text-text md:text-3xl">
                    Properties
                </h2>

               
              </div>

               <div className=" grid gap-8 md:grid-cols-2 xl:grid-cols-3 my-4">
                  {dummyproperties.map((property)=>(
                    <PropertyCard key={property.id} property={property}/>
                  ))}
              </div>

            </div>
        </FrontentLayout>
    )
}