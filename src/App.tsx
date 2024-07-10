import hero from './assets/img.png'
import './App.css'
import React from "react";
import  {perfumeData, Perfume} from './perfumeData'
import Sidebar from "./components/Sidebar.tsx";

const App: React.FC = () => {

     return (
          <>
              <header className=" w-full mb-20">
                  <img className="w-full object-contain" src={hero}  alt="Vite logo"/>
              </header>
              <div className="flex flex-row">
                  <Sidebar />
                  <div className=" flex flex-col items-center space-y-20 px-5" >
                      <div className="space-x-20">
                          <span className=" text-base font-bold">
                              DAM
                          </span>
                          <span className="font-bold">
                              HERR
                          </span>
                      </div>
                      <div className=" flex flex-col items-center mt-10 space-y-5">
                          <h2 className="font-bold text-3xl">Parfym</h2>
                          <div className="flex flex-col items-center max-w-[650px]">
                              <span>Doftguide</span>
                              <p className="text-center ">
                                  Det finns inget så härligt som att förälska sig i en ny doft, och i ett utbud så stort som vårt är
                                  det inte svårt att hitta nya älsklingar! Bland alla babes på denna sida finns magiska märken så
                                  som
                                  Ariana Grande, Versace, Clean, Dolce &amp; Gabbana, Hugo Boss, Escada med MÅNGA fler. Lycka till!
                              </p>
                          </div>
                      </div>
                      <div className=" grid grid-cols-2 md:grid-cols-3 w-full gap-6 justify-items-center">
                          {perfumeData && perfumeData.map((product: Perfume) => (
                              <div className="space-x-3" key={product.id} >
                                  <div  className="bg-modulebackground w-full  p-5">
                                      <img className="py-2 object-contain  h-full m-auto" src={product.img} alt=" product image"/>
                                  </div>
                                  <div>
                                      <h3 className="font-bold pt-4">
                                          {product.title}
                                      </h3>
                                      <section className="font-thin mt-7">
                                            {product.text}
                                      </section>
                                      <span className="font-bold block">
                                          {product.price} {product.currency}
                                      </span>
                                      <button className="border-2 hover:bg-gray-300 rounded-md border-gray-800 mt-5 py-2 px-6"  >
                                          KÖP
                                      </button>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </>
    )
}

export default App
