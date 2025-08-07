import { Post, ProfileData } from './types';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Como eu aprendi a programar',
    content: 'Explorando as minhas experiências com programação e como eu aprendi a programar. Desde o começo, quando eu comecei a programar, até o momento atual, onde eu estou trabalhando com desenvolvimento de software.',
    date: '2024-01-15',
    readTime: '3 min read',
    tags: ['Web Development', 'Technology', 'Innovation'],
    engagement: { likes: 245, comments: 32, shares: 18 }
  },
  {
    id: '2', 
    title: 'A arte de ser minimalista',
    content: 'Por que menos é mais em design moderno. Descubra os princípios que fazem interfaces tanto belas quanto funcionais. Exploramos a psicologia por trás de designs limpos, o impacto do espaço em branco e como a minimalidade pode melhorar a experiência do usuário mantendo a identidade da marca.',
    date: '2024-01-10',
    readTime: '5 min read',
    tags: ['Design', 'UI/UX', 'Minimalism'],
    engagement: { likes: 189, comments: 24, shares: 15 }
  },
  {
    id: '3',
    title: 'Masterização de cultura remota',
    content: 'Insights sobre como criar equipes efetivas e manter a produtividade em ambientes distribuídos. De estratégias de comunicação a ferramentas de colaboração digital, aprenda como fomentar uma cultura remota que traga o melhor de sua equipe.',
    date: '2024-01-05',
    readTime: '4 min read', 
    tags: ['Remote Work', 'Leadership', 'Productivity'],
    engagement: { likes: 312, comments: 45, shares: 28 }
  },
  {
    id: '4',
    title: 'A psicologia das cores na marca',
    content: 'Como as escolhas de cores influenciam o comportamento do usuário e a percepção da marca. Um mergulho profundo na teoria das cores e aplicações práticas no design digital. Entender o impacto emocional das cores pode transformar a conexão da sua marca com os usuários.',
    date: '2023-12-28',
    readTime: '6 min read',
    tags: ['Branding', 'Psychology', 'Design'],
    engagement: { likes: 156, comments: 19, shares: 12 }
  },
  {
    id: '5',
    title: 'Escalando startups: Lições aprendidas',
    content: 'Insights sobre como escalar várias startups desde a ideia até o estágio de crescimento. O que funciona, o que não funciona e tudo no meio. Um guia prático para navegar pelos desafios do crescimento rápido mantendo a cultura da empresa e a qualidade do produto.',
    date: '2023-12-20',
    readTime: '7 min read',
    tags: ['Startups', 'Entrepreneurship', 'Growth'],
    engagement: { likes: 428, comments: 67, shares: 34 }
  },
  {
    id: '6',
    title: 'Inteligência artificial e o futuro do design',
    content: 'Explorando como a inteligência artificial está revolucionando o processo de design. Desde layouts automatizados até sugestões de cores inteligentes, as ferramentas de IA estão se tornando indispensáveis para designers modernos.',
    date: '2023-12-15',
    readTime: '4 min read',
    tags: ['AI', 'Design', 'Future'],
    engagement: { likes: 298, comments: 41, shares: 22 }
  }
];

export const profileData: ProfileData = {
  name: 'Guilherme Farias',
  title: 'Software Engineer',
  bio: 'Apaixonado por tecnologia e inovação. Trabalho com desenvolvimento de software desde 2015, com foco em JavaScript, TypeScript, React e Node.js.',
  extendedBio: 'Atualmente trabalho como Software Engineer na empresa Viva Real, onde desenvolvo soluções para otimizar o processo de compra e venda de imóveis.',
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