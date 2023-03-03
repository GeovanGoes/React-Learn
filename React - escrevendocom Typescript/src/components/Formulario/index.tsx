import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss'
import { v4 as uuidv4 } from 'uuid'

//Aqui foi possível renomear o setState para 
class Formulario extends React.Component<{
    addTarefaNoEstado: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    
    //Num statefull component como é nesse caso devemos declarar o estado logo antes da function render(). o seState já vem por herança não é possível renomear
    state = {
        tarefa: '',
        tempo: '00:00'
    };


    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.addTarefaNoEstado(tarefasAntigas => [ ... tarefasAntigas, { ... this.state, selecionado: false, completado: false, id: uuidv4()} ])
        this.setState({
            tarefa: "",
            tempo: "00:00"
        });
    }

    render() {
        console.log('Renderizando Formulario')
        //Necessário adicionar o .bind(this) para que a funcao adicionarTarefa tenha acesso ao escopo da class
        return  (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({ ... this.state, tarefa: evento.target.value })}
                        required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                        type="time" 
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.tempo}
                        onChange={evento => this.setState({ ... this.state, tempo: evento.target.value })} 
                        required/>
                </div>
                <Botao type="submit" texto="Adicionar"/>
            </form>
        )
    }


}
export default Formulario;