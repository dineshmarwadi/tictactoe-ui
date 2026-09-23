# Tic Tac Toe UI

A React + TypeScript UI for a Tic Tac Toe learning project. The board is intentionally logic-neutral so game rules and CPU behavior can be implemented as practice.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/App.tsx` - UI and sample game state
- `src/types.ts` - board, player, and game state types
- `src/styles.css` - responsive board and visual styling

The player schema supports a human player and a CPU opponent through `kind: 'human' | 'cpu'`.
