import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import React, { useState, useRef, useEffect } from 'react';
import { Search, Calendar, Filter, User, FileText, ExternalLink, Menu, X, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Post {
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

const mockPosts: Post[] = [
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

export default function Index() {
  const [activeSection, setActiveSection] = useState<'about' | 'posts'>('about');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(mockPosts.flatMap(post => post.tags)));

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const scrollToSection = (section: 'about' | 'posts') => {
    if (isMobile && scrollContainerRef.current) {
      const scrollPosition = section === 'about' ? 0 : scrollContainerRef.current.scrollWidth / 2;
      scrollContainerRef.current.scrollTo({ 
        left: scrollPosition, 
        behavior: 'smooth' 
      });
    }
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  const handleScroll = () => {
    if (isMobile && scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const threshold = containerWidth / 2;
      
      setActiveSection(scrollLeft < threshold ? 'about' : 'posts');
    }
  };

  useEffect(() => {
    if (isMobile) {
      const container = scrollContainerRef.current;
      if (container) {
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
      }
    }
  }, [isMobile]);

  // Desktop Layout
  if (!isMobile) {
    return (
      <div className="min-h-screen bg-charcoal text-white">
        {/* Desktop Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-xl border-b border-border">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold/60 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-charcoal" />
                </div>
                <div>
                  <h1 className="font-bold text-lg">Alex Johnson</h1>
                  <p className="text-softgray text-sm">Product Designer & Developer</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <SignedOut>
                  <Button asChild>
                    <a href="/sign-in">Sign In</a>
                  </Button>
                  <Button asChild>
                    <a href="/sign-up">Sign Up</a>
                  </Button>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </header>

        {/* Desktop Main Content */}
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left Sidebar - About Me (Desktop) */}
              <aside className="lg:col-span-4 xl:col-span-3">
                <div className="sticky top-32 space-y-8">
                  {/* Cover & Profile */}
                  <div className="relative">
                    <div className="h-32 bg-gradient-to-br from-gold/20 via-charcoal-200 to-softgray/10 rounded-2xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gold/10 to-transparent opacity-80"></div>
                    </div>
                    
                    <div className="absolute -bottom-12 left-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold/60 rounded-full border-4 border-charcoal shadow-2xl flex items-center justify-center">
                        <User className="w-12 h-12 text-charcoal" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-12 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Alex Johnson</h2>
                      <p className="text-gold font-medium mb-3">Product Designer & Developer</p>
                      <p className="text-softgray leading-relaxed text-sm">
                        Passionate about creating beautiful, functional digital experiences. 
                        I bridge the gap between design and development, crafting products 
                        that users love.
                      </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 px-4 bg-card rounded-xl border border-border">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold">42</div>
                        <div className="text-xs text-softgray">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold">8.5k</div>
                        <div className="text-xs text-softgray">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold">156</div>
                        <div className="text-xs text-softgray">Posts</div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                      <a
                        href="https://linkedin.com/in/alexjohnson"
                        className="flex items-center space-x-3 p-3 bg-card rounded-xl border border-border hover:border-gold transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Linkedin className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium group-hover:text-gold">LinkedIn</span>
                        <ExternalLink className="w-3 h-3 text-softgray group-hover:text-gold ml-auto" />
                      </a>

                      <a
                        href="https://github.com/alexjohnson"
                        className="flex items-center space-x-3 p-3 bg-card rounded-xl border border-border hover:border-gold transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                          <Github className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium group-hover:text-gold">GitHub</span>
                        <ExternalLink className="w-3 h-3 text-softgray group-hover:text-gold ml-auto" />
                      </a>

                      <a
                        href="https://alexjohnson.design"
                        className="flex items-center space-x-3 p-3 bg-card rounded-xl border border-border hover:border-gold transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                          <Globe className="w-4 h-4 text-charcoal" />
                        </div>
                        <span className="font-medium group-hover:text-gold">Portfolio</span>
                        <ExternalLink className="w-3 h-3 text-softgray group-hover:text-gold ml-auto" />
                      </a>

                      <a
                        href="mailto:alex@example.com"
                        className="flex items-center space-x-3 p-3 bg-card rounded-xl border border-border hover:border-gold transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium group-hover:text-gold">Email</span>
                        <ExternalLink className="w-3 h-3 text-softgray group-hover:text-gold ml-auto" />
                      </a>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content Area - Posts */}
              <section className="lg:col-span-8 xl:col-span-9">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Latest Posts</h2>
                      <p className="text-softgray">Thoughts on design, development, and everything in between</p>
                    </div>
                    <div className="text-sm text-softgray">
                      {filteredPosts.length} posts
                    </div>
                  </div>

                  {/* Search and Filters */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-softgray" />
                      <Input
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-card border-border focus:border-gold"
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={!selectedTag ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedTag(null)}
                        className={`rounded-full ${
                          !selectedTag
                            ? 'bg-gold text-charcoal hover:bg-gold/90'
                            : 'border-border text-softgray hover:border-gold hover:text-white'
                        }`}
                      >
                        All
                      </Button>
                      {allTags.slice(0, 6).map((tag) => (
                        <Button
                          key={tag}
                          variant={selectedTag === tag ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                          className={`rounded-full ${
                            selectedTag === tag
                              ? 'bg-gold text-charcoal hover:bg-gold/90'
                              : 'border-border text-softgray hover:border-gold hover:text-white'
                          }`}
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Posts Grid */}
                  <div className="grid gap-6">
                    {filteredPosts.length === 0 ? (
                      <div className="text-center py-16">
                        <FileText className="w-16 h-16 text-softgray mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                        <p className="text-softgray">No posts match your current search criteria.</p>
                      </div>
                    ) : (
                      filteredPosts.map((post, index) => (
                        <Card key={post.id} className={`p-6 bg-card border-border hover:border-gold transition-all duration-300 group cursor-pointer ${
                          index === 0 ? 'lg:p-8' : ''
                        }`}>
                          <div className="space-y-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className={`font-semibold mb-3 group-hover:text-gold transition-colors ${
                                  index === 0 ? 'text-2xl' : 'text-xl'
                                }`}>
                                  {post.title}
                                </h3>
                                <p className="text-softgray leading-relaxed mb-4">
                                  {post.content}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center space-x-4 text-softgray">
                                <span className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {new Date(post.date).toLocaleDateString('en-US', { 
                                    month: 'short', 
                                    day: 'numeric', 
                                    year: 'numeric' 
                                  })}
                                </span>
                                <span>{post.readTime}</span>
                              </div>
                              <div className="flex items-center space-x-4 text-softgray">
                                <span className="flex items-center">
                                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                                  {post.engagement.likes} likes
                                </span>
                                <span>{post.engagement.comments} comments</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {post.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-muted text-softgray text-xs rounded-full hover:bg-gold/10 hover:text-gold transition-colors cursor-pointer"
                                  onClick={() => setSelectedTag(tag)}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Card>
                      ))
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Mobile Layout (Original horizontal scroll design)
  return (
    <div className="min-h-screen bg-charcoal text-white">
      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-lg border-b border-border">
        <div className="flex justify-center py-4 px-6">
          <div className="flex space-x-1 bg-muted rounded-full p-1">
            <Button
              variant={activeSection === 'about' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => scrollToSection('about')}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeSection === 'about'
                  ? 'bg-gold text-charcoal shadow-lg'
                  : 'text-softgray hover:text-white'
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              About Me
            </Button>
            <Button
              variant={activeSection === 'posts' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => scrollToSection('posts')}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeSection === 'posts'
                  ? 'bg-gold text-charcoal shadow-lg'
                  : 'text-softgray hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4 mr-2" />
              Posts
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <SignedOut>
              <Button asChild>
                <a href="/sign-in">Sign In</a>
              </Button>
              <Button asChild>
                <a href="/sign-up">Sign Up</a>
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Mobile Content with Horizontal Scroll */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scroll-container pt-20"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* About Me Section */}
        <section
          className="min-w-full flex-shrink-0 max-w-[80%] mx-auto"
          style={{ scrollSnapAlign: 'start' }}
        >
          {/* Cover Image - Full Width */}
          <div className="relative mb-16">
            <div className="h-48 bg-gradient-to-br from-gold/20 via-charcoal-200 to-softgray/10 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gold/10 to-transparent opacity-80"></div>
            </div>
            
            {/* Profile Avatar positioned over cover */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-gold to-gold/60 rounded-full border-4 border-charcoal shadow-2xl flex items-center justify-center">
                  <User className="w-16 h-16 text-charcoal" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto px-6 space-y-8">
            {/* Profile Info */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Alex Johnson</h1>
              <p className="text-softgray text-lg">Product Designer & Developer</p>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-softgray leading-relaxed">
                Passionate about creating beautiful, functional digital experiences. 
                I bridge the gap between design and development, crafting products 
                that users love.
              </p>
              <p className="text-softgray leading-relaxed">
                Currently building innovative solutions at the intersection of 
                design and technology, with a focus on user-centered design and 
                modern development practices.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/alexjohnson"
                className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-gold transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-softgray">Professional profile</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-softgray group-hover:text-gold transition-colors" />
              </a>

              <a
                href="https://github.com/alexjohnson"
                className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-gold transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-softgray">Code repositories</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-softgray group-hover:text-gold transition-colors" />
              </a>

              <a
                href="https://alexjohnson.design"
                className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-gold transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-charcoal" />
                  </div>
                  <div>
                    <p className="font-medium">Portfolio</p>
                    <p className="text-sm text-softgray">Design work & case studies</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-softgray group-hover:text-gold transition-colors" />
              </a>

              <a
                href="mailto:alex@example.com"
                className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-gold transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-softgray">Get in touch</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-softgray group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>
        </section>

        {/* Posts Section */}
        <section
          className="min-w-full px-6 py-8"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-softgray" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-card border-border focus:border-gold"
                />
              </div>

              {/* Tag Filter */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={!selectedTag ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedTag(null)}
                  className={`rounded-full ${
                    !selectedTag
                      ? 'bg-gold text-charcoal'
                      : 'border-border text-softgray hover:border-gold hover:text-white'
                  }`}
                >
                  All
                </Button>
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`rounded-full ${
                      selectedTag === tag
                        ? 'bg-gold text-charcoal'
                        : 'border-border text-softgray hover:border-gold hover:text-white'
                    }`}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Posts List */}
            <div className="space-y-6">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-softgray mx-auto mb-4" />
                  <p className="text-softgray">No posts found matching your criteria.</p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <Card key={post.id} className="p-6 bg-card border-border hover:border-gold transition-all duration-300 group cursor-pointer">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-softgray leading-relaxed mb-4">
                            {post.content}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-softgray">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span>{post.engagement.likes} likes</span>
                          <span>{post.engagement.comments} comments</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-muted text-softgray text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
