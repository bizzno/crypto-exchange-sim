# Crypto Exchange Simulator

Cryptocurrency exchange trading simulator with order book and matching engine.

## Features

- Real-time order book management
- Market and limit order support
- Order matching engine
- Price discovery simulation
- Trade execution tracking
- Multiple cryptocurrency pairs
- WebSocket API for live updates

## Structure

```
src/
├── core/        - Trading engine and order matching
├── api/         - REST and WebSocket endpoints
├── models/      - Order, Trade, and Market data models
└── utils/       - Helper functions and utilities
```

## Installation

Install dependencies:
```bash
npm install
```

## Usage

Start the exchange simulator:
```bash
npm start
```

Place an order via API:
```javascript
const order = {
  type: 'limit',
  side: 'buy',
  pair: 'BTC/USD',
  price: 50000,
  amount: 0.5
};

fetch('/api/orders', {
  method: 'POST',
  body: JSON.stringify(order)
});
```

## Requirements

- Node.js 14.0 or higher
- Express.js
- WebSocket support

## License

MIT
