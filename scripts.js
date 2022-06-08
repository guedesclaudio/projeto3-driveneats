var x;
variaveis = []

function selecionaItem1 () {
    document.getElementById('prato1').style.border = "4px solid green"
    document.getElementById('prato2').style.border = "none"
    document.getElementById('prato3').style.border = "none"
    document.getElementById('select-img1').style.display = "initial"
    document.getElementById('select-img2').style.display = "none"
    document.getElementById('select-img3').style.display = "none"
}

console.log(variaveis)

function selecionaItem2 () {
    document.getElementById('prato1').style.border = "none"
    document.getElementById('prato2').style.border = "4px solid green"
    document.getElementById('prato3').style.border = "none"
    document.getElementById('select-img1').style.display = "none"
    document.getElementById('select-img2').style.display = "initial"
    document.getElementById('select-img3').style.display = "none"
}

function selecionaItem3 () {
    document.getElementById('prato1').style.border = "none"
    document.getElementById('prato2').style.border = "none"
    document.getElementById('prato3').style.border = "4px solid green"
    document.getElementById('select-img1').style.display = "none"
    document.getElementById('select-img2').style.display = "none"
    document.getElementById('select-img3').style.display = "initial"
    
}

function selecionaBebida1 () {
    document.getElementById('bebida1').style.border = "4px solid green"
    document.getElementById('bebida2').style.border = "none"
    document.getElementById('bebida3').style.border = "none"
    document.getElementById('select-bebida1').style.display = "initial"
    document.getElementById('select-bebida2').style.display = "none"
    document.getElementById('select-bebida3').style.display = "none"
    y = 1
}

function selecionaBebida2 () {
    document.getElementById('bebida1').style.border = "none"
    document.getElementById('bebida2').style.border = "4px solid green"
    document.getElementById('bebida3').style.border = "none"
    document.getElementById('select-bebida1').style.display = "none"
    document.getElementById('select-bebida2').style.display = "initial"
    document.getElementById('select-bebida3').style.display = "none"
    y = 1
}

function selecionaBebida3 () {
    document.getElementById('bebida1').style.border = "none"
    document.getElementById('bebida2').style.border = "none"
    document.getElementById('bebida3').style.border = "4px solid green"
    document.getElementById('select-bebida1').style.display = "none"
    document.getElementById('select-bebida2').style.display = "none"
    document.getElementById('select-bebida3').style.display = "initial"
    y = 1
}

function selecionaSobremesa1 () {
    document.getElementById('sobremesa1').style.border = "4px solid green"
    document.getElementById('sobremesa2').style.border = "none"
    document.getElementById('sobremesa3').style.border = "none"
    document.getElementById('select-sobremesa1').style.display = "initial"
    document.getElementById('select-sobremesa2').style.display = "none"
    document.getElementById('select-sobremesa3').style.display = "none"
    z = 1
}

function selecionaSobremesa2 () {
    document.getElementById('sobremesa1').style.border = "none"
    document.getElementById('sobremesa2').style.border = "4px solid green"
    document.getElementById('sobremesa3').style.border = "none"
    document.getElementById('select-sobremesa1').style.display = "none"
    document.getElementById('select-sobremesa2').style.display = "initial"
    document.getElementById('select-sobremesa3').style.display = "none"
    z = 1
}

function selecionaSobremesa3 () {
    document.getElementById('sobremesa1').style.border = "none"
    document.getElementById('sobremesa2').style.border = "none"
    document.getElementById('sobremesa3').style.border = "4px solid green"
    document.getElementById('select-sobremesa1').style.display = "none"
    document.getElementById('select-sobremesa2').style.display = "none"
    document.getElementById('select-sobremesa3').style.display = "initial"
    z = 1
}



if (true) {
    console.log('passando')
    document.getElementById('botao-envia').style.background = "green"
}
