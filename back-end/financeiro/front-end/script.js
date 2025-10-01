

const formulario = document.getElementById('finance-form');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
   const descricao =  event.target.descricao.value ;
    const valor =  event.target.valor.value ;
    const tipo =  event.target.tipo.value ;
  
    try {
  const response = await fetch('http://localhost:3000/inserir',{
        method:'POST',  
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({descricao,valor,tipo})
    });
    const data = await response.json();
    alert(data.message);
    buscarDados();
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('tipo').value = ''; 
    }catch (error){
        console.log(error);
        alert('Erro ao inserir operação');
    }

console.log(event);
})


async function buscarDados(){

    const response = await fetch('http://localhost:3000/financeiro');
    const data = await response.json();
    console.log(data);
    const ul = document.getElementById("finance-list");
    ul.innerHTML = "";
    ul.innerHTML = `
    
    <li>
    <strong>Descrição</strong>
    <strong>Valor</strong>
    <strong>Tipo</strong>
    </li>

    `
    ul.innerHTML += data.map(item => `
    <li>
    <span>${item.descricao}</span>  
    <span>R$ ${item.valor}</span>
    <span>${item.tipo}</span>
    </li>
    `).join('');
    
}
buscarDados();