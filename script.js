const enviar = document.getElementsByTagName('button')[0];

const emailUsuario = document.getElementsByTagName('input')[0];
const senha = document.getElementsByTagName('input')[1];

function verificarDados() {
  if (emailUsuario.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

enviar.addEventListener('click', verificarDados);

const botaoSubmeter = document.getElementById('submit-btn');
botaoSubmeter.disabled = true;

const deAcordo = document.getElementById('agreement');

function habilitarBotao() {
  botaoSubmeter.disabled = false;
}

deAcordo.addEventListener('click', habilitarBotao);

const paragrafo = document.getElementById('counter');

const texto = document.getElementsByTagName('textarea')[0];

function contadorCaracters() {
  const caractersTotais = 500;
  const caracteresDigitados = parseInt(texto.value.length, 10);
  const caractersRestantes = caractersTotais - caracteresDigitados;

  paragrafo.innerHTML = caractersRestantes;
}

texto.addEventListener('input', contadorCaracters);

//  REQUISITO 21

function familiaSelecionada() {
  const familias = document.querySelectorAll('input[name="family"]:checked');
  let familia;

  for (let indice = 0; indice < familias.length; indice += 1) {
    familia = (familias[indice].value);
  }

  return familia;
}

function materiasSelecionadas() {
  const materias = document.querySelectorAll('input[class="subject"]:checked');
  const listaDeMaterias = [];

  for (let indice = 0; indice < materias.length; indice += 1) {
    const espaco = ' ';
    listaDeMaterias.push(espaco + (materias[indice].value));
  }

  return listaDeMaterias;
}

function avaliacao() {
  const notas = document.querySelectorAll('input[name="rate"]:checked');
  let nota;

  for (let indice = 0; indice < notas.length; indice += 1) {
    nota = (notas[indice]).value;
  }

  return nota;
}

function informacoesUsuario(event) {
  event.preventDefault();
  const nome = document.getElementById('input-name');
  const sobrenome = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const observacoes = document.getElementById('textarea');
  const casa = document.getElementById('house');
  const casaSelecionada = casa.options[casa.selectedIndex].text;

  const lista = document.getElementById('lista');
  lista.innerHTML = `<li>Nome: ${nome.value} ${sobrenome.value}</li>
  <li>Email: ${email.value}</li>
  <li>Casa: ${casaSelecionada}</li>
  <li>Família: ${familiaSelecionada()}</li>
  <li>Matérias: ${materiasSelecionadas()}</li>
  <li>Avaliação: ${avaliacao()}</li>
  <li>Observações: ${observacoes.value}</li>
  `;
}

botaoSubmeter.addEventListener('click', informacoesUsuario);

//  Projeto em dupla realizado com Caroline Machado