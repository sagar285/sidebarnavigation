import React, { createContext, useState } from 'react'

export const CreateModalContext =createContext()

const Context = ({children}) => {
    const [openmodal,setopenmodal]=useState(false)
  return (
    <CreateModalContext.Provider value={{openmodal,setopenmodal}}>
        {children}
    </CreateModalContext.Provider>
  )
}

export default Context