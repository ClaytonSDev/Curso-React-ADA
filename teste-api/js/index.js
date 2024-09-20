// Fetch API

//fetch('https://viacep.com.br/ws/01001000/json/')
//.then((resposta) => {
  //resposta.json().then((dados) => console.log(dados));
//})
//.catch((erro) => {
//  console.log(erro);
//});

//popopopopo

async function obterDadosDoCep() {
  try {
  const resposta = await fetch('https://viacep.com.br/ws/02835000/json/');
  const dados = await resposta.json();

  console.log(dados);
  } catch (erro) {
    console.log("Deu errado!", erro);
  } finally {
    console.log("Terminou a requisição.");
  }
}

obterDadosDoCep();