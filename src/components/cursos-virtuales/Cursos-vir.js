import React from "react";
import cursosV from './virtualC.json';
import './cursosvirt.css';


function Virtuales(){
    return(
        <>
        <div className="cursosVirtuales-contenedor" >
            {cursosV.cursos.map((cursos, id)=>(
                <div key={id} className="cursos">
                    <img src={cursos.imagen} alt={cursos.alt} />
                    <h3>{cursos.titulo}</h3>
                </div>
            ))}
        </div>
        <div className="titulo-pres">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>NUESTROS BOOTCAMPS</h1>
            <h2>BOOTCAMPS <b>PRECENCIALES</b> </h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </>
    );
}

export default Virtuales;