import React, { FormEvent, useContext, useState } from 'react'
import { AtendeeContext } from '../contexts/AtendeeContext'
import Button from './micro/Button'

function Form() {
  const { handleAtendeeDetails } = useContext(AtendeeContext)
  const [ticketNumber, setTicketNumber] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    handleAtendeeDetails({ email, ticketNumber })
  }

  return (
    <form
      id="atendee-details"
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-8"
    >
      <input
        className="mx-auto w-[260px] sm:w-[350px] md:w-[450px] h-[70px] pl-4 bg-[#F2F2F2] border border-[#AEAEAE] text-[#3F3F3F] rounded-2xl shadow shadow-inner outline-none text-lg uppercase placeholder:text-[#AEAEAE]"
        type="text"
        name="ticket_number"
        id="ticket_number"
        placeholder="numero do ticket"
        value={ticketNumber}
        onChange={(e) => setTicketNumber(e.target.value)}
      />
      <input
        className="mx-auto w-[260px] sm:w-[350px] md:w-[450px] h-[70px] pl-4 bg-[#F2F2F2] border border-[#AEAEAE] text-[#3F3F3F] rounded-2xl shadow shadow-inner outline-none text-lg placeholder:text-[#AEAEAE] placeholder:uppercase"
        type="email"
        name="email"
        id="email"
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" form="atendee-details">
        Comecar
      </Button>
    </form>
  )
}

export default Form
