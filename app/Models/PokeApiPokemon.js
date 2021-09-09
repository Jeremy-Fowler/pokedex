
export class PokeApiPokemon{
    constructor(pokeData){
        this.id = pokeData.id
        this.name = pokeData.name
        this.base_experience = pokeData.base_experience
        this.height = pokeData.height
        this.is_default = pokeData.is_default
        this.order = pokeData.order
        this.weight = pokeData.weight
        this.abilities = pokeData.abilities
        this.forms = pokeData.forms
        this.game_indices = pokeData.game_indices
        this.held_items = pokeData.held_items
        this.location_area_ecounters = pokeData.location_area_ecounters
        this.moves = pokeData.moves
        this.species = pokeData.species
        this.sprites = pokeData.sprites
        this.stats = pokeData.stats
        this.types = pokeData.types
    }

    get Template() {
        return /*html*/`
        <div class="card shadow" style="width: 30rem;">
          <img class="card-img-top" src="${this.sprites.front_default}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title text-capitalize coolfont">#${this.id} ${this.name}</h5>
            <p class="card-text">Height: ${this.height} Weight: ${this.weight}</p>
            <a href="#" class="btn d-flex justify-content-center coolfont btn-primary">CATCH EM</a>
          </div>
        </div>
        `
      }
}