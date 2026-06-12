import * as Rot from 'rot-js'
import { Entity } from './entity'
import { handleInput } from './input-handler'
import { Map } from './map'

export class Engine {
  public static readonly WIDTH = 80
  public static readonly HEIGHT = 50

  display: Rot.Display
  player: Entity
  npc: Entity
  entities: Entity[]

  map: Map


  constructor(){
    this.display = new Rot.Display({width: Engine.WIDTH, height: Engine.HEIGHT, forceSquareRatio: true})

    const container = this.display.getContainer()
    document.body.appendChild(container!)

    this.player = new Entity(Engine.WIDTH /2, Engine.HEIGHT /2, '@')

    this.npc = new Entity(Engine.WIDTH /2 -5, Engine.HEIGHT /2 -5, '@', '#ff0')

    this.entities = [this.player, this.npc]

    this.map = new Map(80, 45, this.display)

    window.addEventListener('keydown', (event) => {
      this.update(event)
    })

    this.render()
  }

  update(event: KeyboardEvent) {
    this.display.clear()

    const action = handleInput(event)

    if(action){
      action.perform(this, this.player)
    }

    this.render()
  }

  render() {
    this.map.render()
    this.entities.forEach((e) => {
      this.display.draw(e.x, e.y, e.char, e.color, e.background)
    })
  }

}