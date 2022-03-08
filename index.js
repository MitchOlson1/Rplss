"use strict";
const prompt = require('prompt-sync')();
const game = require('./game')

startGame();

function startGame(){
    console.log(`Welcome to RPSLS! Choose type of play.
    Enter 1 for single player
    Enter 2 for two player
    
    All games are best 2 out of 3
    `);
    let gameType = prompt();
    if (gameType === 1){
        singlePlayer();
    }else{
        twoPlayer();
    }
}