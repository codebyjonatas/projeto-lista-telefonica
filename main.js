const form = document.getElementById("form-contact");
const contactNames = [];
const contactNumbers = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addLinhas();
  atualizarTabela();
});

function addLinhas() {
  const inputName = document.getElementById("nome");
  const inputNumber = document.getElementById("contato");

  if (contactNames.includes(inputName.value)) {
    alert(`O contato ${inputName.value} já existe`);
  } else {
    contactNames.push(inputName.value);
    contactNumbers.push(inputNumber.value);

    let linha = `<tr>`;
    linha += `<td>${inputName.value}</td>`;
    linha += `<td>${inputNumber.value}</td>`;
    linha += `<tr></tr>`;

    linhas += linha;
  }

  inputName.value = "";
  inputNumber.value = "";
}

function atualizarTabela() {
  let corpoTabela = document.querySelector("tbody");

  corpoTabela.innerHTML = linhas;
}
