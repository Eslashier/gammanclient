import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Proyectos from './pages/Proyectos';
import Home from './pages/Home';
import NuestrosProyectos from './pages/NuestrosProyectos';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';
import Login from './components/Auth/Login';
import FormEditar from './components/Proyectos/FormEditar';
import Registro from './components/Auth/Registro';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/nuestros-proyectos' component={NuestrosProyectos}/>
          <Route exact path='/sobre-nosotros' component={SobreNosotros}/>
          <Route exact path='/contacto' component={Contacto}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/registro' component={Registro}/>
          <Route exact path='/proyectos' component={Proyectos } />
          <Route exact path='/proyectos/editar/:id' component={FormEditar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
