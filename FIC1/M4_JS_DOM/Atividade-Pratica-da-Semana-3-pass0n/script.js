(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_foices')) ?? [];
}

function setLocalStorage(bd_foices) {
  localStorage.setItem('bd_foices', JSON.stringify(bd_foices));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_foices = getLocalStorage();
  let index = 0;
  for (foice of bd_foices) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${foice.nome}</td>
        <td>${foice.cabo}</td>
        <td>${foice.lamina}</td>
        <td>${foice.tipo}</td>
        <td>R$ ${foice.valor}</td>
        <td>${foice.quantidade}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const foice = {
    nome: document.getElementById('nome').value,
    cabo: document.getElementById('cabo').value,
    lamina: document.getElementById('lamina').value,
    tipo: document.getElementById('tipo').value,
    valor: document.getElementById('preco').value,
    quantidade: document.getElementById('qtd').value
  }
  const bd_foices = getLocalStorage();
  bd_foices.push(foice);
  setLocalStorage(bd_foices);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const bd_foices = getLocalStorage();
  bd_foices.splice(index, 1);
  setLocalStorage(bd_foices);
  atualizarTabela();
}

function nomeInvalido() { // Adaptação da função validar (10 pontos)
  const bd_foices = getLocalStorage();
  for (foice of bd_foices) {
    if (nome.value == foice.nome) {
      nome.setCustomValidity("Desculpe, essa foice já foi registrada!");
      foiceNome.innerText = "Desculpe, essa foice já foi registrada!";
      return false;
    } else {
      nome.setCustomValidity("");
      foiceNome.innerText = "Informe o nome da foice corretamento.";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const nome = document.getElementById("nome");
const foiceNome = document.getElementById("foiceNome");
tipo.addEventListener('input', nomeInvalido)