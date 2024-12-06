import React, { useState } from 'react'
import { createContext } from 'react'

export const MyStore=createContext();


const Store = ({children}) => {
    const [data,setData]=useState([])
    const [open,setOpen] =useState(false)

  return (
      <MyStore.Provider value={{data,setData,open,setOpen}}>
          {children}
      </MyStore.Provider>
  )
}

export default Store