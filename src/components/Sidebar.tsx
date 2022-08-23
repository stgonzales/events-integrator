import React from 'react'
import Divider from './micro/Divider'

function Sidebar() {
  return (
    <aside id="sidebar" className="bg-[#E3E3E3] col-span-1 font-type uppercase">
      <div
        id="ticket"
        className="m-9 py-9 px-10 bg-[#ffffff] rounded-2xl flex flex-col gap-6"
      >
        <div className="flex flex-col">
          <div className="bg-[#153D8A] rounded-2xl w-fit mx-auto py-2 px-3 text-white text-center text-md font-bold leading-4">
            Worshop Financeiro
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-1.5">
              <div className="text-xs">
                <p>data/hora</p>
                <p className="font-bold">01/06/2022 as 12:30</p>
              </div>
              <div className="text-xs">
                <p>local</p>
                <p className="font-bold">centro de eventos</p>
              </div>
              <div className="text-xs">
                <p>endereco</p>
                <p className="font-bold">rua antonio marques, 78</p>
              </div>
            </div>
            <div>
              <div className="w-28 h-28">
                <img src="src/assets/images/event_logo.png" alt="event logo" />
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="w-full">
          <div className="flex w-48 h-48 mx-auto overflow-hidden rounded-full bg-red-200">
            <img
              src="src/assets/images/dude.png"
              alt="event logo"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="text-xs">
              <p>participante</p>
              <p className="font-bold">marcelo correia</p>
            </div>
            <div className="text-xs">
              <p>e-mail</p>
              <p className="font-bold">marcelo.correia@gmail.com</p>
            </div>
            <div className="text-xs">
              <p>ticket</p>
              <p className="font-bold">1234rn56</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="h-48">barcodes</div>
          <div className="h-48">barcodes</div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
