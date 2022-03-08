"use strict";
const prompt = require('prompt-sync')();
const players = require('./players')

function gestureChoices(){
    let gestures = [Rock, Paper, Scissors, Lizard, Spock];
    return gestures;
}

function gameRules(){
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

function gameProgress(){
    
}

function singlePlayer(){


}

function twoPlayer(){

}
