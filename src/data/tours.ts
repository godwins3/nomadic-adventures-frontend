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
    name: 'Taita Hills',
    description: 'Explore the lush, mist-covered Taita Hills, home to unique wildlife and breathtaking views of Mount Kilimanjaro.',
    duration: '3 days',
    price: 599,
    image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Adventure',
  },
  {
    id: 2,
    name: 'Amboseli National Park',
    description: 'Experience the magic of Amboseli, famous for its large elephant herds and stunning views of Mount Kilimanjaro.',
    duration: '4 days',
    price: 899,
    image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    category: 'Wildlife',
  },
  {
    id: 3,
    name: 'Maasai Mara National Reserve',
    description: 'Witness the incredible wildlife and stunning landscapes of the Maasai Mara, home to the Great Migration.',
    duration: '5 days',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1554490752-6a232eca5e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFhc2FpJTIwbWFyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8Mg%3D%3D',
    category: 'Wildlife',
  },
  {
    id: 4,
    name: 'Lake Nakuru',
    description: 'Discover the pink flamingo-fringed shores and diverse wildlife of this alkaline lake.',
    duration: '5 days',
    price: 800,
    image: "/images/img13.jpg",
    category: 'Nature'
  },
  {
    id: 5,
    name: 'Nairobi National Park',
    description: 'Experience a unique urban wildlife sanctuary with diverse animals against a city backdrop.',
    duration: '4 days',
    price: 2000,
    image: "/images/img11.jpg",
    category: 'Wildlife'
  },
  {
    id: 6,
    name: 'Simba Hills',
    description: 'Explore lush coastal rainforest and rolling hills home to diverse wildlife and the rare Sable antelope.',
    duration: '4 days',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1669744665015-33f3a2f657b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2ltYmElMjBoaWxsc3xlbnwwfHwwfHx8Mg%3D%3D',
    category: 'Adventure'
  },
  {
    id: 7,
    name: 'Wasini Marine Park',
    description: 'Dive into crystal-clear waters to discover vibrant coral reefs and diverse marine life in this coastal paradise.',
    duration: '4 days',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1582623838120-455da222cdc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    category: 'Nature'
  }
];
