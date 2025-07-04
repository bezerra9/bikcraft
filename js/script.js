

// ativar links do header
const links = document.querySelectorAll('.header-menu a')

links.forEach(ativarLink)

function ativarLink(link) {
  const url = location.href
  const href = link.href
  if(url.includes(href)) {
    link.classList.add('ativo')
  }
}

// ativar itens do Orçamento

const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro)
  if(elemento) {
    elemento.checked = true  
  }
  console.log(parametro)
}

parametros.forEach(ativarProduto)

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button")
/* console.log(perguntas) */

function ativarPergunta(event) {
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)
  resposta.classList.toggle('ativa')
  const ativa = resposta.classList.contains("ativa")
  pergunta.setAttribute('aria-expanded', ativa)
  console.log(controls)
}

function eventosPerguntas(pergunta) {
  /* console.log(pergunta) */
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

// galeria de bicicleta

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches
  if(media) {
    galeriaContainer.prepend(img)
  }
  console.log(media)
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)