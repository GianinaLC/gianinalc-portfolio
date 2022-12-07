import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Inicio from './components/Inicio/Inicio'
import Formacion from './components/Formacion/Formacion'
import Tecnologias from './components/Tecnologias/Tecnologias'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Formacion />
      <Tecnologias />
      <Footer />
    </div>
  );
}

export default App;
