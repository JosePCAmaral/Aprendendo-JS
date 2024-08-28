var tab = document.getElementById('seltab')
var res = document.getElementById('res')
var v = []
var res = document.getElementById('res')

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
    res.innerHTML = ''
    num.value = ""
    num.focus()
}

function analizar(){
    if(v.length == 0){
        window.alert(`Adicione valores para procegir!`)
    }else{
        var total = v.length
        var menor = v[0]
        var maior = v[0]
        var soma = 0
        var media = 0

        for(let pos in v){
            soma += v[pos]
            if(maior > v[pos]){
                maior = v[pos]
            }
            if(menor < v[pos]){
                menor = v[pos]
            }
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Vetor: ${v}</p>`
        res.innerHTML += `<p>Sua lista tem ${total} elementos</p>`
        res.innerHTML += `<p>O maior numero da lista é: ${maior} </p>`
        res.innerHTML += `<p>O menor numero da lista é: ${menor} </p>`
        res.innerHTML += `<p>A soma dos elementos é: ${soma} </p>`
        res. innerHTML += `<p>A media do se vetor é: ${media} </p>`
    }
}