import './App.css'
import Header from '../Header/Header';
import React, { useContext } from 'react';
import Inicio from '../Inicio/Inicio';
import Cadastrar from '../Cadastrar/Cadastrar';
import { AuthContext } from '../contexts/AuthContext';
import { Routes, Route } from 'react-router-dom';
import Login from '../Entrar/Login';
import Checklist from '../Checklist/Checklist';
import Questoes from '../Questoes/Questoes';
import Avaliacoes from '../Avaliacoes/Avaliacoes';
import Resultado from '../Resultado/Resultado'

function App() {

  const { authenticated } = useContext(AuthContext);

  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Inicio />}></Route>
        <Route exact path="/cadastrar" element={<Cadastrar />}></Route>
        <Route exact path="/entrar" element={<Login />}>{authenticated}</Route>
        <Route exact path="/checklist" element={<Checklist />}></Route>
        <Route exact path="/checklist/questoes" element={<Questoes />}></Route>
        <Route exact path="/avaliacoes" element={<Avaliacoes />}></Route>
        <Route exact path="/resultado" element={<Resultado />}></Route>
      </Routes>

    </div>
  );
}

export default App;