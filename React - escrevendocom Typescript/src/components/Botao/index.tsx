import React from 'react';
import style from './Botao.module.scss'

//Isso é um class component
class Botao extends React.Component<{texto: string}> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}


export default Botao;

