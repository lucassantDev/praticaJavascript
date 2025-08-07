const abrirMenu = document.getElementById('aparecer-menu');
const fecharMenu = document.getElementById('desaparecer-menu');
const menuLateral = document.getElementById('menu-lateral');

abrirMenu.addEventListener('click', () => {
    menuLateral.style.marginLeft = '1220px';
})

fecharMenu.addEventListener('click', () =>{
    menuLateral.style.marginLeft = '1520px';
})