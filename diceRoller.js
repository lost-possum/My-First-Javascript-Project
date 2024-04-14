let roll = 0;
let totalDiceValue = 0;

document.getElementById('submitButtonDice').onclick = function() {

    let howManySides = Number(document.getElementById('howManySidesInput').value);
    let howManyDice = Number(document.getElementById('howManyDiceInput').value);
    let diceModifierAddSubtract = Number(document.getElementById('diceModifierInputAddSubtract').value);
    let diceModifierMultiply = Number(document.getElementById('diceModifierInputMultiply').value);
    let integerPattern = /^\d+$/;

    if (isNaN(howManySides) || isNaN(howManyDice) || isNaN(diceModifierAddSubtract) || isNaN(diceModifierMultiply)) {
        alert("Please enter a valid positive integer for all input fields.");
        return;
    }

    if (howManySides < 0 || howManyDice < 0) {
        alert("Please enter a valid positive integer for all input fields.");
        return;
    }

    if (!integerPattern.test(howManySides) || !integerPattern.test(howManyDice) || !integerPattern.test(diceModifierAddSubtract) || !integerPattern.test(diceModifierMultiply)) {
        alert("Please enter a valid positive integer for all input fields.");
    }

    document.getElementById('diceResultIndividual').innerHTML = "Result (Individual Dice): ";
    totalDiceValue = 0;
    let existingText = document.getElementById('diceResultIndividual').innerHTML;
    document.getElementById('diceResultIndividual').innerHTML = existingText;

    for (let i = 1; i <= howManyDice; i += 1) {
        roll = Math.floor(Math.random() * howManySides) + 1;
        totalDiceValue += roll;
        document.getElementById('diceResultIndividual').innerHTML += roll + " ";
    }
    if (diceModifierMultiply !== 0) {
        totalDiceValue *= diceModifierMultiply;
    }

    totalDiceValue += diceModifierAddSubtract; 
    document.getElementById('diceResultTotal').innerHTML = "Result (Total): " + totalDiceValue;
}

document.getElementById('resetButtonDice').onclick = function() {
    document.getElementById('diceResultTotal').innerHTML = "Result (Total): ";
    document.getElementById('diceResultIndividual').innerHTML = "Result (Individual Dice): ";
    document.getElementById('howManyDiceInput').value = "";
    document.getElementById('howManySidesInput').value = "";
    document.getElementById('diceModifierInputAddSubtract').value = "";
    document.getElementById('diceModifierInputMultiply').value = "";
}

document.getElementById('resetInputFieldsDice').onclick = function() {
    document.getElementById('howManyDiceInput').value = "";
    document.getElementById('howManySidesInput').value = "";
    document.getElementById('diceModifierInputAddSubtract').value = "";
    document.getElementById('diceModifierInputMultiply').value = "";
}

// add roll history
// give the user customizable dice sets - different number sides and quantities in a single dice roll (6d6 + 8d12 etc)
// modifier for each individual die 
// save and load configurations
// randomized sounds effects OR sound effect packs with selectable themes
// a really stupid animation?
// accessibility features