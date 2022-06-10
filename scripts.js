let prato = 0
let bebida = 0
let sobremesa = 0
let precoComida = 0
let precoBebida = 0
let precoSobremesa = 0
let nome = 0
let endereco = 0

function mudaBotao () {
    if (prato != 0 && bebida != 0  && sobremesa != 0 ) {
        console.log('passando')
        document.getElementById('botao-envia').style.background = "#32B72F"
        document.getElementById('texto-botao').innerHTML = '<h1 onclick = "confirmaPedido()">Fechar pedido</h1>'
    }
}

function calculaPreco () {
    total = precoComida + precoBebida + precoSobremesa
    console.log(total)
    return total
}

function confirmaPedido() {
    nome = prompt('Qual o seu nome?')
    endereco = prompt('Qual o seu endereço?')

    document.querySelector('.container').classList.add('pausa-layout')
    document.querySelector('body').classList.add('pausa-body')
    document.querySelector('.escondido').classList.remove('escondido')
    document.querySelector('.confirma-pedido').classList.add('box-final')
    document.querySelector('.box-final').innerHTML = `
    <h1>Confirme seu pedido</h1>
    <div><div>${prato}</div><div>${precoComida.toFixed(2)}</div></div>
    <div><div>${bebida}</div><div>${precoBebida.toFixed(2)}</div></div>
    <div><div>${sobremesa}</div><div>${precoSobremesa.toFixed(2)}</div></div>
    <div><div><strong>TOTAL</strong></div><div>R$ ${total.toFixed(2)}</div></div>
    <div class="alinha-botao"><button onclick="enviaWpp()">Tudo certo, pode pedir</button></div>
    <h4 onclick="cancelaPedido()">Cancelar</h4>
    `
}

function cancelaPedido() {
    location.reload()
}

function enviaWpp() {
    //nome = prompt('Qual o seu nome?')
    //endereco = prompt('Qual o seu endereço?')

    var str = `
    Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${total.toFixed(2)}

    Nome: ${nome}
    Endereço: ${endereco}
    `
    texto = encodeURIComponent(str);
    var link = `https://api.whatsapp.com/send?phone=5521999570191&text=${texto}`;

    setTimeout(function() {window.open(link)}, 1000)
  }

function selecionaItem1 () {
    document.getElementById('prato1').style.border = "3px solid #32B72F"
    document.getElementById('prato2').style.border = "3px solid white"
    document.getElementById('prato3').style.border = "3px solid white"
    document.getElementById('select-img1').style.display = "initial"
    document.getElementById('select-img2').style.display = "none"
    document.getElementById('select-img3').style.display = "none"

    prato = 'Frango Yin Yang'
    precoComida = 14.90

    mudaBotao()
    calculaPreco()
}


function selecionaItem2 () {
    document.getElementById('prato1').style.border = "3px solid white"
    document.getElementById('prato2').style.border = "3px solid #32B72F"
    document.getElementById('prato3').style.border = "3px solid white"
    document.getElementById('select-img1').style.display = "none"
    document.getElementById('select-img2').style.display = "initial"
    document.getElementById('select-img3').style.display = "none"

    prato = 'Frango Yin Yang'
    precoComida = 14.90

    mudaBotao()
    calculaPreco()
}

function selecionaItem3 () {
    document.getElementById('prato1').style.border = "3px solid white"
    document.getElementById('prato2').style.border = "3px solid white"
    document.getElementById('prato3').style.border = "3px solid #32B72F"
    document.getElementById('select-img1').style.display = "none"
    document.getElementById('select-img2').style.display = "none"
    document.getElementById('select-img3').style.display = "initial"

    prato = 'Frango Yin Yang'
    precoComida = 14.90

    mudaBotao()
    calculaPreco()
}

function selecionaBebida1 () {
    document.getElementById('bebida1').style.border = "3px solid #32B72F"
    document.getElementById('bebida2').style.border = "3px solid white"
    document.getElementById('bebida3').style.border = "3px solid white"
    document.getElementById('select-bebida1').style.display = "initial"
    document.getElementById('select-bebida2').style.display = "none"
    document.getElementById('select-bebida3').style.display = "none"
    y = 1

    bebida = 'Coquinha Gelada'
    precoBebida = 4.90

    mudaBotao()
    calculaPreco()
}

function selecionaBebida2 () {
    document.getElementById('bebida1').style.border = "3px solid white"
    document.getElementById('bebida2').style.border = "3px solid #32B72F"
    document.getElementById('bebida3').style.border = "3px solid white"
    document.getElementById('select-bebida1').style.display = "none"
    document.getElementById('select-bebida2').style.display = "initial"
    document.getElementById('select-bebida3').style.display = "none"
    y = 1

    bebida = 'Coquinha Gelada'
    precoBebida = 4.90

    mudaBotao()
    calculaPreco()
}

function selecionaBebida3 () {
    document.getElementById('bebida1').style.border = "3px solid white"
    document.getElementById('bebida2').style.border = "3px solid white"
    document.getElementById('bebida3').style.border = "3px solid #32B72F"
    document.getElementById('select-bebida1').style.display = "none"
    document.getElementById('select-bebida2').style.display = "none"
    document.getElementById('select-bebida3').style.display = "initial"
    y = 1

    bebida = 'Coquinha Gelada'
    precoBebida = 4.90

    mudaBotao()
    calculaPreco()
}

function selecionaSobremesa1 () {
    document.getElementById('sobremesa1').style.border = "3px solid #32B72F"
    document.getElementById('sobremesa2').style.border = "3px solid white"
    document.getElementById('sobremesa3').style.border = "3px solid white"
    document.getElementById('select-sobremesa1').style.display = "initial"
    document.getElementById('select-sobremesa2').style.display = "none"
    document.getElementById('select-sobremesa3').style.display = "none"
    z = 1

    sobremesa = 'Pudim'
    precoSobremesa = 7.90

    mudaBotao()
    calculaPreco()
}

function selecionaSobremesa2 () {
    document.getElementById('sobremesa1').style.border = "3px solid white"
    document.getElementById('sobremesa2').style.border = "3px solid #32B72F"
    document.getElementById('sobremesa3').style.border = "3px solid white"
    document.getElementById('select-sobremesa1').style.display = "none"
    document.getElementById('select-sobremesa2').style.display = "initial"
    document.getElementById('select-sobremesa3').style.display = "none"
    z = 1

    sobremesa = 'Pudim'
    precoSobremesa = 7.90

    mudaBotao()
    calculaPreco()
}

function selecionaSobremesa3 () {
    document.getElementById('sobremesa1').style.border = "3px solid white"
    document.getElementById('sobremesa2').style.border = "3px solid white"
    document.getElementById('sobremesa3').style.border = "3px solid #32B72F"
    document.getElementById('select-sobremesa1').style.display = "none"
    document.getElementById('select-sobremesa2').style.display = "none"
    document.getElementById('select-sobremesa3').style.display = "initial"
    z = 1

    sobremesa = 'Pudim'
    precoSobremesa = 7.90

    mudaBotao()
    calculaPreco()
}



