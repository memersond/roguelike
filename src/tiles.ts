export type Graphic = {
  char: string,
  color: string,
  background: string
}

export type Tile = {
  walkable: boolean,
  transparent: boolean,
  graphic: Graphic
}


export enum TileType {
  WALL = 'WALL',
  FLOOR = 'FLOOR'
}

export const TILE_MAP: {[key: string]: Tile} = {
  [TileType.WALL]: {
    walkable: false,
    transparent: false,
    graphic: { char: ' ', color: '#fff', background: '#333'}
  },
  [TileType.FLOOR]: {
    walkable: true,
    transparent: true,
    graphic: { char: ' ', color: '#fff', background: '#777'}
  },
}