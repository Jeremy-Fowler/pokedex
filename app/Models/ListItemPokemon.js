export class ListItemPokemon{
    constructor(pokeData){
        this.name = pokeData.name
        this.url = pokeData.url
    }

    get Template(){
        return /*html*/`
        <li class="list-group-item py-2 text-capitalize selectable" onclick="app.pokeListController.getPokemonDetails('${this.url}')">${this.name}</li>
        `
    }
}