const senha  = document.getElementById('senha');
const toggleBtn =  document.getElementById('toggleSenha');

const passBlock = "/img/passwordImg/passwordBlock.png";
const passView = "/img/passwordImg/passwordView.png";

toggleBtn.addEventListener('click', function () {
    const tipoAtual = senha.getAttribute("type");
    toggleBtn.style.opacity = "0";

    setTimeout(() =>{
        if (tipoAtual === "password") {
            senha.setAttribute("type", "text");
            toggleBtn.src = passView + "?t=" + new Date().getTime();
            toggleBtn.setAttribute("alt", "Senha oculta");
        }
        else{
            senha.setAttribute("type", "password");
            toggleBtn.src = passBlock + "?t=" + new Date().getTime();
            toggleBtn.setAttribute("alt", "Senha não oculta");
        }
        toggleBtn.style.opacity = "1";
    }, 150);
})