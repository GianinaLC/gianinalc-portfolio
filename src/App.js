import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Inicio from './components/Inicio/Inicio'
import SobreMi from './components/SobreMi/SobreMi'
import Tecnologias from './components/Tecnologias/Tecnologias'
import Formacion from './components/Formacion/Formacion'
import Proyectos from './components/Proyectos/Proyectos'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />
        <Inicio />
        <SobreMi />
        <Formacion />
        <Tecnologias />
        <Proyectos />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
