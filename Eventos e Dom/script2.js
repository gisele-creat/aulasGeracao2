let header = document.getElementById('conteudoHeader');



function criarMenu(){
    header.innerHTML = `
    // <img src="Eventos e Dom/img da atividade.jfif" alt="">

    <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
    </nav>
    
    `;
    header.classList.add('cardPrincipal');

}
