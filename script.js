// script.js

// Função para redirecionar o usuário para a página de autenticação do Twitter
function redirectToTwitterLogin() {
    // URL de autenticação do Twitter
    const twitterAuthUrl = "https://twitter.com/i/flow/login";

    // Redireciona o usuário para a página de autenticação do Twitter
    window.location.href = twitterAuthUrl;
}

// Adiciona um evento de clique ao botão de login com o Twitter
document.getElementById("login-twitter-btn").addEventListener("click", redirectToTwitterLogin);
