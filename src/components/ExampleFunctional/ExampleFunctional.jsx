import { useState } from "react";
import ExampleFunctionalChild from "../ExampleFunctionalChild/ExampleFunctionalChild";

const ExampleFunctional = () => {
    const [show, setShow] = useState(true);
  
    const handleRemove = () => setShow(false);
  
    return (
      <div>
        {show ? <ExampleFunctionalChild /> : null}
        <button onClick={handleRemove}>Eliminar el componete ExampleFunctionalChild</button>
      </div>
    );
  };
  export default ExampleFunctional;
  