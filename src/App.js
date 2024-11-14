import './App.css';
import Navbarcom from './component/header/navcomp/Navbarcom';
import Home from './component/HomeCom/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <div className="App">
        <Navbarcom />
        <Home />

      </div>
    </>
  );
}

export default App;
