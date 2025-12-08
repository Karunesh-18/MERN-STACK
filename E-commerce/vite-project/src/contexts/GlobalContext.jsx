import { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(()=>{
        return parseInt(localStorage.getItem('page')) || 1;
    })
    return (
        <GlobalContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;