// import React from "react";

// export default class Example extends React.Component {
//   constructor() {
//     super();
//     this.state = { favoriteColor: "red" };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoriteColor: "yellow" });
//       setTimeout(() => {
//         this.setState({ favoriteColor: "green" });
//       }, 3000);
//     }, 3000);
//   }

//   componentDidUpdate() {
//     console.log("el componente se ha actualizado");
//   }

//   render() {
//     return <h1>My Favorite Color is {this.state.favoriteColor}</h1>;
//   }
// }

import React, { useState, useEffect } from "react";

const Example = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  const [counter, setCounter] = useState(0);
  //   useEffect(()=>{},[]) componentDidMount()

  useEffect(() => {
    setTimeout(() => {
      setFavoriteColor("yellow");
    }, 3000);
  }, []);

  //  useEffect(()=>{}) componentDidUpdate()
  useEffect(() => {
    console.log("el componente se ha actualizado");
  });
  useEffect(() => {
    console.log("favoriteColor se ha actualizado");
  }, [favoriteColor]);

  return (
    <div>
      <h1>My Favorite Color is {favoriteColor}</h1>
      <h2 onClick={()=>setCounter(counter +1)}>{counter}</h2>
    </div>
  );
};

export default Example;
