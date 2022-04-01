function Converter() {
    //var valorEmLibraTexto = ("Qual o valor em libras você quer converter?")
    var res = document.getElementById('lib').value
    var result = document.getElementById('resultado')
    //var valorEmLibraNumero = parseFloat(valorEmLibraTexto)
    var valorEmDolar = res * 1.39
    var valorEmDolarFixado = valorEmDolar.toFixed(2)
    console.log(valorEmDolarFixado)
    result.innerHTML = "US$" + valorEmDolarFixado
    
    }
     