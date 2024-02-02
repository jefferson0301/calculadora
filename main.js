const listaBotoes = document.querySelectorAll('.botao')

console.log(listaBotoes)

function lerTecla(valor){
    if(valor === '->'){
        
        document.querySelector('.visor').value = document.querySelector('.visor').value.substr(0, document.querySelector('.visor').value.length - 1);
    }else{
        document.querySelector('.visor').value += valor
    }
}

function resolverOperacao(){
    console.log(document.querySelector('.visor').value)
    document.querySelector('.visor').value = eval(document.querySelector('.visor').value)
}

for(i=0;listaBotoes.length;i++){
    const botao = listaBotoes[i]

    botao.onclick = function (){
         botao.classList.add('ativo')
         //código abaixo cria um delay de 0,1 seg para remover a classe
         setTimeout(function() {
            botao.classList.remove('ativo')
        }, 100);
        if(botao.value === "="){
            try {
                resolverOperacao()
            } catch (error) {
                alert("Insira operações válidas: "+error)
            }
            
        }else{
            console.log(botao.value)
            lerTecla(botao.value)
        }
        
     }

     botao.onkeydown = function (evento){
        //console.log(evento.code)
        if(evento.key === 'Tab' || evento.key ===  'Space'){
            botao.classList.add('ativo')
        }
        
     }

    botao.onkeyup = function(){
        botao.classList.remove('ativo')
    }
}