import './App.css';
import Header from './components/Header';

const name = 'Görkem';
const surname = 'Durgun';
const isLogged = false;

function App() {
  return (
    <div>

      <h2>
        {
          isLogged 
          ? `Adım ${name}, soyadım ${surname}` 
          : 'Giriş Yapın'
        }
      </h2>

    </div>
  );
}

export default App;
