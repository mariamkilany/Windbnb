import React, { useState, useContext } from 'react'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [showNav,setShowNav]=useState(false)
    const [showLocation,setShowLocation]=useState(true)
    const [showBtns,setShowBtns]=useState(false)
    const [location,setLocation]=useState("Helsinki,Finland")
    const [AudltsGuests,setAudltsGuests]=useState(0)
    const [childrenGuests,setChildrenGuests]=useState(0)
    return(
        <AppContext.Provider
        value={{showNav,setShowNav,showLocation,setShowLocation,showBtns,setShowBtns,location,setLocation,AudltsGuests,setAudltsGuests,childrenGuests,setChildrenGuests}}
        >
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider }