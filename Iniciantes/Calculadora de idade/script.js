function calculate(){
    //armazena o valor retirado do input (formato String)
    const dateValue = document.getElementById('date').value

    //limpa o - da String e transforma num vetor tipo String de três posições
    //dateParts = ["aaaa", "mm", "dd"];
    const dateParts = dateValue.split('-')

    //converte os elementos de cada posição do vetor para inteiro em base 10
    const year = parseInt(dateParts[0],10)
    const month = parseInt(dateParts[1],10)
    const day = parseInt(dateParts[2],10)

    return document.write(`Dia é ${day}, Mês é ${month}, Ano é ${year}.`)
}