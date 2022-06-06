import './App.css'
import Header from '../Header/Header';
import React from 'react';

import Inicio from '../Inicio/Inicio';
import Cadastrar from '../Cadastrar/Cadastrar';

import { Routes, Route } from 'react-router-dom';
import Login from '../Entrar/Login';
import Checklist from '../Checklist/Checklist';
import Questoes from '../Questoes/Questoes';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Inicio />}></Route>
        <Route exact path="/cadastrar" element={<Cadastrar />}></Route>
        <Route exact path="/entrar" element={<Login />}></Route>
        <Route exact path="/checklist" element={<Checklist />}></Route>
        <Route exact path="/checklist/questoes" element={<Questoes />}></Route>
      </Routes>

    </div>
  );
}

export default App;