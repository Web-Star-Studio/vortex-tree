import { Post, ProfileData } from './types';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Building the Future of Web Development',
    content: 'Exploring the latest trends in web development and how they shape the digital landscape. From progressive web apps to AI-powered experiences, the web is evolving at an unprecedented pace. This comprehensive guide dives deep into modern frameworks, performance optimization, and the tools that are shaping tomorrow\'s digital experiences.',
    date: '2024-01-15',
    readTime: '3 min read',
    tags: ['Web Development', 'Technology', 'Innovation'],
    engagement: { likes: 245, comments: 32, shares: 18 }
  },
  {
    id: '2', 
    title: 'The Art of Minimalist Design',
    content: 'Why less is more in modern UI/UX design. Discover the principles that make interfaces both beautiful and functional. We explore the psychology behind clean designs, the impact of whitespace, and how minimalism can enhance user experience while maintaining brand identity.',
    date: '2024-01-10',
    readTime: '5 min read',
    tags: ['Design', 'UI/UX', 'Minimalism'],
    engagement: { likes: 189, comments: 24, shares: 15 }
  },
  {
    id: '3',
    title: 'Mastering Remote Work Culture',
    content: 'Insights on building effective remote teams and maintaining productivity in distributed environments. From communication strategies to digital collaboration tools, learn how to foster a thriving remote culture that brings out the best in your team.',
    date: '2024-01-05',
    readTime: '4 min read', 
    tags: ['Remote Work', 'Leadership', 'Productivity'],
    engagement: { likes: 312, comments: 45, shares: 28 }
  },
  {
    id: '4',
    title: 'The Psychology of Color in Branding',
    content: 'How color choices influence user behavior and brand perception. A deep dive into color theory and practical applications in digital design. Understanding the emotional impact of colors can transform your brand\'s connection with users.',
    date: '2023-12-28',
    readTime: '6 min read',
    tags: ['Branding', 'Psychology', 'Design'],
    engagement: { likes: 156, comments: 19, shares: 12 }
  },
  {
    id: '5',
    title: 'Scaling Startups: Lessons Learned',
    content: 'Key insights from scaling multiple startups from idea to growth stage. What works, what doesn\'t, and everything in between. A practical guide to navigating the challenges of rapid growth while maintaining company culture and product quality.',
    date: '2023-12-20',
    readTime: '7 min read',
    tags: ['Startups', 'Entrepreneurship', 'Growth'],
    engagement: { likes: 428, comments: 67, shares: 34 }
  },
  {
    id: '6',
    title: 'AI and the Future of Design',
    content: 'Exploring how artificial intelligence is revolutionizing the design process. From automated layouts to intelligent color suggestions, AI tools are becoming indispensable for modern designers.',
    date: '2023-12-15',
    readTime: '4 min read',
    tags: ['AI', 'Design', 'Future'],
    engagement: { likes: 298, comments: 41, shares: 22 }
  }
];

export const profileData: ProfileData = {
  name: 'Alex Johnson',
  title: 'Product Designer & Developer',
  bio: 'Passionate about creating beautiful, functional digital experiences. I bridge the gap between design and development, crafting products that users love.',
  extendedBio: 'Currently building innovative solutions at the intersection of design and technology, with a focus on user-centered design and modern development practices.',
  stats: {
    projects: 42,
    followers: 8500,
    posts: 156
  },
  socialLinks: {
    linkedin: 'https://linkedin.com/in/alexjohnson',
    github: 'https://github.com/alexjohnson',
    portfolio: 'https://alexjohnson.design',
    email: 'mailto:alex@example.com'
  }
};