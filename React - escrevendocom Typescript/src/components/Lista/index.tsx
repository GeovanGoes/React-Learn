import React, { useState } from 'react';
import { Interface } from 'readline';
import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss'



//Essa interface é pra agrupar as props passadas pro funcion component
//selecionarTarefa é como se passa uma function como param através de props
interface NomeQueEuQuiser {
    tarefasProp: ITarefa[],
    selecionarTarefa: (tarefaSelecionada: ITarefa) => void
}

//Isso é um function component
// poderia passar também como nomeQualquer: NomeQueEuQuiser sendo que dessa forma teria que referenciar nomeQualquer.tarefasProp
function Lista({tarefasProp, selecionarTarefa}: NomeQueEuQuiser) {
    console.log('Renderizando Lista')
    //{...item} é uma desestruturacao, porque os props que o component Item recebe tem os mesmos nomes que o objeto tarefa que está presnte na lista, se não fossem iguais seria necessário passar um a um
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos dos dia</h2>
            <ul>
                {
                    tarefasProp.map((item) => {
                        return (
                            <Item 
                                selecionarTarefa={selecionarTarefa}
                                key={item.id} 
                                {...item}/>
                        )
                    })
                }
            </ul>
        </aside>
    )

}


export default Lista;