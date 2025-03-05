# Zeller Checkout System

[![Node.js CI](https://github.com/yourusername/zeller-checkout/actions/workflows/node.js.yml/badge.svg)](https://github.com/yourusername/zeller-checkout/actions)
[![Coverage Status](https://coveralls.io/repos/github/yourusername/zeller-checkout/badge.svg?branch=main)](https://coveralls.io/github/yourusername/zeller-checkout?branch=main)

A flexible checkout system implementing dynamic pricing rules for an electronics store.

## Features

- 🛒 **3-for-2 Apple TV Deal**  
  Buy 3 Apple TVs, pay for 2 → `(3×$109.50) - $109.50 = $219.00`
  
- 💰 **Super iPad Bulk Discount**  
  Buy >4 iPads → $499.99 each: `5×$499.99 = $2,499.95`

- 🔄 **Order Independent Scanning**  
  Scan items in any sequence
  
- ⚙️ **Rule Engine Architecture**  
  Add/Modify pricing rules without core changes

## Getting Started

### Prerequisites
- Node.js v20+
- npm v10+

### Installation
```bash
git clone https://github.com/yourusername/zeller-checkout.git
cd zeller-checkout
npm install
```


### Architecture

graph TD
    A[API Request] --> B[Checkout Controller]
    B --> C{Apply Rules}
    C --> D[3-for-2 Rule]
    C --> E[Bulk Discount Rule]
    C --> F[Future Rules]
    D --> G[Calculate Discount]
    E --> G
    F --> G
    G --> H[Return Total]


### Testing

# All tests
```bash
npm test
```

# Unit tests (with coverage)
```bash
npm run test:unit
```

# Integration tests
```bash
npm run test:integration
```
