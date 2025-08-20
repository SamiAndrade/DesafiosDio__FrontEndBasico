window.addEventListener('DOMContentLoaded', () => {
    alert("Bem-vindo(a) ao portfólio de Sâmi Carvalho!");
});

const botaoProjetos = document.querySelector('.botao');
botaoProjetos.addEventListener('click', () => {
    botaoProjetos.style.backgroundColor = "#d5bb29ff";
    botaoProjetos.innerText = "Carregando projetos...";
      setTimeout(() => {
        botaoProjetos.style.backgroundColor = "var(--cor-destaque)";
        botaoProjetos.innerText = "Ver Projetos";
        botaoProjetos.style.transform = "scale(1)";
    }, 3000);
});
