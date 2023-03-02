import React from 'react';
import Item from './Item';
import style from './Lista.module.scss'

//Isso é um function component
function Lista() {

    const tarefas = [
        {
            tarefa: 'React', 
            tempo: '02:00:00'
        },
        {
            tarefa: 'Javascript', 
            tempo: '01:30:00'
        },
        {
            tarefa: 'Typescript', 
            tempo: '00:30:00'
        }
    ];

    //{...item} é uma desestruturacao, porque os props que o component Item recebe tem os mesmos nomes que o objeto tarefa que está presnte na lista, se não fossem iguais seria necessário passar um a um
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos dos dia</h2>
            <ul>
                {
                    tarefas.map((item, index) => {
                        return (
                            <Item 
                            key={index} 
                            {...item}/>
                        )
                    })
                }
            </ul>
        </aside>
    )

}


export default Lista;