import React, { useEffect, useState } from "react";
import LayoutsCard from "layouts/card";

const Edad = () => {
  const [edad, setEdad] = useState(0); 
  const [esMenor, setEsMenor] = useState(false);

  useEffect(() => {
    if(edad >= 18){
      setEsMenor(true);
    } 
    else{
      setEsMenor(false);
    }
  }, [edad]);

  return (
    <>
      <LayoutsCard >
        <form className="needs-validation" noValidate>
          <div className="card-body">
            <div className="form-group">
              <label>Edad</label>
              <input
                value={edad}
                onChange={(e) => {
                  setEdad(e.target.value);
                }}
                name="edad"
                type="number"
                className="form-control"
              />
            </div>
            { esMenor ? ( <span>Es MAYOR de edad</span> ) : ( <span>Es MENOR de edad</span> ) }
            
            
          </div>
        </form>
      </LayoutsCard>
    </>
  );
};

export default Edad;
