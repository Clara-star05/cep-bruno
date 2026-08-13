// Preencher os inputs

let preecherFormulario = (endereco) => {
    document.getElementById("Rua").value = endereco.lougradoro
    document.getElementById("Bairro").value = endereco.bairro
    document.getElementById("Cidade").value = endereco.localidade
    document.getElementById("Rua").value = endereco.estado
}

//autopreenchimento

let cepValido = (cep) => {
    if(cep.lenght == 8) {
        return true;
    } else {
        return false;
    }
}

//Buscar API - Consumir API
let pesquisarCep = async () => {
    let cep = document. getElementById("cep").value
    let url = `https://viacep.com.br/ws/${cep}/json/`

    if(cepValido(cep)){
        let dados = await fetch(url)
        let endereco = await dados.json()
        preecherFormulario(endereco)


    }
}

document.getElementById("cep").addEventListener("focusout", pesquisarCep);