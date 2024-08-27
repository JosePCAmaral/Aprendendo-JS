var tab = document.getElementById('seltab')
var res = document.getElementById('res')
var v = []

function adicionar(){
    var num = document.getElementById('inum')
    if(num.value.length == 0){
        window.alert('Digite um número para adicionar')
    }else{
        var n = Number(num.value)
        if(n > 0 && n > 100){
            window.alert('Só adicionamos numeros entre 1 a 100')
        }else{
            var item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            tab.appendChild(item)
            v.push(n)
        }
    }
}