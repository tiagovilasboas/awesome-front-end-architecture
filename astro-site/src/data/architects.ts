export interface Architect {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  twitter?: string;
  website?: string;
}

export const architects: Architect[] = [
  {
    name: 'Dan Abramov',
    role: 'React Core Team',
    avatar: 'https://avatars.githubusercontent.com/u/810438?v=4',
    bio: 'Co-author of Redux and Create React App. Writes about React internals and architecture.' ,
    twitter: 'https://twitter.com/dan_abramov',
  },
  {
    name: 'Brad Frost',
    role: 'Design Systems Advocate',
    avatar: 'https://avatars.githubusercontent.com/u/156128?v=4',
    bio: 'Creator of Atomic Design methodology and speaker on modular design.' ,
    twitter: 'https://twitter.com/brad_frost',
  },
  {
    name: 'Kent C. Dodds',
    role: 'Educator & Engineer',
    avatar: 'https://avatars.githubusercontent.com/u/1500684?v=4',
    bio: 'Advocates for testing and maintainable React applications.',
    twitter: 'https://twitter.com/kentcdodds',
  },
  {
    name: 'Sara Vieira',
    role: 'Engineer & Speaker',
    avatar: 'https://avatars.githubusercontent.com/u/521109?v=4',
    bio: 'Author of "The Opinionated Guide to React" and frequent conference speaker.',
    twitter: 'https://twitter.com/NikkitaFTW',
  }
];