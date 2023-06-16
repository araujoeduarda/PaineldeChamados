var cards = document.querySelectorAll('.container .card');

function slideMensagem() {
  var mensagem = this.querySelector('.mensagem');
  if (!mensagem) {
    mensagem = document.createElement('div');
    mensagem.classList.add('mensagem');

    if (this.querySelector('img').alt === 'Setor de TI') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Problemas com Hardware<br>&bull; Problemas de Software';
    } else if (this.querySelector('img').alt === 'Setor Financeiro') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Balancetes<br>&bull; Aportes';
    } else if (this.querySelector('img').alt === 'Setor Administrativo') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Gerenciamento administrativo<br>&bull; Documentação<br>&bull; Processos internos';
    } else if (this.querySelector('img').alt === 'Setor Comercial') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Vendas e negociações<br>&bull; Relacionamento com clientes<br>';
    } else if (this.querySelector('img').alt === 'Setor Operacional') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Execução de atividades operacionais<br>&bull; Controle de processos<br>';
    } else if (this.querySelector('img').alt === 'Setor de Recursos Humanos') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Gestão de pessoas<br>&bull; Recrutamento e seleção<br>&bull; Treinamento e desenvolvimento';
    } else if (this.querySelector('img').alt === 'Setor de Segurança do Trabalho') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Segurança e saúde no trabalho<br>&bull; Prevenção de acidentes<br>&bull; Treinamentos de segurança';
    } else if (this.querySelector('img').alt === 'Setor de Estrutura') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Infraestrutura física e tecnológica<br>&bull; Manutenção e suporte técnico<br>&bull; Gestão de ativos e recursos';
    } else if (this.querySelector('img').alt === 'myDoc') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Registro de Problemas técnicos<br>&bull; Esclarecimento de dúvidas';
    } else if (this.querySelector('img').alt === 'MES') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Sistemas de gestão de produção';
    } else if (this.querySelector('img').alt === 'CARA') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Gerenciamento administrativo<br>&bull; Documentação<br>&bull; Processos internos';
    } else if (this.querySelector('img').alt === 'ShiftConnector') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Vendas e negociações de soluções de software';
    } else if (this.querySelector('img').alt === 'Bike') {
      mensagem.innerHTML = 'Este setor é responsável por:<br>&bull; Fornecimento de bicicletas';
    }

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

