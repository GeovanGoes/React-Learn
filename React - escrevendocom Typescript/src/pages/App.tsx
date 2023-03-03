import React, { useState } from 'react';
import logo from './logo.svg';
import style from './App.module.scss'

import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Cronometro } from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

//Isso é um function component
function App() {

  console.log('Renderizando App')

// isso é um hook de estado é declarado com array pq o index 0 é o objeto do estado e index 1 é o set do estado, esse set pode ter qualquer nome, bem como o objeto em sí
  const [tarefas, setTarefas] =  useState<ITarefa[] | []>([]);

  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(
      tarefasAnteriores => tarefasAnteriores.map(
        tarefa => ({
          ...
          tarefa,
          selecionado: tarefa.id === tarefaSelecionada.id ? true : false
        })
      )
    );
  }


  function finalizarTarefa() {
    if (selecionado){ 
      setSelecionado(undefined);
      setTarefas(
        tarefasAnteriores => tarefasAnteriores.map(
          tarefa => {
            if (tarefa.id == selecionado.id) {
              return {...tarefa,
                    selecionado: false,
                  completado: true}
            }
            return tarefa;
          }
        )
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      
      <Formulario addTarefaNoEstado={setTarefas}/>
      <Lista tarefasProp={tarefas} selecionarTarefa={selecionaTarefa}/>
      <Cronometro botaPraContar={selecionado} finalizarTarefaProp={finalizarTarefa}/>
    </div>
  );
}

export default App;
