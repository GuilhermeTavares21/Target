// Verificar se o número informado no input faz parte da sequência de Fibonacci
document.getElementById('verifyBtn').addEventListener('click', () => {
    let resultado = document.getElementById('resultCheck');
    let a = 0;
    let b = 1;
    let c = 0; 
    let x = document.getElementById('inputCheck').value; 

    // Validar se o campo está preenchido
    if (!x) { 
        alert("Por favor, digite um número válido.");
        return;
    }

    //Verificar o número
    while (c <= x) { 
        if (c == x) { 
            resultado.innerHTML = `O número ${x} pertence à sequência de Fibonacci.`;
            return;
        }
       
        c = a;
        a = b;
        b = c + b;
    }

    
    resultado.innerHTML = `O número ${x} não pertence à sequência de Fibonacci.`;
});


//Reverter o texto informado no input
document.getElementById('revertBtn').addEventListener('click', () => {
    let resultado = document.getElementById('resultRevert');
    let input = document.getElementById('inputReverse')
    let reversedString = '';
    let b = input.value.length


    //Validação
    if(b <= 1) {
        alert('Escreva um texto ou palavra com mais de um caracter!')
        return
    }

    for (let i = b - 1; i >= 0; i--) {
        reversedString += input.value[i];
    }
    return resultado.innerHTML = reversedString
})