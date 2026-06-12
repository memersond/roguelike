export type Action = {

}

export class MovementAction implements Action {
  toMoveX: number
  toMoveY: number

  constructor(toMoveX: number, toMoveY: number) {
    this.toMoveX = toMoveX
    this.toMoveY = toMoveY
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