import { ProxyState } from "../AppState.js"
import { ListItemPokemon } from "../Models/ListItemPokemon.js";
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";

// @ts-ignore
const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/?limit=251'
})

class PokeApiService{
    async getPokemon(){
        let res = await pokeApi.get('')
        console.log('pokeApi', res.data.results);
        ProxyState.apiPokemon = res.data.results.map(p => new ListItemPokemon(p))
    }

    async getPokemonDetails(url) {
        let res = await pokeApi.get(url)
        // @ts-ignore
        ProxyState.currentPokemon = new PokeApiPokemon(res.data)
        console.log(ProxyState.currentPokemon)
    }
}

export const pokeApiService = new PokeApiService()