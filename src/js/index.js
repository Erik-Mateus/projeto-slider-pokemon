const btaoAvancar = document.getElementById("setaAvancar");
const btaoVoltar = document.getElementById("setaVoltar");
const cartoes = document.querySelectorAll(".cartao");

var cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
function mostrarCartoes() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

btaoAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;

  mostrarCartoes();
});

btaoVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  console.log(cartaoAtual);

  mostrarCartoes();
});
