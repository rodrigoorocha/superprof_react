import "./Navbar.css"

const Navbar = () => {
    return(
       <header className="menu">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-start">
                    <img src="/images/superprof.svg"/>
                </div>

                <div className="col-md-6 text-end">
                    <button className="btn-nav"> <i className="fa-solid fa-question"></i> </button>
                    <button className="btn-nav">Dar aulas</button>
                    <button className="btn-nav">Conectar</button>
                </div>
            </div>

        </div>

       </header>
    )
   
   } 
   export default Navbar;