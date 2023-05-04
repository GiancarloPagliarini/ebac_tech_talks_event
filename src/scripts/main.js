AOS.init()

const dataEvento = new Date("Aug 07, 2024 19:00:00") // aqui criamos a data do evento, passando como argumento o - mes dia, ano horário
const timeStempEvento = dataEvento.getTime() // aqui estou pegando o timeStemp do dia do evento (aquele valor em milisegundos)

const contaTempo = setInterval(function() { // aqui é o nosso intervalo, onde ele irá repetir essa função a cada 100ms 
    const tempoAtual = new Date() //aqui capturo o dia atual
    const timeStempTempoAtual = tempoAtual.getTime() // aqui pego o timeStemp do dia atual
    const timer = document.getElementById('contador')

    const distanciaAteEvento = timeStempEvento - timeStempTempoAtual // aqui faço a diferença entra o dia atual e o dia do evento (em ms)

    // aqui separamos os valores que estavam em MS 
    const diasMs = 1000 * 60 * 60 * 24 
    const horasMs = 1000 * 60 * 60
    const minMs = 1000 * 60

    const diasAteEvento = Math.floor(distanciaAteEvento / diasMs) //aqui pego quantos dias faltam
    const horasAteEvento = Math.floor((distanciaAteEvento % diasMs) / horasMs) // quantas horas faltam
    const minAteEvento = Math.floor((distanciaAteEvento % horasMs) / minMs) // quantos min faltam
    const segAteEvento = Math.floor((distanciaAteEvento % minMs) / 1000) //quantos segundos faltam
    // lembrando que a % significa o resto da divisão, lembre que está tudo em milissegundos (ms)
    // por isso fazemos a conversão

    timer.innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minAteEvento}m ${segAteEvento}s`

    if (distanciaAteEvento < 0) {
        timer.innerHTML = `O evento já acabou :(`

        clearInterval(contaTempo) //aqui fazemos a verificação se o tempo já passou para ele parar com o nosso intervalo
    }
}, 1000)


