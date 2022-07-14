# Fine Account API


RESTful Expense Split API based on ExpressJS.

## Features

- Allows you to calculate the individual cost of shared expenses

## Call the API

As best practice, use these headers to make requests to the API:

```
Content-Type:application/json
```

## API response

The response code will never be in the response.

**Make operations** (calculator)

Validation error example:

```json
{
    "participants": [
    {
        "name": "Cristian",
        "monto": 1200.65
    },
    {
        "name": "Luis",
        "monto": 500.20
    },
    {
        "name": "Rodri",
        "monto": 800.80
    },
    {
        "name": "Mauro",
        "monto": 0
    },
    {
        "name": "Marcos",
        "monto": 3740.75
    }
]
}
```

**Getting objects** (read)

```json
{
    "message": "Calculo realizado",
    "total": 6242.4,
    "perNuca": 1248.48,
    "p": [
        {
            "name": "Cristian",
            "monto": 1200.65,
            "diff": 47.83
        },
        {
            "name": "Luis",
            "monto": 500.2,
            "diff": 748.28
        },
        {
            "name": "Rodri",
            "monto": 800.8,
            "diff": 447.68
        },
        {
            "name": "Mauro",
            "monto": 0,
            "diff": 1248.48
        },
        {
            "name": "Marcos",
            "monto": 3740.75,
            "diff": -2492.27
        }
    ]
}
```

## Installation

#### Requirements

- npm
- node >= 16.13.0

```
npm install
```

Run application

```
npm run dev
```

```
curl --location --request POST 'http://localhost:3001/api/calculator' \
--header 'Content-Type: application/json' \
--data-raw '{
    "participants": [
    {
        "name": "Cristian",
        "monto": 1200.65
    },
    {
        "name": "Luis",
        "monto": 500.20
    },
    {
        "name": "Rodri",
        "monto": 800.80
    },
    {
        "name": "Mauro",
        "monto": 0
    },
    {
        "name": "Marcos",
        "monto": 3740.75
    }
]
}'
```