import React, { useState, useRef, useEffect } from 'react';
import DesktopHeader from '@/components/DesktopHeader';
import MobileNavigation from '@/components/MobileNavigation';
import ProfileSection from '@/components/ProfileSection';
import PostsSection from '@/components/PostsSection';
import { mockPosts, profileData } from '@/components/data';

export default function Index() {
  const [activeSection, setActiveSection] = useState<'about' | 'posts'>('about');
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
        <DesktopHeader profile={profileData} />
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="grid lg:grid-cols-12 gap-12">
              <ProfileSection profile={profileData} />
              <PostsSection posts={mockPosts} />
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Mobile Layout
  return (
    <div className="min-h-screen bg-charcoal text-white">
      <MobileNavigation 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />
      
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scroll-container pt-20"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <ProfileSection profile={profileData} isMobile={true} />
        <PostsSection posts={mockPosts} isMobile={true} />
      </div>
    </div>
  );
}
