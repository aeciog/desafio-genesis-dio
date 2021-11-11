let order = [];
let clickedOrder = [];
let score = 0;

// - 0 - verde
// - 1 - vermelho
// - 2 - amarelo
// - 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// CRIA ORDEM ALEATORIA DE CORES
let shuffleOrder = () => {
   let colorOrder = Math.float(Math.random() * 4);
   order[order.length] = colorOrder;
   clickedOrder = [];

   for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
   }
  }   

// ACENDE A PROXIMA COR
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
     element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected')
  });
}  

// CHECA SE OS BOTOES CLICADOS SAO OS MESMO DA ORDEM GERADO NO JOGO
let checkOrder = () => {
 for(let i in clickOrder) {
  if(clickedOrder[i] != order[i]) {
   gameOver();
   break;
  }
 }
 if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível`);
    nextLevel();
 }
}

// FUNCAO PARA O CLICK DO USUARIO
let click = (color) => {
   clickedOrder[clickedOrder.length] = color;
   createColorElement(color).classList.add('selected');

   setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
   }, 250);
}

// FUNCAO QUE RETORNA A COR
let createColorElement = (color) => {
   if(color == 0) {
      return green;
   } else if(color == 1){
      return red;
   }else if(color == 2){
      return yellow;
   }else if (color == 3 ){
      return blue;
   }
}

// FUNCAO PROXIMO NIVEL
let nextLevel = () => {
   score++;
   shuffleOrder();
}

// FUNCAO GAME OVER
let gameOver = () => {
   alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para inicia um novo jogo.`);
   order = [];
   clickedOrder = [];

   playGame();
}

let playGame = () => {
   alert('Bem-vindo ao Gênesis! Iniciando novo jogo');
   score = 0;

   nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();