
const botaoMenu = document.getElementById("botao-menu");
const navegacao = document.getElementById("navegacao");

botaoMenu.addEventListener("click", function () {
    const menuAberto = navegacao.classList.toggle("aberto");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    botaoMenu.textContent = menuAberto ? "×" : "☰";
});

document.querySelectorAll("#navegacao a").forEach(function (link) {
    link.addEventListener("click", function () {
        navegacao.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
        botaoMenu.textContent = "☰";
    });
});

document.getElementById("ano").textContent =
    new Date().getFullYear();
