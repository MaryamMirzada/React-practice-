import { createDefaultImportMeta } from "vite/module-runner";
import Info from "./Info";

function App() {
  return (
    <>
      {/* <h1>React</h1>
      <p>react is the library of JavaScript that works component base.</p>
      <Info name="Maryam" role="teacher"></Info>
      <Info name="Nasiba" role="Web designer"></Info>
      <Info name="Ahmad" role="Doctor"></Info>
      <Info name="Monir" role="Nurse"></Info>
      <Info name="Mina" role="Engineer"></Info> */}
      <Info>
        <h1>Hello world</h1>
        <p>it is the first session of our class</p>
        <ul>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
        </ul>
      </Info>
    </>
  );
}

export default App;
