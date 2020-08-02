import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'; 
import CadastroVideo from './pages/cadastro/Video'; 



// criando as rotas de páginas 
ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component = {Home} exact /> 
    <Route path="/cadastro/video" component = {CadastroVideo} /> 
    {/* Mostrar página 404 */}
    <Route component = { () => (<div>Página</div>)} /> 
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

