    var b = window.document.getElementById('botao')
    b.addEventListener('click', mostrar)
    var date = new Date()
    var anoa = date.getFullYear()
    var res = window.document.getElementById('res')

function mostrar(){
    var ano = Number(window.document.getElementById('iano').value)
    var idade = anoa - ano
    if(idade <= 0){
        window.alert
    }
}