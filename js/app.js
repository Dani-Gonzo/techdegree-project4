/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

$("#btn__reset").click( () => {
    game = new Game();
    // Reset screen overlay
    $("#overlay").removeClass("win").removeClass("lose");
    game.startGame();
});

$(".keyrow").click((event) => {
    if ($(event.target).hasClass("key")) {
        game.handleInteraction(event.target);
    }
});

document.addEventListener("keyup", (event) => {
    // If activePhrase is null, do not accept keyboard input
    if (game.activePhrase == null) {
        return;
    }
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        const button = $(`.keyrow button:contains(${event.key})`);
        if (button.prop("disabled") == false) {
            game.handleInteraction(button);
        }
    }
});