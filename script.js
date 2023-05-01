function somar(){
    let n1 = parseFloat(document.querySelector("#n1").value)
    let n2 = parseFloat(document.querySelector("#n2").value)

    let somando = n1 + n2
    let res = document.querySelector("#res")

    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${somando}.`
}

function subtracao(){
    let n1 = parseFloat(document.querySelector("#n1").value)
    let n2 = parseFloat(document.querySelector("#n2").value)

    let subtracao = n1 - n2
    let res = document.querySelector("#res")

    res.innerHTML = `A subtração entre ${n1} e ${n2} é igual a ${subtracao}.`
}

function multiplicar(){
    let n1 = parseFloat(document.querySelector("#n1").value)
    let n2 = parseFloat(document.querySelector("#n2").value)

    let multiplicar = n1 * n2
    let res = document.querySelector("#res")

    res.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a ${multiplicar}.`
}

function dividir(){
    let n1 = parseFloat(document.querySelector("#n1").value)
    let n2 = parseFloat(document.querySelector("#n2").value)

    let dividir = n1 / n2
    let res = document.querySelector("#res")

    res.innerHTML = `A divisão entre ${n1} e ${n2} é igual a ${dividir}.`
}