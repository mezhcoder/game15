let game = new Game();
game.generate(true);
document.querySelector(".btnRestartGame").addEventListener('click', () => {
    document.querySelector(".field").innerHTML = "";
    game.generate(true);
});