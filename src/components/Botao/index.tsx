import React from "react";
import style from'./Botao.module.scss';
import Iprops from '../IProps';

interface Props {
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Botao({children, onClick, type }: Props) {
    return (
        <button type={type} className={style.botao} onClick={onClick}>
            {children}
        </button>
    )
}
export default Botao;