// Remove o spinner de carregamento após a página carregar
window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
});

// Menu toggle para dispositivos móveis
const menuToggle = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.navbar-collapse');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Validação do formulário de contato
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!');
        form.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
