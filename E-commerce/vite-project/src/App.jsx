import { useState } from "react";
import { GlobalProvider } from "./contexts/GlobalContext";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import UserDetails from "./components/UserDetails";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [currentPage, setCurrentPage] = useState(()=>{
    return parseInt(sessionStorage.getItem('page')) || 1; 
  });

  let firstname = "John";
  let lastname = "Doe";
  let age = 21;
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-10 uppercase">Student details</h1>
      {StudentCard({fname: firstname, lname: lastname, age: age})}
      <StudentCard fname={firstname} lname={lastname} age={age}/>
      <Counter />
      <GlobalProvider>
        <UserDetails currentPage={currentPage} />
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </GlobalProvider>
      <LoginForm />
      <ProductList />
    </>
  )
}

export default App;