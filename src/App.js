import logo from './logo.svg';
import './App.css';

import {
  MyClassComponent,
  MyFunctionComponent
} from './components';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">


        <MyClassComponent/>
        <MyFunctionComponent/>


      </header>
    </div>
  );

}

export default App;
