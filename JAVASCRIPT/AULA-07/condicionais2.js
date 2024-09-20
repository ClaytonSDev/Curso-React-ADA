


const permissoes = 'aluno'

switch(permissoes) {
  case 'aluno':
    console.log('Você só pode visualizar as aulas.');
    break
  case "Professor":
    console.log('Você pode alterar as aulas e adcionar exercicios.')
    break
  case "admin":
    console.log("Você pode fazer o que quiser no sistema!");
    break
  default:
    console.log("Não sei quem você é no sistema");
}