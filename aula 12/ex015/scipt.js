function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('ano')
var res = document.querySelector('div#res')
if(fano.value.length == 0 || Number(fano.value) > ano){
  alert('[ERRO] Verifique os dados e tente novamente!')
}else{
  var fsex = document.getElementsByName('radsex')
  var idade = ano - Number(fano.value)
  var gênero = ''
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')
  if(fsex[0].checked){
    gênero = `Homem` 
    if(idade >= 0 && idade < 10 ){
      //Crinça
      img.setAttribute('src', 'imagem/foto-bebe-m.png')
    }else if(idade < 21){
      // jovem
      img.setAttribute('src', 'imagem/foto-jovem-m.png')
    }else if(idade < 50){
      //adulto
      img.setAttribute('src', 'imagem/foto-adulto-m.png')
    }else{
      // idoso
      img.setAttribute('src', 'imagem/foto-idoso-m.png')
    }
  }else{
    gênero = `Mulher`
    if(idade >=0 && idade <10 ){
      //Crinça
      img.setAttribute('src', 'imagem/foto-bebe-f.png')
    }else if(idade < 21){
      // jovem
      img.setAttribute('src', 'imagem/foto-jovem-f.png')
    }else if(idade < 50){
      //adulto
      img.setAttribute('src', 'imagem/foto-adulto-f.png')
    }else{
      // idoso
      img.setAttribute('src', 'imagem/foto-idoso-f.png')
    }
  }
  res.style.textAlign = 'center'
  res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
  res.appendChild(img)//adiciona um elemento. No caso a tag img
}
 
}