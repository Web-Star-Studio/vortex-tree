export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  extendedBio?: string;
  stats: {
    projects: number;
    followers: number;
    posts: number;
  };
  socialLinks: {
    linkedin: string;
    github: string;
    portfolio: string;
    email: string;
  };
}