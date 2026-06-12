export class Entity {
  x: number
  y: number
  char: string
  color: string
  background: string
  
  constructor(x: number, y: number, char: string, color: string = '#fff', background: string = '#000'){
    this.x = x
    this.y = y
    this.char = char
    this.color = color
    this.background  = background
  }

  move(dx: number, dy: number){
    this.x += dx
    this.y += dy
  }
}