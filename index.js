const botao = document.querySelector("#botao");
let Mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", imprimir);

function imprimir() {
    mensagem.innerHTML =  "\"A vantagem de ser inteligente é que podemos fingir que somos imbecis, enquanto o contrário é completamente impossível\". Woody Allen"; ;
}