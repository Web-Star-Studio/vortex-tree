import React from 'react';
import { SignedIn, UserButton } from '@clerk/clerk-react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProfileData } from './types';

interface DesktopHeaderProps {
  profile: ProfileData;
}

export default function DesktopHeader({ profile }: DesktopHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="font-bold text-lg">{profile.name}</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}