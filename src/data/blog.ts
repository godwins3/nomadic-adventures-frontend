export interface BlogPost {
    id: number;
    title: string;
    content: string;
    image: string;
    date: string;
    category: string;
}

const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 Must-Visit Hidden Gems in South America',
      content: 'Discover the lesser-known wonders of South America that will take your breath away...',
      image: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3',
      date: '2024-03-15',
      category: 'Travel Tips',
    },
    {
      id: 2,
      title: 'Sustainable Travel: How to Minimize Your Environmental Impact',
      content: 'Learn how to explore the world while leaving a positive impact on the places you visit...',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      date: '2024-03-10',
      category: 'Eco-Tourism',
    },
    // Add more blog post objects
];

export default blogPosts;