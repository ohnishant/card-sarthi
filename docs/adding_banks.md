# Adding More Banks

To support the searching functionality, each bank needs to have a tag associated with it,
which is reflected in the `bank` field of the card in `available_cards.json`.
Therefore, to banks other than the ones listed, or to add cards from banks that are not
already added, they have to be added to the `valid_banks`.

Find this in the `src/app/categories/_components/Results.tsx`:

```ts
const validBanks = ["axis", "hdfc", "idfc", "kotak_mahindra"];
const banks = [
  { name: "Axis Bank", value: "axis" },
  { name: "HDFC Bank", value: "hdfc" },
  { name: "IDFC Bank", value: "idfc" },
  { name: "Kotak Mahindra Bank", value: "kotak_mahindra" },
];
```
Add the new bank to both the Arrays, the `name` property is used to generate the sidebar
in the `/categories` route, while `value` and `validBanks` share members
and are used to look up in the data store.
