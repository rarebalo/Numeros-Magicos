const tomarTexto = () => {
  const numeroDelUsuario = document.getElementById("textoPrediccion");
  comprobarNumero(numeroDelUsuario.value);
};
function numeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function comprobarNumero(numero) {
    if (parseInt(numero) === numeroMagico ) {
        alert(`Feliciades!, tienes una gran intuicion! el numero era: ${numeroMagico}`)
    } else if(parseInt(numero) > numeroMagico){
        alert(`Tu numero es algo mas grande que el numero magico...`)
    } else{
        alert(`Tu numero es menor que el numero magico...`)
    }
}

let numeroMagico = numeroAleatorio(0, 100);
