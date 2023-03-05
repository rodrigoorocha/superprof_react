import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
    

    <div className="container">


    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/teste" element={<h1>teste</h1>}/> */}
      </Routes>
    </BrowserRouter>
   

    </div>




    

    </>
  );
}

export default App;
