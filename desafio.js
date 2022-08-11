let nome = prompt("digite seu nome")

let idade = parseInt(prompt("digite sua idade"))
const s = true
const n = false
let estaAcompanhado 

if (prompt("está acompanhado? digite s ou n")==s) {
    estaAcompanhado=true
} else if (estaAcompanhado=true&&idade>=18) {
    alert(`Entrada permitida para ${nome}: Conceder desconto`)
}

if (prompt("Está acompanhado? digite s ou n")==n){
    estaAcompanhado=false
} else if (estaAcompanhado=false && idade>=18){
    alert(`Entrada permitida para ${nome}: valor integral`)
}

if(idade<18) {
    alert(`entrada não permitida ara ${nome}: menor de idade!`)
}



