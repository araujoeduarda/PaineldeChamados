var cards = document.querySelectorAll('.container .card');

function slideMensagem() {
  var mensagem = this.querySelector('.mensagem');
  if (!mensagem) {
    mensagem = document.createElement('div');
    mensagem.textContent = 'Este setor é responsável por';
    mensagem.classList.add('mensagem');

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
  card.addEventListener('mouseenter', slideMensagem);
  card.addEventListener('mouseleave', removerMensagem);
});
