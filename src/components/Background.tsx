import React from 'react'

function Background() {
  return (
    <div id="background" className="w-full h-full relative">
      <img
        src="src/assets/images/background.jpg"
        alt="background"
        className="object-cover absolute top-0 left-0 w-full h-full bg-no-repeat"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-50"></div>
    </div>
  )
}

export default Background
