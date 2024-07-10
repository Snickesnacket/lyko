
import hero from './assets/img.png'
import './App.css'
import React from "react";
import perfumeImage from './assets/parfume.png'
const  App: React.FC = () => {

    const data = [
        {
            id: 1,
            title: 'GIA',
            brand: 'Stella McCartney',
            img: perfumeImage,
            price: 450,
            currency: 'kr',
            quantity: '50 ml',
        },
        {
            id: 2,
            title: 'AQUA DIO',
            brand: 'Armani',
            img: perfumeImage,
            price: 450,
            currency: 'kr',
            quantity: '50 ml',
        },
        {
            id: 3,
            title: 'GIA',
            brand: 'Stella McCartney',
            img: perfumeImage,
            price: 450,
            currency: 'kr',
            quantity: '50 ml',
        },
        {
            id: 4,
            title: 'AQUA DIO',
            brand: 'Armani',
            img: perfumeImage,
            price: 450,
            currency: 'kr',
            quantity: '50 ml',
        }
    ]

  return (
      <>
          <header className=" w-full ">
              <img className="w-full object-contain" src={hero}  alt="Vite logo"/>
          </header>
          <div className="flex flex-col items-center space-y-5 px-7">
              <div className="flex items-center justify-center space-x-10">
              <span>
                  DAM
              </span>
                  <span>
                  HERR
              </span>
              </div>
              <h2 className="font-bold text-lg">Parfym</h2>
              <div className="flex flex-col items-center max-w-[650px]">
                  <span>Doftguide</span>
                  <p className="text-center ">
                      Det finns inget så härligt som att förälska sig i en ny doft, och i ett utbud så stort som vårt är
                      det inte svårt att hitta nya älsklingar! Bland alla babes på denna sida finns magiska märken så
                      som
                      Ariana Grande, Versace, Clean, Dolce &amp; Gabbana, Hugo Boss, Escada med MÅNGA fler. Lycka till!
                  </p>
              </div>
              <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-6 justify-items-center">
                  {data && data.map((product) => (
                          <div key={product.id} className="bg-modulebackground w-full h-full p-5">
                              <img className="py-2 object-contain  h-full m-auto" src={product.img} alt=" product image"/>
                          </div>
                      )
                  )}
              </div>
          </div>
      </>
  )
}

export default App
