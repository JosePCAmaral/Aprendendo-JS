    var b = window.document.getElementById('botao')
    b.addEventListener('click', mostrar)
    
    

function mostrar(){
    var date = new Date()
    var anoa = date.getFullYear()
    var res = window.document.getElementById('res')
    var ano = Number(window.document.getElementById('iano').value)
    var idade = anoa - ano

    if(idade <= 0 || idade >=150){
        window.alert('[ERRO] tente novamente')
    }
    else{

        var fsex = window.document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade <=4){
                img.setAttribute('src', 'imagens2/bebeinho.jpg')
            }else if(idade > 4 && idade <=10){
                img.setAttribute('src', 'imagens2/menino.jpg')
            }else if(idade > 10 && idade <=18){
                img.setAttribute('src', 'imagens2/menino adolescente.jpg')
            }else if(idade > 18 && idade <=30){
                img.setAttribute('src', 'imagens2/homem jovem.jpg')
            }else if(idade > 30 && idade <=60){
                img.setAttribute('src', 'imagens2/homem meia idade.jpg')
            }else if(idade > 60){
                img.setAttribute('src', 'imagens2/homem idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Feminino'
            if(idade <=4){
                img.setAttribute('src', 'imagens2/bebezinha.jpg')
            }else if(idade > 4 && idade <=10){
                img.setAttribute('src', 'imagens2/menina.jpg')
            }else if(idade > 10 && idade <=18){
                img.setAttribute('src', 'imagens2/menina adolescente.jpg')
            }else if(idade > 18 && idade <=30){
                img.setAttribute('src', 'imagens2/mulher joven.jpg')
            }else if(idade > 30 && idade <=60){
                img.setAttribute('src', 'imagens2/mulher meia idade.jpg')
            }else if(idade > 60){
                img.setAttribute('src', 'imagens2/mulher idosa.jpg')
            }
        }
        res.innerHTML = `<p>Detectamos uma pessoa de genero ${genero} com ${idade} anos!</p>`
        res.appendChild(img)
        img.style.width = '300px'
        img.style.height = '200px'
    }
}