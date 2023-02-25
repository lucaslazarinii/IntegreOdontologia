const MenuLateral = document.querySelector('.side__menu');
const Botoes = document.querySelectorAll('.side__menu-button')

for (let i = 0; i < Botoes.length; i++) {
    const Botao = Botoes[i]
    Botao.onclick = function () {
        MenuLateral.classList.toggle('hide')
    }
};

const Services = document.querySelectorAll('.service-item')
const ServicesTitle = document.querySelectorAll('.service-title'); 
const ServicesDesc = document.querySelectorAll('.service-desc');

for (let i = 0; i < Services.length; i++) {
    const Service = Services[i]
    const ServiceTitle = ServicesTitle[i]
    const ServiceDesc = ServicesDesc[i]
    const effects = ['teste']
    for (let j = 0; j < effects.length; j++) {
        ServiceTitle.addEventListener('click', function () {
            ServiceDesc.classList.toggle('hide-service')
            Service.classList.toggle(effects[j])
    })
}}
