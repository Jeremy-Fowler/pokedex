import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  user = 'jeremy'
  /** @type {import('./Models/ListItemPokemon').ListItemPokemon[]} */
  apiPokemon = []

  /** @type {import('./Models/PokeApiPokemon').PokeApiPokemon[]} */
  currentPokemon = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
