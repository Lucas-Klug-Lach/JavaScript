var agora = new Date()
var diaSem = agora.getDay()

/*
    * Sequencia do Switch
    
    Domingo  = 1
    Segunda = 2
    Terça = 3
    Quarta = 4
    Quinta = 5
    Sexta = 6
    Sábado = 7

    * O Codigo funciona assim:
    * Ele Funciona Puxando o dia do sistema e pega e solta no Console
*/
//console.log(diaSem)

switch(diaSem){
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda')
        break
    case 3:
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sexta')
        break
    case 7:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido')
        break    
}