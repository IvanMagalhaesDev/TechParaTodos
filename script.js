const botaoTema = document.getElementById('theme-toggle');
const CHAVE_TEMA = 'techparatodos_tema';

// Mostra o sol quando estiver escuro e a lua quando estiver claro
function atualizarBotao(isEscuro) {
  botaoTema.textContent = isEscuro ? '🔆' : '🌙';
  botaoTema.setAttribute('aria-label', isEscuro ? 'Desativar modo escuro' : 'Ativar modo escuro');
  botaoTema.setAttribute('title', isEscuro ? 'Voltar para modo claro' : 'Ativar modo escuro');
  botaoTema.setAttribute('aria-pressed', String(isEscuro));
}

// Alternar ao clicar no botão
botaoTema.addEventListener('click', () => {
  const isEscuro = document.body.classList.toggle('dark-mode');
  localStorage.setItem(CHAVE_TEMA, isEscuro ? 'escuro' : 'claro');
  atualizarBotao(isEscuro);
});

// Handle feedback form submission
document.getElementById('submit-feedback').addEventListener('click', function() {
    const feedbackInput = document.getElementById('feedback-input');
    const feedbackText = feedbackInput.value.trim();
    if (feedbackText) {
        alert('Feedback enviado: ' + feedbackText);
        feedbackInput.value = '';
    } else {
        alert('Por favor, insira um feedback.');
    }
});