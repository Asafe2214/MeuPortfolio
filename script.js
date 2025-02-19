function carregarPagina(pagina) {
    let iframe = document.getElementById('conteudo');


    iframe.classList.add('hidden');

    setTimeout(() => {
        iframe.src = pagina;


        setTimeout(() => {
            iframe.classList.remove('hidden'); 
        }, 100);
    }, 100);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const modeButton = document.getElementById('darkModeToggle');
    // Trocar o ícone do botão
    modeButton.innerHTML = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
}
