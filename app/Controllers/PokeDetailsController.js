import { ProxyState } from "../AppState.js";

function _drawCurrentPokemon(){
    // @ts-ignore
    document.getElementById('current-pokemon').innerHTML = ProxyState.currentPokemon.Template
}
export class PokeDetailsController{
    constructor(){
        ProxyState.on('currentPokemon', _drawCurrentPokemon)
    }
}