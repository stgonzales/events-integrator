import React, { ReactNode } from 'react'

interface FrameProps {
  children: ReactNode
}
function Frame({ children }: FrameProps) {
  return (
    <div
      id="frame"
      className="w-full h-full flex justify-center items-center relative m-auto"
    >
      <div className="w-[360px] sm:w-[560px] md:w-[730px] h-[660px] absolute m-auto rounded-3xl border border-solid border-white bg-white opacity-60"></div>
      <div className="w-[330px] sm:w-[530px] md:w-[700px] h-[630px] absolute m-auto rounded-2xl bg-gray-100 px-6 md:p-12 py-5 md:p-10 flex flex-col justify-between">
        {children}
      </div>
    </div>
  )
}

export default Frame
