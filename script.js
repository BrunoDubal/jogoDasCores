/** 
 * Definir cores
 * Sortear cor certa
 * Verificar resposta
 *  **/

window.onload = function(){
  var c = 1

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var red = getRandomIntInclusive(0, 255)
  var green = getRandomIntInclusive(0, 255)
  var blue = getRandomIntInclusive(0, 255)
  const colormain = 'rgb(' + red + ',' + green + ',' + blue + ')'

  document.getElementById('red').innerHTML = red
  document.getElementById('green').innerHTML = green
  document.getElementById('blue').innerHTML = blue

  sort = getRandomIntInclusive(1, 6)
  while(c < 7) {
    var red = getRandomIntInclusive(0, 255)
    var green = getRandomIntInclusive(0, 255)
    var blue = getRandomIntInclusive(0, 255)
    color = 'rgb(' + red + ',' + green + ',' + blue + ')'
    if (c == sort){
      document.getElementById(`color${c}`).style.backgroundColor = colormain
    } else {
      document.getElementById(`color${c}`).style.backgroundColor = color
    }
    c++
  }

  var res = document.getElementById(`color${sort}`)
  res.onclick = function(){
    document.getElementById('title').innerHTML = 'Voce Venceu'
  }
}