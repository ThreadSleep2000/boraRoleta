
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('botaoCadastro').addEventListener('click', function (e) {
        e.preventDefault(); // evita o envio do formulário

        const nome = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('phone').value.trim();
        const senha = document.getElementById('password').value;
        const confirma = document.getElementById('confirma').value;

        let erros = [];


        if (nome.length < 3 || !/^[a-zA-ZÀ-ÿ\s]{3,}$/.test(nome)) {
            erros.push("Seu nome deve conter pelo menos 3 letras e não pode conter números ou símbolos.");
        }


        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            erros.push("E-mail inválido.");
        }


        const regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;
        if (!regexTelefone.test(telefone)) {
            erros.push("Telefone deve estar no formato (XX) XXXXX-XXXX.");
        }


        const regexSenhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!regexSenhaForte.test(senha)) {
            erros.push("A senha deve ter no mínimo 8 caracteres, com maiúscula, minúscula, número e símbolo.");
        }


        if (senha !== confirma) {
            erros.push("As senhas tem que ser iguais.");
        }

        if (erros.length > 0) {
            alert(erros.join("\n"));
        } else {
            alert("Cadastro realizado com sucesso!");

        }
    });
});

