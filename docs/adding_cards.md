# Adding cards to the Data Store

Card sarthi in it's current state stores all the details of the cards in a singular
json array located in `./src/actions/available_cards.json` which get sent to
the client side using a server action stored in the same directory called `getCardsByBankAndType`.

To add/remove cards to this index, just update the json and push to production
while ensuring that each card contains the minimum fields according to the below
interface, stored in `getCardsByBankAndType.ts`.

```ts
export interface CardType {
  bank: string;
  id: string;
  stars: number;
  key: string;
  name: string;
  tags: string[];
  credit_score: number;
  joining_fee: number;
  annual_fee: number;
  interest_rate?: number;
  withdrawal_fee?: number;
  features: string[];
  welcome_offer: string[];
  benefits: string[];
}
```

Example:

```ts
  {
    "bank": "axis",
    "tags": ["shopping", "reward_card"],
    "id": "1",
    "key": "axis-aura-cc",
    "name": "Axis Aura CC",
    "credit_score": 700,
    "joining_fee": 749,
    "annual_fee": 749,
    "stars": 4,
    "interest_rate": 3.6,
    "withdrawal_fee": 2.5,
    "features": [
      "20% Discount on dining",
      "Accelerated Edge Points - 5x",
      "Min 30% discount on diet consultation"
    ],
    "welcome_offer": [],
    "benefits": ["1% fuel surcharge waiver", "1% fuel surcharge waiver"]
  },
```

## Card Images

Images for the cards are currently just stored in the public directory, in `*.jpg`
format. The file names need to correspond with the key mentioned in the json file.

The image for the above example would be named `axis-aura-cc.jgp` for the above example

> PS: In number of entries expand and we need Image URL's instead, it would ensue
> breaking the above interface and introducing a url field.
