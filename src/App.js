import './App.css';
import User from './components/User';

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

function App() {
  return (

    <div>

      <User 
      name="Görkem"
      surname="Durgun"
      isLogged={true}
      age='24'
      address={{
        city: 'İzmir',
        zipcode: 35110,
      }}
      favSingers={favSingers}
      />

    </div>
    
  );
}

export default App;
