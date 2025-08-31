function valor() {
    //Função que carrega as informações do JSON

    //fetch('https://raw.githubusercontent.com/Gabriela161108/minha-API/refs/heads/main/dados.json').then(resposta => resposta.json()).then(banco => { (o link não é necessário postar no GitHub, só de colocar o arquivo, abrir o link e copiar e colar aqui funciona)
    fetch('dados.json').then(resposta => resposta.json()).then(banco => {

        var identificador = document.getElementById('valorDigitado').value
        var encontrado = false

        banco.forEach(pessoa => {
            if(identificador == pessoa.cpf) {
                //JQUERY
                var linkSite = `<a href="${pessoa.link}">Visite o site</a>`
                document.getElementById('imagem').innerHTML = pessoa.imagem
                document.getElementById('nome').innerHTML = pessoa.nome
                document.getElementById('sobrenome').innerHTML = pessoa.sobrenome
                document.getElementById('cidade').innerHTML = pessoa.cidade
                document.getElementById('pais').innerHTML = pessoa.pais
                document.getElementById('link').innerHTML = pessoa.linkSite
                document.getElementById('erro').innerHTML = ""
                encontrado = true

            }
        })

        // ! significa ao contrário
        if(!encontrado) {
            document.getElementById('erro').innerHTML = "CPF não encontrado"
            document.getElementById('tudo').innerHTML = "Por favor verifique se digitou corretamente"
        }
        

        console.log(banco)
    })
}