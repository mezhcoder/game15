let game = new Game();
game.generate(true);
document.querySelector(".btnRestartGame").addEventListener('click', () => {
    game.generate(true);
});