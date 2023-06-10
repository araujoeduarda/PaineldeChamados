var cards = document.querySelectorAll('.container .card'); // selecionar todos os cards

function minhaFuncao() {
  var mensagem = this.querySelector('.mensagem');
  if (!mensagem) {
    // Cria o elemento de texto com a mensagem
    mensagem = document.createElement('div');
    mensagem.textContent = 'Este setor é responsável por';
    mensagem.classList.add('mensagem'); // Adiciona a classe para estilização

    // Define o estilo da mensagem
    mensagem.style.fontSize = '16px';
    mensagem.style.color = 'white';
    mensagem.style.textDecoration = 'none';

    this.appendChild(mensagem);
  }
}

function removerMensagem() {
  var mensagem = this.querySelector('.mensagem');
  if (mensagem) {
    mensagem.remove();
  }
}

cards.forEach(function(card) {
  card.addEventListener('mouseover', minhaFuncao);
  card.addEventListener('mouseout', removerMensagem);
});
