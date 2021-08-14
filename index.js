function rpsgame(yourchoice){

    var humanchoice, botchoice;
    humanchoice = yourchoice.id;
    botchoice  = numbertochoose(randTorps());
    // alert(botchoice);
    result = decideWinner(humanchoice, botchoice);
    message = finalMessage(result);
    rpsFront(yourchoice.id, botchoice, message);
    
}


function randTorps(){
    return Math.floor(Math.random() * 3);
}

function numbertochoose(number){
    return ['rock', 'paper', 'scissor'][number];
}


function decideWinner(yourChoice, computerChoice){
    var rpsDatbase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0},
    };

    var yourScore = rpsDatbase[yourChoice][computerChoice];
    var computerScore = rpsDatbase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
        if(yourScore === 0){
            return {'message':'You Lost!', 'color': 'red'};

        }
        else if(yourScore === 0.5){
            return {'message':'You Tied!', 'color': 'yellow'};
        }
        else{
           return  {'message':'You Win!', 'color': 'green'};
        }
}

function rpsFront(humanImageChoice, botImageChoice, finalMessage){
    var imagedatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagedatabase[humanImageChoice] + "' height=100px width=100px style='box-shadow: 0px 10px 15px rgb(81, 81, 206);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 40px; padding: 20px; '>" + finalMessage['message']  +"</h1>";
    botDiv.innerHTML = "<img src='" + imagedatabase[botImageChoice] + "' height=100px width=100px style='box-shadow: 0px 10px 15px red;'>";
    document.getElementById('game').appendChild(humanDiv);
    document.getElementById('game').appendChild(messageDiv);
    document.getElementById('game').appendChild(botDiv);
}