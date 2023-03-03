import style from './Relogio.module.scss';


interface Props {
    tempoPraContar: number | undefined
}

export default function Relogio ({ tempoPraContar = 0 }:Props) {
    
    console.log('Renderizando o Relogio');
    
    const mins = Math.floor(tempoPraContar/60);
    const segs = tempoPraContar % 60;

    //Para desestruturar strings em typescript precisa adicionar uma configuração no  tsconfig.json => "downlevelIteration": true
    const [minDez, minUn] = String(mins).padStart(2, '0');
    const [segDez, segUn] = String(segs).padStart(2, '0');


    // Para não precisar de um elemento pai usar <React.Fragment> ou usar uma tag em branco <>
    return (
        <>
            <span className={style.relogioNumero}>{minDez}</span>
            <span className={style.relogioNumero}>{minUn}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segDez}</span>
            <span className={style.relogioNumero}>{segUn}</span>
        </>
    )
}