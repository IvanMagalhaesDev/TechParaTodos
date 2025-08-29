// Tema
const botaoTema = document.getElementById('theme-toggle');
const CHAVE_TEMA = 'techparatodos_tema';

function atualizarBotao(escuro) {
  botaoTema.textContent = escuro ? '🔆' : '🌙';
}

botaoTema.addEventListener('click', () => {
  const escuro = document.body.classList.toggle('dark-mode');
  localStorage.setItem(CHAVE_TEMA, escuro ? 'escuro' : 'claro');
  atualizarBotao(escuro);
});

// alto contraste
document.addEventListener("DOMContentLoaded", () => {
  const contrastToggle = document.getElementById("contrast-toggle");
  
  contrastToggle.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");

    const isContrast = document.body.classList.contains("high-contrast");
    contrastToggle.setAttribute("aria-pressed", isContrast);
    contrastToggle.textContent = isContrast ? "🔲" : "🔳";
  });
});


// Feedback
document.getElementById('submit-feedback').addEventListener('click', () => {
  const input = document.getElementById('feedback-input');
  const texto = input.value.trim();
  if (texto) {
    alert('Feedback enviado: ' + texto);
    input.value = '';
  } else {
    alert('Por favor, insira um feedback.');
  }
});

// Menu
const botaoMenu = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

botaoMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  const aberto = sidebar.classList.contains('active');
});

const botaoFechar = document.getElementById('fechar-menu');

botaoFechar.addEventListener('click', () => {
  sidebar.classList.remove('active');
  botaoMenu.setAttribute('aria-label', 'Abrir menu');
});
