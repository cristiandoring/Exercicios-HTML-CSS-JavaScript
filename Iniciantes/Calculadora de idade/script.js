function calculate(){

    let response
    //armazena o valor retirado do input (formato String)
    const dateValue = document.getElementById('date').value.trim()
    
    //limpa o - da String e transforma num vetor tipo String de três posições
    //dateParts = ["aaaa", "mm", "dd"];
    const dateParts = dateValue.split('-')

    //converte os elementos de cada posição do vetor para inteiro em base 10
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);

    //pegar data atual e separa em ano, mês e dia
    const currentDayOfYear = new Date()

    const currentYear = currentDayOfYear.getFullYear()
    const currentMonth = currentDayOfYear.getMonth() + 1 
    const currentDay = currentDayOfYear.getDate()

    //document.getElementById("response").innerHTML = month

    //testa se os anos do usuário é negativo
    if(year < 0){
        document.getElementById("response").innerHTML = `Write a correct date`
        document.getElementById("response").style.color = "red"
    }
    else{
        
        //teste de ano não bissexto para garantir que não tenha datas 30 e 31 em fev
        if (month == 2){
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
                if(day > 29){
                    document.getElementById("response").innerHTML = `Write a correct date`
                    document.getElementById("response").style.color = "red"
                }
            }
            else{
                if(day > 28){
                    document.getElementById("response").innerHTML = `Write a correct date`
                    document.getElementById("response").style.color = "red"
                }
            } 
        }
        else{
            document.getElementById("response").innerHTML = `FOI`
            
        }
    }

    //calcula as diferenças
    let years = currentYear - year
    let months = currentMonth - month
    let days = currentDay - day

    
    
    //response = document.getElementById("response").innerHTML = `You have ${years} years, ${months} months, and ${days} days old.`;


}