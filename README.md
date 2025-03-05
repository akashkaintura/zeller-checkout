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

graph TD;
    A[Client] --> B[POST /checkout/process];
    B --> C[Checkout Controller];
    C --> D[Checkout Service];
    D --> E{Apply Pricing Rules};
    E --> F[3-for-2 Rule];
    E --> G[Bulk Discount Rule];
    E --> H[Other Rules];
    F --> I[Calculate ATV Discount];
    G --> J[Calculate IPD Discount];
    H --> K[Calculate Custom Discount]
    I --> L[Sum All Discounts]
    J --> L
    K --> L
    L --> M[Calculate Final Total]
    M --> N[Return Total Response]
    N --> O[Client]

    style A fill:#4CAF50,color:white
    style B fill:#2196F3,color:white
    style C fill:#607D8B,color:white
    style D fill:#9C27B0,color:white
    style E fill:#FF9800,color:white
    style F fill:#F44336,color:white
    style G fill:#E91E63,color:white
    style H fill:#673AB7,color:white
    style L fill:#4CAF50,color:white
    style M fill:#009688,color:white


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
