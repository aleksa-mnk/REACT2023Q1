interface CardData {
  key: number;
  title: string;
  legs: number;
  want: string;
  score: string;
  area: string;
  imageUrl: string;
}

import Card1 from '../../assets/images/1.png';
import Card2 from '../../assets/images/2.png';
import Card3 from '../../assets/images/3.png';
import Card4 from '../../assets/images/4.png';

export const cards: CardData[] = [
  {
    key: 1,
    title: 'Сырок на ножках',
    legs: 3,
    want: 'Yes, but only for my enemies',
    score: '2/10, but 10/10 for causing chaos',
    area: "Not applicable, it's always moving",
    imageUrl: Card1,
  },
  {
    key: 2,
    title: 'Элегантный сырок на ножках',
    legs: 1,
    want: 'Absolutely not',
    score: '0/10, my backside is still sore',
    area: 'Just enough to fit one cheek',
    imageUrl: Card2,
  },
  {
    key: 3,
    title: 'Козёл гимнастический',
    legs: 0,
    want: 'Yes, for when I need to clear my head',
    score: "7/10, it's surprisingly calming",
    area: "Small, but you won't be sitting for long anyway",
    imageUrl: Card3,
  },
  {
    key: 4,
    title: 'ХЗ',
    legs: 4,
    want: "Only if I don't like my guests",
    score: "3/10, it's prickly and uncomfortable",
    area: 'Big enough to regret sitting on it',
    imageUrl: Card4,
  },
];
