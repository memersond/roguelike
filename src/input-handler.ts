import type { Engine } from "./engine"
import type { Entity } from "./entity"

export type Action = {
  perform: (engine: Engine, entity: Entity) => void
}

export class MovementAction implements Action {
  toMoveX: number
  toMoveY: number

  constructor(toMoveX: number, toMoveY: number) {
    this.toMoveX = toMoveX
    this.toMoveY = toMoveY
  }

  perform (engine: Engine, entity: Entity){
    const destX = entity.x + this.toMoveX
    const destY = entity.y + this.toMoveY

    if(!engine.map.isInBounds(destX, destY)){
      return
    }

    if(!engine.map.tiles[destX][destY].walkable){
      return
    }
    entity.move(this.toMoveX, this.toMoveY)
  }
}

export type ControlMap = {
  [key: string]: Action
}

const controls: ControlMap = {
  'ArrowUp': new MovementAction(0, -1),
  'ArrowDown': new MovementAction(0, 1),
  'ArrowRight': new MovementAction(1, 0),
  'ArrowLeft': new MovementAction(-1, 0)
}

export function handleInput(event: KeyboardEvent): Action | undefined {
  return controls[event.key]
}