import FrontentLayout from "@/components/layouts/FrontentLayout";
import Navbar from "@/components/navbar/Navbar";


export default function Home() {
  return (
    <FrontentLayout>
      <Navbar />
       <section className=" relative flex min-h-screen items-center overflow-hidden bg-[url('/images/home.jpg')] bg-cover bg-center pt-32 lg-pt-36 py-2">

       {/* overlay */}
       <div className=" absolute inset-0 bg-black/55" />

       {/* gradient */}

       <div className=" absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-900/50 to-transparent" />

       </section>
    </FrontentLayout>
  );
}

