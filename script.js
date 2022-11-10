function iniciarJogo(){
    document.getElementById('desaparece').style.display = "none";
    sorteiaPalavras()
    CanvasDesenha()
    linhasDesenhar()

    document.onkeydown = (e) =>{
        let letra = e.key.toUpperCase()

        if(verificarLetra(letra) && sorteiaPalavras.includes(letra)){
            for( let i = 0; i < sorteiaPalavras.length; i++){
                if(sorteiaPalavras[i] === letra){
                   escreverLetraCorreta(i) 
                }
            }

        }
        else{
           adicionarLetrasIncorretas(letra)
           escreverLetrasIncorretas(letra, letrasErradas)
        }
    }
}

// seletores 
let palavras =["ALURA", "ORACLE", "FORCA", "CELULAR", "ELEFANTE", "DOCE", "ESCOLA", "JAVASCRIPT", "CSS", "COMPUTADOR", "IMPRESSORA", "JAQUETA","SOL", "LOGICA"];
let tabuleiro = document.getElementById("player").getContext('2d');
let palavrasSecretas = "";


let letras = [];
let letrasErradas = 8;

function sorteiaPalavras(){
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    sorteiaPalavras = palavra
    console.log(sorteiaPalavras)
    return palavra
}



function verificarLetra(key){
    let estado = false
    if(key >= 65 && letras.indexOf(key) || key <= 90){
        letras.push(key)
        return estado
    }

    else{
        estado = true
        letras.push(key)
        return estado
    
    }
}

function  adicionarLetrasIncorretas(letra){
    letrasErradas -= 1

}
