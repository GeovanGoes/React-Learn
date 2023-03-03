



export function tempoParaSegudos(tempo: string | undefined) {

    if (tempo) {
        const [horas = '0', mins = '0', segs = '0'] = tempo.split(':');
        const horaEmSegundos = Number(horas) * 3600;
        const minsEmSegundos = Number(mins) * 60;
        return horaEmSegundos + minsEmSegundos + Number(segs);
    }
    return 0;
}

