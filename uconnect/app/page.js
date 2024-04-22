import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className=" flex justify-center mx-2 gap-0.5 mt-80 ">
    <div className="box w-[25%] text-center h-[20vh] bg-slate-600 rounded-2xl"></div>
    <div className="box w-[25%] text-center h-[20vh] bg-slate-600 rounded-2xl"></div>
    <div className="box w-[25%] text-center h-[20vh] bg-slate-600 rounded-2xl"></div>
    <div className="box w-[25%] text-center h-[20vh] bg-slate-600 rounded-2xl"></div>
   </div>
   <div className="coming-soon  text-center mt-9 font-bold text-8xl">COMING SOON</div>
   <div className="mentorship text-center mt-9 font-bold opacity-35 text-5xl">Mentorship</div>
   <div className="testimonial mentorship ml-11 mt-56 text-7xl">Testimonial</div>
   </>
  );
}
