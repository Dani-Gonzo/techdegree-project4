/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

$("#btn__reset").click( () => {
    game = new Game();
    // Remove previous phrase
    $("#phrase ul").empty();
    // Re-enable on-screen keyboard buttons, update each to use "key" class, not "chosen" or "wrong"
    $(".key").attr("disabled", false).removeClass("chosen").removeClass("wrong");
    // Reset heart lives
    $(".tries img").attr("src", "images/liveHeart.png");
    // Reset screen overlay and remove previous win/lose message
    $("#game-over-message").empty()
    $("#overlay").removeClass("win").removeClass("lose");
    game.startGame();
});

$(".keyrow").click((event) => {
    if ($(event.target).hasClass("key")) {
        game.handleInteraction(event.target);
    }
});

document.addEventListener("keyup", (event) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        let button = $(`.keyrow button:contains(${event.key})`);
        if (button.prop("disabled") == false) {
            game.handleInteraction(button);
        }
    }
});