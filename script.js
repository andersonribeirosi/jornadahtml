var pessoa = {
	nome: 'Anderson Ribeiro',
	cargo: 'Desenvolvedor WEB',
	foto: 'profile-picture.png'
}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('foto-cabecalho').src = pessoa.foto;
