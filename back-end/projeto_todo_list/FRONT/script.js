

async function adicionarTarefa() {
    const tarefa = document.getElementById('tarefa').value;
    if (!tarefa) {
        alert('Digite uma tarefa');
        return;
    }

    const response = await fetch('http://localhost:3000/inserir', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tarefa:tarefa })
    });
    if (response.ok) {
        alert('Tarefa adicionada com sucesso');
        document.getElementById('tarefa').value = '';
        buscarTarefas();
    } else {
        alert('Erro ao adicionar tarefa');
    }
}



async function buscarTarefas() {
    const response = await fetch('http://localhost:3000/tarefas', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const tarefas = await response.json();
        console.log(tarefas);

        const listaTarefas = document.getElementById('listaTarefas');
        listaTarefas.innerHTML = '';
        tarefas.forEach(tarefa => {
         const li = document.createElement('li');
        li.textContent = tarefa.tarefas;

        const btnConcluir = document.createElement('input');
        btnConcluir.type = 'checkbox';
        btnConcluir.checked = tarefa.concluido;
        btnConcluir.onclick = () => concluirTarefa(tarefa.id, !tarefa.concluido);

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirTarefa(tarefa.id);

        li.appendChild(btnConcluir);
        li.appendChild(btnExcluir);

        if (tarefa.concluido) {
            li.classList.add('concluido');
        }

        listaTarefas.appendChild(li);
        });
    } else {
        alert('Erro ao buscar tarefas');
    }
}
buscarTarefas()



async function excluirTarefa(id) {
    const response = await fetch(`http://localhost:3000/deletarTarefa/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        buscarTarefas();
    } else {
        alert('Erro ao excluir tarefa');
    }
}

async function concluirTarefa(id, status) {
    const response = await fetch(`http://localhost:3000/concluido/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ concluido: status })
    });
    if (response.ok) {
        buscarTarefas();
    } else {
        alert('Erro ao concluir tarefa');
    }
}


