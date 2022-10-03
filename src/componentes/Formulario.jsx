import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaCitas from "./ListaCitas";
import { useState, useEffect } from "react";

const Formulario = () => {
    
    

    const citasLocalStorage = JSON.parse(localStorage.getItem("ListaCitas")) || []

    const [citas, setCitas] = useState("");
    const [arregloCitas, setArregloCitas] = useState(citasLocalStorage);
    
    useEffect(() => {
      localStorage.setItem("ListaCitas", JSON.stringify(arregloCitas))
    }, [arregloCitas]);





  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloCitas([...arregloCitas, citas]);
    setCitas("");
  };

  const borrarCitas = (nombre)=>{
    let arregloModificado = arregloCitas.filter((item)=> item !== nombre)
    //actualizar state
    setArregloCitas(arregloModificado);
  }

  

  return (
    <div>
      <Container>
        <div className="divForm my-5">
          <Form className="form " onSubmit={handleSubmit}>
            <div className=" mt-4">
              <h1 className="text-center">ADMINISTRADOR DE CITAS</h1>
              <h5 className="text-center">LLenar formulario para guardar cita</h5>
              <hr />
              <Form.Group className="mb-3 input ">
                <Form.Label className="titulosForm">
                  Nombre de Mascota
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese Nombre Mascota"
                  id="mascota"
                  required
                  onChange={(e) => setCitas(e.target.value)}
                  value={citas}
                />
              </Form.Group>

              <Form.Group className="mb-3 input">
                <Form.Label className="titulosForm">Nombre de Dueño</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre Dueño"
                  id="dueño"
                  required
                 
                  
                />
              </Form.Group>
              <Form.Group className="mb-3  input">
                <Form.Label className="titulosForm">Fecha: </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Fecha"
                  id="fecha"
                  required
                  
                />

                <Form.Label className="titulosForm ms-2">Hora: </Form.Label>
                <Form.Control
                  type="hour"
                  placeholder="Hora "
                  id="hora"
                  required
                  
                />
              </Form.Group>

              <Form.Group className="mb-3 input">
                <Form.Label className="titulosForm">Sintomas</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Sintomas "
                  id="sintomas"
                  required
                  
                />
              </Form.Group>
              
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Agregar nueva cita
                </Button>
              </div>
            </div>
          </Form>
        </div>
        <ListaCitas arregloCitas = {arregloCitas} borrarCitas = {borrarCitas}></ListaCitas>
      </Container>
    </div>
  );
};

export default Formulario;
