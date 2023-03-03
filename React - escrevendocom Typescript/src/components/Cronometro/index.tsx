import { useEffect, useState } from "react";
import { tempoParaSegudos } from "../../commons/utils/time";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from './Cronometro.module.scss';
import Relogio from "./Relogio";

interface Props {
    botaPraContar: ITarefa | undefined;
    finalizarTarefaProp: () => void
}

export function Cronometro ({botaPraContar, finalizarTarefaProp} : Props) {
    
    console.log('Renderizando Cronometro');

    const [tempo, setTempo] = useState<number>();


    /**
     * primeiro param é uma funcao que será executada assim que algo mudar
     * segundo param é um array de dependencias, são coisas que serão usadas como base para a execucao da funcao do primeiro param
     */
    useEffect(() => {
        setTempo(tempoParaSegudos(botaPraContar?.tempo))
    }, [botaPraContar])



    function regressiva(contador: number = 0){
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador-1)
                return regressiva(contador-1)
            }
            finalizarTarefaProp();
        }, 1000)
    }


    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempoPraContar={tempo}/>
            </div>
            <Botao
                onClick={() => regressiva(tempo)}
                texto="Começar"
            ></Botao>
        </div>
    )
}