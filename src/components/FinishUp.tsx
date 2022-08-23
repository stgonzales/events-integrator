import React, { useContext } from 'react'
import { AtendeeContext } from '../contexts/AtendeeContext'
import Button from './micro/Button'

function FinishUp() {
  const { handleSubmit } = useContext(AtendeeContext)

  const handleSubmitDetails = () => {
    handleSubmit()
  }
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <Button type="button" onClick={handleSubmitDetails}>
        Enviar
      </Button>
    </div>
  )
}

export default FinishUp
