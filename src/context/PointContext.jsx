import React, { createContext, useContext, useState } from 'react'


const PointContext = createContext()

export const PointProvider = ({children}) => {
    const [ points, setPoints ] = useState(0)

    const initPoints = () => {
        setPoints(0)
    }

    const addPoints = () => {
        setPoints(points + 1)
    }

  return (
    <PointContext.Provider value={{ points, initPoints, addPoints }}>
      {children}
    </PointContext.Provider>
  )
}

export const usePoint = () => useContext(PointContext)

