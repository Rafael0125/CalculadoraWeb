// Função para verificar o valor e ação dos botões
function operacao(tipo,valor){
    if(tipo === 'acao'){
        if(valor === 'C'){ // Limpando a tela da calculadora
            document.getElementById('telaCalculadora').value =''
        }

        // Verificando qual a operação aritmétrica a ser realizada
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' ||valor === '.'){
            document.getElementById("telaCalculadora").value += valor 
        }

        if(valor === '='){ // Realizando a operação com o sinal de igual ( = )
            let valorCampo = eval(document.getElementById("telaCalculadora").value)            
            document.getElementById("telaCalculadora").value = valorCampo
        }

        if(valor === '√'){ // Tirando a raiz quadrada do numero
            let valorNaTela = Math.sqrt( document.getElementById("telaCalculadora").value)
            document.getElementById("telaCalculadora").value = valorNaTela
        }


    } else if(tipo === 'valor'){ // Verificando qual o valor digitado e adcionando ele a tela da calculadora
        document.getElementById("telaCalculadora").value += valor 
    }
}
