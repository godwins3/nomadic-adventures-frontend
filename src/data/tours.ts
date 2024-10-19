export interface Tour {
    id: number;
    name: string;
    description: string;
    duration: string;
    price: number;
    image: string;
    category: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    name: 'Machu Picchu Adventure',
    description: 'Explore the ancient Incan ruins and breathtaking Andean landscapes.',
    duration: '7 days',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Cultural',
  },
  {
    id: 2,
    name: 'Sahara Desert Expedition',
    description: 'Experience the magic of the desert and camp under the stars.',
    duration: '5 days',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    category: 'Adventure',
  },
  {
    id: 3,
    name: 'Northern Lights in Iceland',
    description: 'Witness the mesmerizing aurora borealis and explore glaciers.',
    duration: '6 days',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80',
    category: 'Nature',
  },
  // Add more tour objects as needed
];

