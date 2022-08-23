import React, { BaseSyntheticEvent, useContext } from 'react'
import { AtendeeContext } from '../contexts/AtendeeContext'
import { econdeImageFileToBase64 } from '../utils'
import Button from './micro/Button'

function Upload() {
  const { handleImage } = useContext(AtendeeContext)
  const handleFileUpload = async (e: BaseSyntheticEvent) => {
    const image = await econdeImageFileToBase64(e.target.files[0])

    if (image && typeof image === 'string') {
      handleImage(image)
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-center w-[260px] sm:w-[350px] md:w-[450px] gap-8">
      <div className="p-4 relative w-60 text-center mx-auto bg-[#153D8A] border rounded-xl font-sans font-bold text-2xl text-white hover:bg-blue-600">
        <span className="relative z-0 inline-block w-full cursor-pointer text-white">
          Enviar Foto
        </span>
        <input
          className="inline-block absolute z-10 w-full h-12 top-0 left-0 cursor-pointer opacity-0"
          type="file"
          name="upload"
          id="upload"
          accept="image/*"
          onChange={handleFileUpload}
        />
      </div>
      <p className="text-base text-center font-medium text-[#3F3F3F]">ou</p>
      <Button
        onClick={() => {
          alert('Feature not implemented!')
        }}
      >
        Usar Camera
      </Button>
    </div>
  )
}

export default Upload
