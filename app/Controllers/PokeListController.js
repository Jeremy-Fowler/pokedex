import { ProxyState } from "../AppState.js";
import { pokeApiService } from "../Services/PokeApiService.js"

function _drawPokeList(){
    let template = ''
    ProxyState.apiPokemon.forEach(p => template += p.Template)
    document.getElementById('poke-list').innerHTML = template
}    
export class PokeListController{
    constructor(){
        pokeApiService.getPokemon()
        ProxyState.on('apiPokemon', _drawPokeList)
    }

    async getPokemonDetails(url){
        try {
            await pokeApiService.getPokemonDetails(url)    
        } catch (error) {
            console.error('GETPOKEMONDETAILS', error)
        }
    }

}