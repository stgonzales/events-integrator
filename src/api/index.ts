import axios from 'axios'

interface ValidateAtendee {
  ticket_number: string
  email: string
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const checkDetails = async (atendeeDetails: ValidateAtendee) => {
  return instance.post('/check-details', atendeeDetails).then((res) => res)
}
