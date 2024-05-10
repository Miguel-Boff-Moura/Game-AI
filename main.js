// Criado por Gamma.app

const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess(){
    const guess = parseInt(document.getElementById('guessInput').value);

    if(guess === randomNumber){
        document.getElementById('message').innerText = 'Boa, você acertou o número!';
    }else{
        document.getElementById('message').innerText = 'Desculpe, jogue novamente ;(';
    }
}
