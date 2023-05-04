import "./App.css";
import Counter from "./components/Counter/Counter";
import CounterFunctional from "./components/CounterFunctional/CounterFunctional";
import Example from "./components/Example/Example";
import Example2 from "./components/Example2/Example2";
import ExampleFunctional from "./components/ExampleFunctional/ExampleFunctional";

function App() {
  return (
    <>
      {/* <Counter initialValue={1} />
      <Counter initialValue={6} />
      <CounterFunctional initialValue={3} /> */}
      {/* <Example/> */}
      {/* <Example2/> */}
      <ExampleFunctional/>
    </>
  );
}

export default App;
