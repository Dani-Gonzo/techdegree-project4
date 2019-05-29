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
        const chosenPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return chosenPhrase;
    }

    // Begins game by selecting a random phrase and displaying it to the user
    startGame() {
        $("#overlay").hide();
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    }

    // Checks for winning move
    // Return true if won, false if not
    checkForWin() {
        if ($(".hide").length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    // Displays game over message
    // gameWon - Whether or not the user won the game
    gameOver(gameWon) {
        // Display #overlay
        $("#overlay").show();
        // Insert win or lose message into h1 #game-over-message depending on gameWon
        // Replace #overlay "start" class with "win" or "lose" class depending on gameWon
        if (gameWon == true) {
           $("#game-over-message").empty().append("Congratulations! You win! Play again?");
           $("#overlay").removeClass("start").addClass("win");
        }
        else {
            $("#game-over-message").empty().append("Better luck next time! Try again?");
            $("#overlay").removeClass("start").addClass("lose");
        }
        // Set active phrase to null so app will not accept keyboard input
        this.activePhrase = null;
        // Remove previous phrase
        $("#phrase ul").empty();
        // Re-enable on-screen keyboard buttons, update each to use "key" class, not "chosen" or "wrong"
        $(".key").attr("disabled", false).removeClass("chosen").removeClass("wrong");
        // Reset heart lives
        $(".tries img").attr("src", "images/liveHeart.png");
    }

    // Increases value of missed property
    // Removes a life (heart) from the scoreboard
    // Checks if player has remaining lives and ends game if none remaining
    removeLife() {
        this.missed++;
        // Select heart image based on how many times the player has missed a correct guess
        const tries = $(`#scoreboard li:nth-child(${this.missed}) img`);

        if (tries.attr("src") == "images/liveHeart.png") {
            tries.attr("src", "images/lostHeart.png");
        }
        
        if (this.missed == 5) {
           this.gameOver(false);
        }
    }

    // Handles on-screen keyboard button clicks
    // Takes in HTML button element that was clicked
    handleInteraction(button) {
        $(button).attr("disabled", true);
        if (!this.activePhrase.checkLetter($(button).text())) {
            $(button).addClass("wrong");
            this.removeLife();
        }
        else {
            $(button).addClass("chosen");
            this.activePhrase.showMatchedLetter($(button).text());
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        }
    }
}