import { useState, useEffect } from "react";
import submitApi from "../adapter/submitApi";
import Buscador from "../components/Buscador/Buscador";
import { Card } from "../components/card/Card";
import Filter from "../components/Filter/Filter";
import { Listagem } from "../components/Listagem/Listagem";
import "../styles/home.css"


const Home = () => {

   


   return (
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <Filter></Filter>
               <Buscador></Buscador>
               <Listagem></Listagem>

               {/* <img className="img-centraliza" src="/images/superprof.svg"/>
       <img className="img-centraliza" src="/images/superprof.svg"/> */}
            </div>

         </div>
      </div>
   )

}
export default Home;