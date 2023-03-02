const MenuLateral = document.querySelector('.side__menu');
const Botoes = document.querySelectorAll('.side__menu-button')

for (let i = 0; i < Botoes.length; i++) {
    const Botao = Botoes[i]
    Botao.onclick = function () {
        MenuLateral.classList.toggle('hide')
    }
};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = 300 + "px";
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});