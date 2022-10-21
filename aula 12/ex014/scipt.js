function carregar(){
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  msg.innerHTML = `Agora são ${hora} horas é ${min} minutos.`
  if(hora <= 5){
    // Boa madrugada!
    //rgb(59 22 79)
    img.src = 'imagem/madrugada.jpg'
    document.body.style.background = '#330033'
  }else if(hora <= 12){
    // Bom dia!
    //rgb(251,179, 44)
    img.src = 'imagem/manha.jpg'
    document.body.style.background = 'rgb(247 189 84)'
  }else if(hora <= 18){
    // Boa tarde!
    //rgb(29 62 96)
    img.src = 'imagem/tarde.jpg'
    document.body.style.background = 'rgb(29 62 96)'
  }else{
    // Boa noite!
    //rgb(16 17 30)
    img.src = 'imagem/noite.jpg'
    document.body.style.background = 'rgb(16 17 30)'
  }
}