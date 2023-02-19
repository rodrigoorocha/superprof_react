import { useState, useEffect } from "react";
import submitApi from "../adapter/submitApi";
import Buscador from "../components/Buscador/Buscador";
import Filter from "../components/Filter/Filter";


const Home = () => {
 
   const  [professores, setProfessores] = useState([])

   useEffect(() => {
      submitApi("profs","GET", null).then(profs =>{
         console.log(profs);
      })
    
   }, [])
   
 
   return(
    <div>
       <Filter></Filter>
       <Buscador></Buscador>    
       {/* <img className="img-centraliza" src="/images/superprof.svg"/>
       <img className="img-centraliza" src="/images/superprof.svg"/> */}
    </div>
 )

} 
export default Home;