var cards = document.querySelectorAll('.container .card'); // selecionar todos os cards

function slideMensagem() {
  var mensagem = this.querySelector('.mensagem');
  if (!mensagem) {
    // Cria elemento de texto com mensagem
    mensagem = document.createElement('div');
    mensagem.textContent = 'Este setor é responsável por';
    mensagem.classList.add('mensagem'); // Adiciona classe para fazer estilização

    // Define o estilo da mensagem
    mensagem.style.fontSize = '16px';
    mensagem.style.color = 'white';
    mensagem.style.textDecoration = 'none';

    this.appendChild(mensagem);

    // Adicionar classe para iniciar a transição
    setTimeout(function() {
      mensagem.classList.add('show');
    }, 10); // Espera um pequeno intervalo para ativar a transição
  }
}

function removerMensagem() {
  var mensagem = this.querySelector('.mensagem');
  if (mensagem) {
    mensagem.remove();
  }
}

cards.forEach(function(card) {
  card.addEventListener('mouseover', slideMensagem);
  card.addEventListener('mouseout', removerMensagem);
});
