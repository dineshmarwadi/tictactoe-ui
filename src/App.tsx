import type { Board, Player } from './types'

const board: Board = [
  'X', null, 'O',
  null, 'X', null,
  'O', null, null,
]

const players: Player[] = [
  { id: 'player-x', name: 'You', mark: 'X', kind: 'human', color: 'coral', score: 2 },
  { id: 'player-o', name: 'CPU', mark: 'O', kind: 'cpu', color: 'teal', score: 1 },
]

function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Tic Tac Toe home">
          <span className="brand-mark">+</span>
          <span>tic<span>·</span>tac<span>·</span>toe</span>
        </a>
        <div className="round-label">
          <span className="live-dot" />
          Round 04 <span className="muted">/</span> best of 5
        </div>
        <button className="icon-button" type="button" aria-label="Open settings">
          <span aria-hidden="true">•••</span>
        </button>
      </header>

      <section className="game-layout">
        <div className="intro-column">
          <p className="eyebrow">Two minds. Nine squares.</p>
          <h1>Make your<br /><em>mark.</em></h1>
          <p className="intro-copy">A tiny arena for big brain energy.<br />Take the center, or take your chances.</p>
          <div className="turn-note">
            <span className="turn-mark">X</span>
            <div>
              <strong>Your turn</strong>
              <span>Choose a square to play</span>
            </div>
          </div>
        </div>

        <div className="board-column">
          <div className="board-wrap">
            <div className="board" role="grid" aria-label="Tic Tac Toe board">
              {board.map((cell, index) => (
                <button
                  className={`cell ${cell ? `cell-${cell.toLowerCase()}` : ''}`}
                  type="button"
                  role="gridcell"
                  aria-label={cell ? `Square ${index + 1}: ${cell}` : `Square ${index + 1}: empty`}
                  key={index}
                >
                  {cell && <span>{cell}</span>}
                </button>
              ))}
            </div>
            <div className="board-caption">
              <span>Board 01</span>
              <span>9 squares · 3 in a row</span>
            </div>
          </div>
        </div>

        <aside className="score-column" aria-label="Scoreboard">
          <div className="score-heading">
            <span>Scoreboard</span>
            <span className="score-rule" />
          </div>
          <div className="players">
            {players.map((player) => (
              <div className={`player ${player.mark === 'X' ? 'player-active' : ''}`} key={player.id}>
                <div className={`avatar avatar-${player.color}`}>{player.mark}</div>
                <div className="player-details">
                  <strong>{player.name}</strong>
                  <span>{player.kind === 'cpu' ? 'CPU' : 'Player'} {player.mark}</span>
                </div>
                <span className="player-score">{player.score}</span>
              </div>
            ))}
          </div>
          <div className="score-footer">
            <span>First to 3</span>
            <span className="mini-bars"><i /><i /><i /><i /><i /></span>
          </div>
        </aside>
      </section>

      <footer className="footer">
        <span>Made for the in-between moments</span>
        <button className="reset-button" type="button">↻ <span>New game</span></button>
        <span className="footer-code">TTT / 001</span>
      </footer>
    </main>
  )
}

export default App
