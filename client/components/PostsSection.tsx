import React, { useState } from 'react';
import { Search, Calendar, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Post } from './types';

interface PostsSectionProps {
  posts: Post[];
  isMobile?: boolean;
}

export default function PostsSection({ posts, isMobile = false }: PostsSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  if (isMobile) {
    return (
      <section
        className="min-w-full px-6 py-8"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-2xl mx-auto space-y-6">
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
    );
  }

  return (
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
  );
}