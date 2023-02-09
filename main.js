const MenuLateral = document.querySelector('.side__menu');
const Botoes = document.querySelectorAll('.side__menu-button')

for (let i = 0; i < Botoes.length; i++) {
    const Botao = Botoes[i]
    Botao.onclick = function () {
        MenuLateral.classList.toggle('hide-menu')
    }
}