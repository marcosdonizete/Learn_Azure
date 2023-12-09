function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simular lógica de autenticação
    if (username === 'tococru' && password === 'pegandofogo') {
        // Se as credenciais forem válidas, redirecionar para a página principal
        window.location.href = 'index.html';
    } else {
        // Exibir mensagem de erro (pode personalizar conforme necessário)
        alert('Credenciais inválidas. Tente novamente.');
    }
}
