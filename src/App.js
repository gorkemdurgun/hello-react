import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';

/*
const favSingers = [
  {
    name: "Güneş",
    age: 22,
  },
  {
    name: "Drake",
    age: 37,
  },
  {
    name: "Murda",
    age: 32,
  },
];
*/

function App() {
  const [visible, setVisible] = useState(true);

  return (

    <div>

      {visible && <Counter />}

      <br />

      <button
        onClick={() => setVisible(!visible)}>
        set visible
      </button>

    </div>

  );
}

export default App;
