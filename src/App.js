import logo from './logo.svg';
import './App.css';

import {
  MyClassComponent,
  MyFunctionComponent
} from './components';

function ComponenteHijo({ children }) {
  return (
    <p>{children}</p>
  );
}

function App() {
  
  const tasks = [
    { name: "My first task", description: "A little description" }, // 0
    { name: "Another task", description: "kzmdclmdkvskvj" },        // 1
    { name: "An extra task", description: "sdlkvmdsklvmkdjfb" }     // 2
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p></p>
        </div>


        <MyClassComponent name="Mariana" age="20" tasks={tasks}>
          <p>Este es mi parrafo hijo</p>
          <ComponenteHijo>
            Este es mi componente hijo
          </ComponenteHijo>
        </MyClassComponent>
        
        <MyFunctionComponent name="Jonathan" age="23" tasks={tasks}/>


      </header>
    </div>
  );

}

export default App;
