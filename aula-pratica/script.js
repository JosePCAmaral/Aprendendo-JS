function carregar(){
    var data = new Date()
    var hr = window.document.getElementById('hr')
    var img = window.document.getElementById('image')
    var body = window.document.getElementById('bd')
    var h = data.getHours()
    hr.innerHTML = `Agora são ${h}:00hr`
    if(h < 12){
        img.src = 'pexels-gareth-davies-230510-910411.jpg'
        body.style.background = '#f5cf73'
    }else if(h >= 12 && h < 18){
        img.src = 'pexels-george-desipris-858241.jpg'
        body.style.background = '#96501d'
    }else{
        img.src = 'pexels-enricoperini-705425.jpg'
        body.style.background = '#2d2d45'
    }
}
    

    
