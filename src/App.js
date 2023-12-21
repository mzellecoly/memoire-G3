import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Memoire from './composants/memoire/Memoire';
const App = () => {
  return (
    <Routes>
      <Route>
        {/* <Route path="/" exact component={Accueil} /> */}
        {/* <Route path="/ajout-memoire" component={AjoutMemoire} /> */}
        <Route path="/" element={<Memoire/>} />
        {/* <Route path="/profil" component={Profil} /> */}
        {/* <Route path="/login" component={Login} /> */}
      </Route>
    </Routes>
  );
};

export default App;

