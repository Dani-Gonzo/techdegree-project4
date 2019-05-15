/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        // Tracks number of missed guesses
        this.missed = 0;
        // Array of phrase objects for the game to use
        this.phrases = this.createPhrases();
        // Phrase that is currently being used
        this.activePhrase = null;
    }

    // Creates and returns array of possible phrases to be used in game
    createPhrases() {
        return [
            new Phrase("The plot thickens"),
            new Phrase("Greased lightning"),
            new Phrase("Jack of all trades"),
            new Phrase("Jump the shark"),
            new Phrase("My cup of tea")
        ];
    }

    // Selects and returns random phrase from phrases property to be used in game
    getRandomPhrase() {
        let chosenPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return chosenPhrase;
    }
}