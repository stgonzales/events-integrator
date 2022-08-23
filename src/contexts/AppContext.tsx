import React, { createContext, ReactNode, useState } from 'react'

export type Steps =
  | 'landing'
  | 'selfie'
  | 'finishup'
  | 'done'
  | 'loading'
  | 'error'

export type AppContextProps = {
  children: ReactNode
}

export type StepsType = {
  heading: Record<'title' | 'subtitle', string>
  content: {
    description?: string
    component: string
    next?: Steps
  }
}

export type AppContextType = {
  steps: Record<Steps, StepsType>
  currentStep: Steps
  updateView: (next: Steps) => void
}

const initialValue: AppContextType = {
  steps: {
    landing: {
      heading: {
        title: 'Bem-vindo',
        subtitle: 'ao servico de integracao de eventos da GPRDigital',
      },
      content: {
        description: 'para comecar, <br /> por favor insira os dados abaixo',
        component: 'Form',
        next: 'selfie',
      },
    },
    selfie: {
      heading: {
        title: 'Hora da Selfie!',
        subtitle: 'escolha abaixo uma das opcoes para registrar sua selfie.',
      },
      content: {
        component: 'Upload',
        next: 'finishup',
      },
    },
    finishup: {
      heading: {
        title: 'Tudo pronto...',
        subtitle: 'basta clicar em enviar para finalizar.',
      },
      content: {
        component: 'FinishUp',
      },
    },
    done: {
      heading: {
        title: 'Obrigado!',
        subtitle:
          'sua foto esta salva e pronta para ser utilizada na entrada do evento.',
      },
      content: {
        component: 'Completed',
      },
    },
    loading: {
      heading: {
        title: 'Aguarde...',
        subtitle: '',
      },
      content: {
        component: 'Loading',
      },
    },
    error: {
      heading: {
        title: 'Oops...',
        subtitle:
          'Nao localizamos seu registro no evento ou voce ja registrou sua foto!',
      },
      content: {
        component: 'Erro',
      },
    },
  },
  currentStep: 'landing',
  updateView: () => {},
}

export const AppContext = createContext<AppContextType>(initialValue)

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [steps, setSteps] = useState(initialValue.steps)
  const [currentStep, setCurrentStep] = useState(initialValue.currentStep)

  const updateView = (next: Steps) => {
    setCurrentStep(next)
  }

  return (
    <AppContext.Provider value={{ steps, currentStep, updateView }}>
      {children}
    </AppContext.Provider>
  )
}
