/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    // Constructor accepts a phrase string
    constructor(phrase) {
        // Converting phrase to lower case for easier comparison
        this.phrase = phrase.toLowerCase();
    }

    // Display phrase on game board
    addPhraseToDisplay() {
        // Use for loop to iterate over chosen string elements because it's not an array
        for (let i = 0; i < this.phrase.length; i++) {
            // Set variable to element at current index of string
            let phraseElement = this.phrase[i];
            // Create a list element with the appropriate class for the current element
            if (phraseElement != " ") {
                $("#phrase ul").append(`<li class="hide letter ${phraseElement}">${phraseElement}</li>`);
            }
            else {
                $("#phrase ul").append('<li class="space"> </li>');
            }
        }
    }
}