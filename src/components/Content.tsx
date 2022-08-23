import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { DynamicComponent } from './'

function Content() {
  const { steps, currentStep } = useContext(AppContext)
  const { description = '' } = steps[currentStep].content

  return (
    <div
      id="content"
      className="mx-auto mt-5 h-full flex flex-col gap-8 items-center"
    >
      {description && (
        <div
          className="uppercase text-base text-center font-medium text-[$3F3F3F]"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      )}
      <DynamicComponent />
    </div>
  )
}

export default Content
