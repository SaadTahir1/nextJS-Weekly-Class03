"use client";
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
          <nav className="bg-zinc-900 h-auto sm:h-12 md:h-16 lg:h-16 flex-col sm:flex-row   text-white font-semibold px-2 py-6 flex justify-between text-2xl items-center  ">
             <div className=" flex text-3xl space-x-2  sm:text-4xl font-mono mb-5 sm:mb-0">
             <img src="logo.png" 
              alt="logo"
               className=" flex w-10 h-10 rounded-full" />
             <h1> MachineDemo..</h1>
              </div>
             <div className="w-full sm:w-0 md:w-auto mb-4 sm:mb-0">
              <ul className=" flex-col sm:flex-row flex justify-between space-y-2 sm:space-y-0 sm:space-x-10">
                <li><Link href= "/" className=" hover:text-slate-600">Home</Link></li>
                <li><Link href= "/About"className=" hover:text-slate-600">About</Link></li>
                <li><Link href= "#!"className=" hover:text-slate-600 ">Learn</Link></li>
              </ul>
             </div>
             <div className="w-full sm:w-auto ">
              <a href="#!" className="flex flex-col hover:text-slate-600"> More </a>
                </div>
          </nav>
        </div>
    )
};

export default Navbar