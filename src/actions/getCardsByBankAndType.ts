"use server";
import _cards from "./available_cards.json";

export interface Card {
  bank: string;
  id: string;
  key: string;
  name: string;
  tags: string[];
  credit_score: number;
  joining_fee: number;
  annual_fee: number;
  interest_rate: number;
  withdrawal_fee: number;
  features: string[];
  welcome_offer: string[];
  benefits: string[];
}

const cards: Card[] = _cards;

export default async function getCardsByBankAndType(
  bank: string,
  type: string,
): Promise<Card[]> {
  const cardByType = cards.filter((card) => card.tags.includes(type));
  if (!bank) {
    return cardByType;
  }
  return cardByType.filter((card) => card.bank === bank);
}
