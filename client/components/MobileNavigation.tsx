import React from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavigationProps {
  activeSection: 'about' | 'posts';
  onSectionChange: (section: 'about' | 'posts') => void;
}

export default function MobileNavigation({ activeSection, onSectionChange }: MobileNavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-lg border-b border-border">
      <div className="flex justify-center py-4 px-6 gap-2">
        <div className="flex space-x-1 bg-muted rounded-full p-1">
          <Button
            variant={activeSection === 'about' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onSectionChange('about')}
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
            onClick={() => onSectionChange('posts')}
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
        <div className="text-white flex items-center ml-4">
          <SignedOut>
            <span>
              <a href="/sign-in">Entrar</a>
            </span>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}