"use strict";
const prompt = require('prompt-sync')();
const players = require('./players');


class Game {
    constructor(){
        this.Player1 = new players.Human("Player 1",0);
        this.Player2;
    }

    startGame(){
        console.log(`Welcome to RPSLS!
        
        Rules of the game:

        Rock crushes Scissors  
        Scissors cuts Paper  
        Paper covers Rock   
        Rock crushes Lizard   
        Lizard poisons Spock   
        Spock smashes Scissors  
        Scissors decapitates Lizard  
        Lizard eats Paper   
        Paper disproves Spock   
        Spock vaporizes Rock
        
        Now that you know the rules,
        choose type of play.
        Enter 1 for single player
        Enter 2 for two player
        
        All games are best 2 out of 3
        `);
        let gameType = prompt();
        if (gameType == 1){
            this.Player2 = new players.AI("Player 2 (AI)", 0);
            console.log(`Player1 = ${this.Player1.name} and Player2 = ${this.Player2.name}`);
            this.chooseGesture();
            
        }else if(gameType == 2){
            this.Player2 = new players.Human("Player 2", 0);
            console.log(`Player1 = ${this.Player1.name} and Player2 = ${this.Player2.name}`);
            this.chooseGesture();
        }
        else{
            console.log("Invalid choice")
        }
       
    }

    gestureChoices(){
        let gestures = [Rock, Paper, Scissors, Lizard, Spock];
    }
    
    gameRules(){
        console.log(`Rock crushes Scissors  
        Scissors cuts Paper  
        Paper covers Rock   
        Rock crushes Lizard   
        Lizard poisons Spock   
        Spock smashes Scissors  
        Scissors decapitates Lizard  
        Lizard eats Paper   
        Paper disproves Spock   
        Spock vaporizes Rock`);
    }

    chooseGesture(){
        console.log(`Player 1, choose a gesture - Rock, Paper, Scissors, Lizard, or Spock?`);
        let gestureChoice = prompt();
        this.Player1.gesture = gestureChoice;
        console.log(`You chose ${this.Player1.gesture}`);
    }
    
    gameProgress(){
        
    }   
    
    /*
    if (player1Choice === "Rock"){
        if(player2Choice === "Scissors" || player2Choice === "Lizard"){
            player 1 wins
        }
        else if (player2Choice === "Paper" || player2Choice === "Spock")
        {
            player 2 wins
        }
    }
    
    if (player1Choice === "Scissors"){
        if(player2Choice === "Paper" || player2Choice === "Lizard"){
            player 1 wins
        }
        else if (player2Choice === "Rock" || player2Choice === "Spock")
        {
            player 2 wins
        }
    }
    
    if (player1Choice === "Paper"){
        if(player2Choice === "Rock" || player2Choice === "Spock"){
            player 1 wins
        }
        else if (player2Choice === "Scissors" || player2Choice === "Lizard")
        {
            player 2 wins
        }
    }
    
    if (player1Choice === "Lizard"){
        if(player2Choice === "Paper" || player2Choice === "Spock"){
            player 1 wins
        }
        else if (player2Choice === "Scissors" || player2Choice === "Rock")
        {
            player 2 wins
        }
    }
    
    if (player1Choice === "Spock"){
        if(player2Choice === "Scissors" || player2Choice === "Rock"){
            player 1 wins
        }
        else if (player2Choice === "Lizard" || player2Choice === "Paper")
        {
            player 2 wins
        }
    }
    */
}

module.exports= {
    Game
}
