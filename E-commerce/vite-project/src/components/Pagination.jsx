import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

const Pagination = () => {

    const { currentPage, setCurrentPage } = useContext(GlobalContext);

    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
        sessionStorage.setItem('page', currentPage - 1);
    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
        sessionStorage.setItem('page', currentPage + 1);
    }
    
    return (
        <div className="w-[300px] mx-auto flex justify-center items-center gap-4 mt-4 bg-yellow-100 rounded-md p-4 shadow-lg">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handlePrevious}>{"<"}</button>
            <div className="text-xl bg-yellow-200 px-4 py-2 rounded-md">{currentPage}</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleNext}>{">"}</button>
        </div>
    )
}

export default Pagination;