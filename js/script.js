

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