import { useEffect } from "react";

const ExampleFunctionalChild = () => {
  //componentWillUnmount
  useEffect(() => {
    return () => {
      alert("El componente ExampleChild ha sido eliminado(desmontado).");
    };
  });
  return <h1>Hola The Bridge!</h1>;
};

export default ExampleFunctionalChild;
