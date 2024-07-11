import hero from './assets/img.png'
import './App.css'
import React from "react";
import Sidebar from "./components/Sidebar.tsx";
import Module from "./components/Module.tsx";
import {perfumeData} from "./perfumeData.ts";

const App: React.FC = () => {

     return (
         <body className=" bg-modulebackground">
         <div className="max-w-6xl m-auto">
             <header className=" w-full">
                 <img className="w-full object-contain" src={hero} alt="Vite logo"/>
             </header>
             <div className="bg-white p-5">
                 <div className=" flex flex-col items-center space-y-20">
                     <div className="space-x-20 lg:mt-24 mt-14">
                              <span className=" text-base font-bold">
                                  DAM
                              </span>
                         <span className="font-bold">
                                  HERR
                             </span>
                     </div>
                     <div className=" flex flex-col items-center space-y-10">
                         <h2 className="font-bold text-3xl">Parfym</h2>
                         <div className="flex flex-col items-center max-w-[650px]">
                             <span>Doftguide</span>
                             <p className="text-center">
                                 Det finns inget så härligt som att förälska sig i en ny doft, och i ett utbud så stort
                                 som vårt är
                                 det inte svårt att hitta nya älsklingar! Bland alla babes på denna sida finns magiska
                                 märken så
                                 som
                                 Ariana Grande, Versace, Clean, Dolce &amp; Gabbana, Hugo Boss, Escada med MÅNGA fler.
                                 Lycka till!
                             </p>
                         </div>
                     </div>
                 </div>
                 <div className="p-2 lg:space-x-20 space-x-0 lg:inline-flex flex-col w-fit mr-auto mt-24 mb-20 lg:flex-row ">
                     <div className="lg:flex-col">
                         {perfumeData && perfumeData.length &&
                             <div
                                 className=" font-bold lg:mr-auto pl-0.5 h-20 py-2 lg:text-left text-center">{`Produkter ${perfumeData.length}`}</div>
                         }
                         <Sidebar/>
                     </div>
                     <Module/>
                 </div>
             </div>

         </div>
         </body>
     )
}

export default App
