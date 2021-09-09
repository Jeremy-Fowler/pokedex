import { PokeDetailsController } from "./Controllers/PokeDetailsController.js";
import { PokeListController } from "./Controllers/PokeListController.js";

class App {
  pokeListController = new PokeListController()
  pokeDetailsController = new PokeDetailsController()
}

window["app"] = new App();
