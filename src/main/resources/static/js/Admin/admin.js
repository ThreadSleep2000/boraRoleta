//apenas para exemplo.

const usuarios = [
    { nome: "Maria", id: "333.333.333-33" },
    { nome: "João", id: "444.444.444-44" }
];

function renderUsuarios() {
    const container = document.getElementById("usuarios-container");
    container.innerHTML = "";

    //Essa parte do código gera uma nova DIV, para o novo usuário, havia colocado apenas para questão de teste, uma vez que os usuarios serão inseridos por meio do CRUD. A função de adicionar em si está no fim de código.

    usuarios.forEach((usuario, index) => {
        const divUsuario = document.createElement("div");
        divUsuario.className = "usuarios";
        divUsuario.innerHTML = `
      <div class="entradas">
        <span>Nome:</span>
      </div>
      <div class="data">
        <span>${usuario.nome}</span><span>${usuario.id}</span>
        <button class="edit" data-index="${index}">Editar</button>
        <button class="delete" onclick="deletarUsuario(${index})">Del</button>
      </div>
    `;
        container.appendChild(divUsuario);
    });


    const editButtons = document.querySelectorAll('.edit');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            editarUsuario(index);
        });
    });
}

//essa parte do código faz com que o botão de editar fncione, dando a opção ao adm editar o ID e o nome.

function editarUsuario(index) {
    const usuario = usuarios[index];
    const novoNome = prompt("Editar nome do usuário:", usuario.nome);
    const novoId = prompt("Editar ID do usuário:", usuario.id);

    if (novoNome && novoId) {
        usuarios[index] = { nome: novoNome, id: novoId };
        renderUsuarios();
    } else {
        alert("Nome e ID são obrigatórios.");
    }
}

//Essa parte do código é responsável por deletar o user.

function deletarUsuario(index) {
    const confirmacao = confirm(`Deseja remover o usuário: ${usuarios[index].nome}?`);
    if (confirmacao) {
        usuarios.splice(index, 1);
        renderUsuarios();
    }
}


function adicionarUsuario() {
    const nome = prompt("Digite o nome do novo usuário:");
    const id = prompt("Digite o ID do novo usuário:");

    if (nome && id) {
        usuarios.push({ nome, id });
        renderUsuarios();
    } else {
        alert("Nome e ID são obrigatórios.");
    }
}

// Adicionar o evento ao botão "Inserir"
document.getElementById("inserir-usuario").addEventListener("click", adicionarUsuario);

document.addEventListener("DOMContentLoaded", renderUsuarios);
