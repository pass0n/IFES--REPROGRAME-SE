var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
let animais = document.getElementById('select_animais');
// Selecionar elemento 'container' ( 1 ponto)
let container = document.getElementById('container');
// Selecionar elemento 'nome' ( 1 ponto)
let nome = document.getElementById('nome');
// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
animais.addEventListener('input', listarAnimais);
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener('mouseover', mostrarNome);
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener('mouseout', limparNome);

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
  if (select_animais.value == "dog") {
    // Criar elementos do tipo <img src=./img/....
    for (let i in cachorros) {
      let img = document.createElement("img");
      img.src = `./img/${cachorros[i]["imagem"]}.jpg`
      img.alt = cachorros[i].nome
      container.appendChild(img);
    }
    // Fazer com que os elementos img sejam filhos do elemento 'container'
  } else {
    for (let i in gatos) {
      let img = document.createElement("img");
      img.src = `./img/${gatos[i]["imagem"]}.jpg`
      img.alt = gatos[i].nome
      container.appendChild(img);
    }
  }
}

function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...
  nome.innerText = e.target.alt;
}

function limparNome() {
  nome.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}