import type { Display } from "rot-js"
import { TILE_MAP, TileType, type Tile } from "./tiles"

export class Map {

  width: number
  height: number
  display: Display

  tiles: Tile[][]

  constructor(width: number, height: number, display: Display){
    this.width = width
    this.height = height
    this.display = display

    this.tiles = []
    
    for (let x = 0; x < this.width; x++) {
      const row = [];
      
      for (let y = 0; y < this.height; y++) {
     
        if (x >= 30 && x <= 32 && y === 22) {
          row[y] = { ...TILE_MAP[TileType.WALL] };
        } else {
          row[y] = { ...TILE_MAP[TileType.FLOOR] };
        }
      }
      
      this.tiles[x] = row;
    }

  }

  isInBounds(x: number, y: number) {
    return 0 <= x && x < this.width && 0 <= y && y < this.height;
  }

  render() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile = this.tiles[x][y];
        this.display.draw(x, y, tile.graphic.char, tile.graphic.color, tile.graphic.background);
      }
    }
  }

}