function calculate(){

    let response
    //armazena o valor retirado do input (formato String)
    const dateValue = document.getElementById('date').value

    //limpa o - da String e transforma num vetor tipo String de três posições
    //dateParts = ["aaaa", "mm", "dd"];
    const dateParts = dateValue.split('-')

    //converte os elementos de cada posição do vetor para inteiro em base 10
    const year = parseInt(dateParts[0],10)
    const month = parseInt(dateParts[1],10)
    const day = parseInt(dateParts[2],10)

    //pegar data atual e separa em ano, mês e dia
    const currentDayOfYear = new Date()

    const currentYear = currentDayOfYear.getFullYear()
    const currentMonth = currentDayOfYear.getMonth() + 1
    const currentDay = currentDayOfYear.getDate()

    //calcula as diferenças
    let years = currentYear - year
    let months = currentMonth - month
    let days = currentDay - day

    //testa se a data de nascimento é maior que a atual
    if(years < 0){
        document.getElementById("response").innerHTML = `Digite uma data válida`
        document.getElementById("response").style.color = "red"
    }

    //teste de ano não bissexto para garantir que não tenha datas 30 e 31 em fev
    if (currentMonth == 2){
        if ((currentYear % 4 == 0 && currentYear % 100 != 0) || (currentYear % 400 == 0)){
            if(currentDay == 30 || currentDay == 31){
                document.getElementById("response").innerHTML = `Digite uma data válida`
                document.getElementById("response").style.color = "red"
            }
        }
        else{
            if(currentDay == 29 || currentDay == 30 || currentDay == 31){
                document.getElementById("response").innerHTML = `Digite uma data válida`
                document.getElementById("response").style.color = "red"
            }
        }
    }
    
    response = document.getElementById("response").innerHTML = `You have ${years} years, ${months} months, and ${days} days old.`;


}