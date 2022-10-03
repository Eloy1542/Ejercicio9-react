import React from "react";
import { Button, Card } from "react-bootstrap";

const ItemCitas = ({ nombreCitas, borrarCitas}) => {
  return (
    
<Card style={{ width: "18rem" }} className="posicionCard">
        <Card.Title>Paciente: {nombreCitas}</Card.Title>
        <hr />
        <Card.Body>
          Hora: 
          Fecha:
          <Card.Text>
            
          </Card.Text>
          <Button
            variant="danger"
            onClick={() => {
              borrarCitas(nombreCitas);
            }}
          >
            Borrar Cita
          </Button>
        </Card.Body>
      </Card>
    
  

    
      
  
  );
};
export default ItemCitas;