document.getElementById("formCadastro").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        cpf: document.getElementById("cpf").value,
        senha: document.getElementById("senha").value
    };

    const response = await fetch("/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert("Usuário cadastrado!");
    } else {
        alert("Erro ao cadastrar.");
    }
});
