// Seleciona o botão responsável por abrir o menu
const menuBtn = document.getElementById('menuBtn');

// Seleciona o elemento do menu suspenso
const dropdown = document.getElementById('menuDropdown');

// Adiciona um evento de clique ao botão do menu
menuBtn.addEventListener('click', (event) => {
  // Impede que o clique no botão seja captado pelo documento, evitando o fechamento imediato do menu
  event.stopPropagation();

  // Alterna a visibilidade do menu: exibe se estiver oculto, oculta se estiver visível
  dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') 
    ? 'block' 
    : 'none';
});

// Fecha o menu ao clicar em qualquer lugar fora dele
document.addEventListener('click', () => {
  dropdown.style.display = 'none';
});