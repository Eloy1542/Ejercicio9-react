import React from "react";
import ItemCitas from "./ItemCitas";

const ListaCitas = ({ arregloCitas, borrarCitas }) => {
  return (
    <section className="row">
      {arregloCitas.map((citas, posicion) => (
        <div className="col-12 col-md-6 col-lg-4 mb-4 posicionCard">
          <ItemCitas
            key={posicion}
            nombreCitas={citas}
           

            borrarCitas={borrarCitas}
          ></ItemCitas>
        </div>
      ))}
    </section>
  );
};
export default ListaCitas;
