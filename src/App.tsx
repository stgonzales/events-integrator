import React from 'react'

import {
  Main,
  Background,
  Frame,
  Heading,
  Content,
  Divider,
  Sidebar,
} from './components'

function App() {
  return (
    <div className="w-screen h-screen relative font-sans overflow-hidden">
      <Background />
      <div className="absolute w-full h-full top-0 grid grid-cols-4">
        <Main>
          <Frame>
            <Heading />
            <Divider />
            <Content />
          </Frame>
        </Main>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
