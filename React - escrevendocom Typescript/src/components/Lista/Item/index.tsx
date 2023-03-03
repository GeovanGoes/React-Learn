import { spawn } from 'child_process';
import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

interface OtoNomeQueEuQuiser extends ITarefa{
    selecionarTarefa: (tarefaSelecionada: ITarefa) => void
}


export default function Item({tarefa, tempo, selecionado, completado, id, selecionarTarefa}: OtoNomeQueEuQuiser) {


    console.log('Renderizando Item')

    return (
        <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''} `} 
        onClick={() => !completado && selecionarTarefa({
            tarefa,
            tempo, 
            selecionado,
            completado,
            id
        })}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
            {completado && <span className={style.concluido} aria-label="tarefa-conpletada"></span>}
        </li>
    )

}