// Dados simulados de usuários
const usuarios = [
    { email: "jubileu354@example.com", senha: "12345" },
    { email: "ana_gamer@example.com", senha: "67890" }
];

// Formulário de login
const loginForm = document.getElementById("login-formulario");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta os dados do formulário
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    // Verifica os dados com os usuários simulados
    const usuario = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuario) {
        alert(`Bem-vindo de volta, ${email}!`);
        window.location.href = "perfil.html"; // Redireciona para a página de perfil
    } else {
        alert("Email ou senha incorretos. Tente novamente.");
    }
});

const cadastroFormulario = document.getElementById("cadastro-formulario");

cadastroFormulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Coleta os dados dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;

    // Validação das senhas
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
    }

    // Simulação de cadastro bem-sucedido
    alert(`Cadastro realizado com sucesso!\nBem-vindo, ${nome}!`);
    window.location.href = "login.html"; // Redireciona para a página de login
});

