import GameHandler from "./classes/Gamehandler";

export { };

window.addEventListener("DOMContentLoaded", start);

export const gameHandler = new GameHandler();
function start() {
  gameHandler.renderActiveScene("mainmenu");
}