import React from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
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
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold/60 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-charcoal" />
            </div>
            <div>
              <h1 className="font-bold text-lg">{profile.name}</h1>
              <p className="text-softgray text-sm">{profile.title}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
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
      </div>
    </header>
  );
}