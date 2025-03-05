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

flowchart TB
    subgraph Client_Layer["Client Layer"]
        A[Web/Mobile App] -->|POST SKUs List| B[API Gateway]
    end

    subgraph API_Layer["API Layer"]
        B --> C{{Checkout Controller}}
        C -->|Process Request| D[Checkout Service]
    end

    subgraph Business_Layer["Business Rules"]
        D --> E[Pricing Rule Engine]
        E --> F[[3-for-2 Rule\natv]]
        E --> G[[Bulk Discount Rule\nipd]]
        E --> H[[Custom Rules...]]
    end

    subgraph Data_Layer["Data Layer"]
        I[(Product Catalog)] -->|Get Prices| D
    end

    subgraph Response_Flow["Response Flow"]
        H --> J{Sum Discounts}
        J --> K[Calculate Total]
        K --> L{{Checkout Controller}}
        L --> M[API Gateway]
        M --> N[Client Response]
    end

    style Client_Layer fill:#E3F2FD,stroke:#2196F3
    style API_Layer fill:#FBE9E7,stroke:#FF5722
    style Business_Layer fill:#E8F5E9,stroke:#4CAF50
    style Data_Layer fill:#FFF3E0,stroke:#FF9800
    style Response_Flow fill:#EDE7F6,stroke:#673AB7


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
