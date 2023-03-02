import React from 'react';
import logo from './logo.svg';
import style from './App.module.scss'

import Formulario from '../components/Formulario';
import Lista from '../components/Lista';

function App() {
  return (
    <div className={style.AppStyle}>
      
      <Formulario></Formulario>
      <Lista></Lista>
    </div>
  );
}

export default App;
