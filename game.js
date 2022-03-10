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
            this.chooseGesture("Player1",gameType);
            
        }else if(gameType == 2){
            this.Player1 = new players.Human("Player 1", 0);
            this.Player2 = new players.Human("Player 2", 0);
            console.log(`Player1 = ${this.Player1.name} and Player2 = ${this.Player2.name}`);
            this.chooseGesture("Player1",gameType);
        }
        else{
            console.log("Invalid choice")
        }
       
    }

    gestureChoices(){
        let gestures = [Rock, Paper, Scissors, Lizard, Spock];
    }
    
    aiGesture(){

    }

    // TODO - pass player name to chooseGesture, add logic for player 2 human or AI
    chooseGesture(whichPlayer,gameType){
        console.log(`${whichPlayer}, choose a gesture - Rock, Paper, Scissors, Lizard, or Spock?`);
        let gestureChoice = prompt();
        if(whichPlayer === "Player1"){
            this.Player1.gesture = gestureChoice;
            //console.log(`${this.Player1.gesture}`);
            this.chooseGesture("Player2",gameType);
        }
        else if(whichPlayer === "Player2"){
            if(gameType == 2){
                this.Player2.gesture = gestureChoice;
                console.log(`${this.Player1.gesture} vs ${this.Player2.gesture}`);
                this.gameProgress(gameType);
            }else{
                this.aiGesture();
            }
        };
        
    }

    player1Wins(gameType){
        this.Player1.wins += 1;
        if (this.Player1.wins === 2){
            console.log(`Congrats! Player 1 wins the game!`);
        }else{
            console.log(`Player 1 wins this round. Go again! Score is ${this.Player1.wins} to ${this.Player2.wins}, Player 1's favor.`);
            this.chooseGesture("Player1",gameType);
        };
    }

    // TOD - Change win message to "You got beat by AI!" if computer wins
    player2Wins(gameType){
        this.Player2.wins += 1;
        if (this.Player2.wins === 2){
            console.log(`Congrats! Player 2 wins the game!`);
        }else{
            console.log(`Player 2 wins this round. Go again! Score is ${this.Player2.wins} to ${this.Player2.wins}, Player 2's favor.`);
            this.chooseGesture("Player1",gameType);
        };
    }
    
    gameProgress(gameType){
        let player1Choice = this.Player1.gesture;
        let player2Choice = this.Player2.gesture;
        if(player1Choice ===  player2Choice){
            console.log(`It's a tie! Go again!`);
            this.chooseGesture("Player1",gameType);
        }
        else if (player1Choice === "Rock"){
            if(player2Choice === "Scissors" || player2Choice === "Lizard"){
                this.player1Wins(gameType);
            }
            else if (player2Choice === "Paper" || player2Choice === "Spock")
            {
                this.player2Wins(gameType);
            }
        }        
        else if (player1Choice === "Scissors"){
            if(player2Choice === "Paper" || player2Choice === "Lizard"){
                this.player1Wins(gameType);
            }
            else if (player2Choice === "Rock" || player2Choice === "Spock")
            {
                this.player2Wins(gameType);
            }
        }        
        else if (player1Choice === "Paper"){
            if(player2Choice === "Rock" || player2Choice === "Spock"){
                this.player1Wins(gameType);
            }
            else if (player2Choice === "Scissors" || player2Choice === "Lizard")
            {
                this.player2Wins(gameType);
            }
        }        
        else if (player1Choice === "Lizard"){
            if(player2Choice === "Paper" || player2Choice === "Spock"){
                this.player1Wins(gameType);
            }
            else if (player2Choice === "Scissors" || player2Choice === "Rock")
            {
                this.player2Wins(gameType);
            }
        }        
        else if (player1Choice === "Spock"){
            if(player2Choice === "Scissors" || player2Choice === "Rock"){
                this.player1Wins(gameType);
            }
            else if (player2Choice === "Lizard" || player2Choice === "Paper")
            {
                this.player2Wins(gameType);
            }
        }
       //gesture logic - compare choices
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
