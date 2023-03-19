interface CardData {
  key: number;
  title: string;
  legs: number;
  want: string;
  score: string;
  area: string;
  imageUrl: string;
}

export const cards: CardData[] = [
  {
    key: 1,
    title: 'The Wobbly Wonder',
    legs: 3,
    want: 'Yes, but only for my enemies',
    score: '2/10, but 10/10 for causing chaos',
    area: "Not applicable, it's always moving",
    imageUrl: 'https://i.imgur.com/1rTfTqa.jpg',
  },
  {
    key: 2,
    title: 'The Butt Cheek Buster',
    legs: 1,
    want: 'Absolutely not',
    score: '0/10, my backside is still sore',
    area: 'Just enough to fit one cheek',
    imageUrl: 'https://i.imgur.com/f43pX5G.jpg',
  },
  {
    key: 3,
    title: "The Sit 'n Spin",
    legs: 0,
    want: 'Yes, for when I need to clear my head',
    score: "7/10, it's surprisingly calming",
    area: "Small, but you won't be sitting for long anyway",
    imageUrl: 'https://i.imgur.com/rMiH4tP.jpg',
  },
  {
    key: 4,
    title: 'The Cactus Cushion',
    legs: 4,
    want: "Only if I don't like my guests",
    score: "3/10, it's prickly and uncomfortable",
    area: 'Big enough to regret sitting on it',
    imageUrl: 'https://i.imgur.com/fLV8NLv.jpg',
  },
  {
    key: 5,
    title: 'The Whoopie Cushion Chair',
    legs: 4,
    want: 'Yes, for prank purposes only',
    score: "8/10, it's a classic",
    area: 'Just enough to hide the whoopie cushion',
    imageUrl: 'https://i.imgur.com/8FGxwx5.jpg',
  },
];
