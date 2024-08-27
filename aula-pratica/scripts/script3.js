var b = document.getElementById('ibotao')
b.addEventListener('click', contar)

function contar(){
    var contando = document.getElementById('pro')
    var inicio = Number(document.getElementById('iinicio').value)
    var final = Number(document.getElementById('ifim').value)
    var passos = Number(document.getElementById('ipassos').value)
    if(final <= 0){
        window.alert('Numero Final não pode ser menor ou igual a 0')
    }else if(passos <= 0){
        window.alert('Numero de passos não pode ser menor ou igual a 0')
    }else{
        contando.innerHTML = `<p>Contando:</p>`
        for(i = inicio; i <= final; i += passos){
        contando.innerHTML +=`${i} \u{1F449} `
        }
    }
    contando.innerHTML +=` \u{1F3C1} `
}