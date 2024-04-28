export interface User {
  id: number;
  name: string;
  lastName: string;
}

export const users: User[] = [
  {
    id: 0,
    name: 'Roman',
    lastName: 'Chaban',
  },
  {
    id: 1,
    name: 'John',
    lastName: 'Doe',
  },
  {
    id: 2,
    name: 'Jack',
    lastName: 'Rassle',
  },
  {
    id: 3,
    name: 'Vin',
    lastName: 'Diesel',
  },
];
