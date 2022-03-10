
"use strict";
const prompt = require('prompt-sync')();
const {Human,AI} = require('./players');


class Game {
    constructor(){
        this.Player1 = new Human("Player 1");
        this.Player2;
    }

    startGame(){
        console.log(
        `WELCOME TO RPSLS!
        
        ==============================
        Rules of the game:
        • Rock crushes Scissors  
        • Scissors cuts Paper  
        • Paper covers Rock   
        • Rock crushes Lizard   
        • Lizard poisons Spock   
        • Spock smashes Scissors  
        • Scissors decapitates Lizard  
        • Lizard eats Paper   
        • Paper disproves Spock   
        • Spock vaporizes Rock

        First to win 2 rounds wins the game!
        ===============================

        Now that you know the rules, choose type of play:
         >> Enter 1 to play against the computer
         >> Enter 2 to play another humanoid
        
        `);
        let gameType = prompt();
        if (gameType == 1){
            this.Player2 = new AI("Player 2 (AI)");
            console.log(`Player1 = ${this.Player1.name} and Player2 = ${this.Player2.name}`);
            this.gameProgress();
            
        }else if(gameType == 2){            
            this.Player2 = new Human("Player 2");
            console.log(`Player1 = ${this.Player1.name} and Player2 = ${this.Player2.name}`);
            this.gameProgress();
        }
        else{
            console.log("Invalid choice")
        }       
    }    

    player1Wins(){
        this.Player1.wins += 1;
        if (this.Player1.wins === 2){
            console.log(`Congrats! Player 1 wins the game!`);
        }else{
            console.log(`Player 1 wins this round. Go again! Score is ${this.Player1.wins} to ${this.Player2.wins}, Player 1's favor.`); 
            this.gameProgress();          
        };
    }

    // TOD - Change win message to "You got beat by AI!" if computer wins
    player2Wins(){
        this.Player2.wins += 1;
        if (this.Player2.wins === 2){
            console.log(`Congrats! Player 2 wins the game!`);
        }else{
            console.log(`Player 2 wins this round. Go again! Score is ${this.Player2.wins} to ${this.Player2.wins}, Player 2's favor.`);    
            this.gameProgress();         
        };
    }
    
    gameProgress(){
        this.Player1.chooseGesture();
        this.Player2.chooseGesture();

        //let player1Choice = this.Player1.gesture;
        //let player2Choice = this.Player2.gesture;
        if(this.Player1.gesture ===  this.Player2.gesture){
            console.log(`P1 = ${this.Player1.gesture} It's a tie! Go again! P2 = ${this.Player2.gesture}`);
            this.gameProgress();
        }
        else if (this.Player1.gesture === "Rock"){
            if(this.Player2.gesture === "Scissors" || this.Player2.gesture === "Lizard"){
                this.player1Wins();
            }
            else if (this.Player2.gesture === "Paper" || this.Player2.gesture === "Spock")
            {
                this.player2Wins();
            }
        }        
        else if (this.Player1.gesture === "Scissors"){
            if(this.Player2.gesture === "Paper" || this.Player2.gesture === "Lizard"){
                this.player1Wins();
            }
            else if (this.Player2.gesture === "Rock" || this.Player2.gesture === "Spock")
            {
                this.player2Wins();
            }
        }        
        else if (this.Player1.gesture === "Paper"){
            if(this.Player2.gesture === "Rock" || this.Player2.gesture === "Spock"){
                this.player1Wins();
            }
            else if (this.Player2.gesture === "Scissors" || this.Player2.gesture === "Lizard")
            {
                this.player2Wins();
            }
        }        
        else if (this.Player1.gesture === "Lizard"){
            if(this.Player2.gesture === "Paper" || this.Player2.gesture === "Spock"){
                this.player1Wins();
            }
            else if (this.Player2.gesture === "Scissors" || this.Player2.gesture === "Rock")
            {
                this.player2Wins();
            }
        }        
        else if (this.Player1.gesture === "Spock"){
            if(this.Player2.gesture === "Scissors" || this.Player2.gesture === "Rock"){
                this.player1Wins();
            }
            else if (this.Player2.gesture === "Lizard" || this.Player2.gesture === "Paper")
            {
                this.player2Wins();
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