export class Entity {
  x: number
  y: number
  char: string
  color: string
  background: string
  
  constructor(x: number, y: number, char: string, color: string, background: string){
    this.x = x
    this.y = y
    this.char = char
    this.color = color
    this.background  = background
  }
}