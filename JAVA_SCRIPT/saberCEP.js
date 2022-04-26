//viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/
//istanciando os inputs
let rua = document.querySelector('#rua')
//let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#estado')

//istanciando o botão e a lista

let buscarCEP = document.querySelector('#buscarCEP')
let listaCEP = document.querySelector('#listaCEP')
let novoCEPbt = document.querySelector('#buscarNovoCEP')
let cepEX = document.querySelector('#cepEX')

//determinando a rua especifica


//Processo para fazer a busca do cep e outros
buscarCEP.addEventListener('click', function(e) {
    e.preventDefault()
    //istanciando a url padrão
    let urlBase = 'https://viacep.com.br/ws/'
    let parametros = estado.value +'/'+ cidade.value +'/'+ rua.value +'/json/'
    let callback = '?callback=popularBuscarMeuCep'
    let script = document.createElement('script')
    script.src = urlBase + parametros + callback
    document.body.appendChild(script)


})

function popularBuscarMeuCep(resposta){
    if (!Array.isArray(resposta)) {
        alert('O retorno não é uma lista de CEPs')
        return
    }

  
    resposta.forEach(function(i){
        
        
        
        
        
        
        
        let li = document.createElement('li')
        let endereco = i.logradouro + ' | '+ i.bairro + ' | ' 
        + i.localidade + ' | ' + i.uf + ' | ' + i.cep
        li.setAttribute('onclick', 'exibirCEP('+i.cep.replace('-', '')+')')
        li.innerHTML = endereco
        listaCEP.appendChild(li)
        buscarCEP.style.display = 'none'
        novoCEPbt.style.display = 'block'
        

    })
    
}
function exibirCEP (cep){
    alert(cep)

}
cepEX.addEventListener('click', function(e){
    e.preventDefault()
    rua.value = 'Domingos Jose'
    cidade.value = 'Porto Alegre'
    //bairro.value = 'Restinga'
    estado.value = 'RS'

})
