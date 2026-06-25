import { ReactNode } from "react";
import Footer from "../general/Footer";

export default function FrontentLayout ({children}:{children:ReactNode}){

return (
    <>
     {children}
     <Footer/>
    </>
)

}