export type Mark = 'X' | 'O'
export type Cell = Mark | null

export type Board = [
  Cell, Cell, Cell,
  Cell, Cell, Cell,
  Cell, Cell, Cell,
]

export type Player = {
  id: string
  name: string
  mark: Mark
  kind: 'human' | 'cpu'
  color: 'coral' | 'teal'
  score: number
}

export type GameStatus = 'playing' | 'won' | 'draw'

export type GameState = {
  board: Board
  currentPlayer: Mark
  status: GameStatus
  winner: Mark | null
  winningCells: number[]
  players: Player[]
}
