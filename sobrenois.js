// Ativar animações ao rolar a página
document.addEventListener('scroll', function() {
    const membros = document.querySelectorAll('.membro');
    membros.forEach(membro => {
        const position = membro.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            membro.style.opacity = "1";
            membro.style.transform = "translateX(0)";
        }
    });
});
