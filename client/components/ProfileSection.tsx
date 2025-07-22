import React from 'react';
import { User, ExternalLink, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { ProfileData } from './types';

interface ProfileSectionProps {
  profile: ProfileData;
  isMobile?: boolean;
}

export default function ProfileSection({ profile, isMobile = false }: ProfileSectionProps) {
  if (isMobile) {
    return (
      <section
        className="min-w-full flex-shrink-0 max-w-[80%] mx-auto"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="relative mb-16">
          <div className="h-48 bg-gradient-to-br from-gold/20 via-charcoal-200 to-softgray/10 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gold/10 to-transparent opacity-80"></div>
          </div>
          
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-gold to-gold/60 rounded-full border-4 border-charcoal shadow-2xl flex items-center justify-center">
                <User className="w-16 h-16 text-charcoal" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <p className="text-softgray text-lg">{profile.title}</p>
          </div>

          <div className="space-y-4">
            <p className="text-softgray leading-relaxed">{profile.bio}</p>
            {profile.extendedBio && (
              <p className="text-softgray leading-relaxed">{profile.extendedBio}</p>
            )}
          </div>

          <div className="space-y-3">
            <a
              href={profile.socialLinks.linkedin}
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
              href={profile.socialLinks.github}
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
              href={profile.socialLinks.portfolio}
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
              href={profile.socialLinks.email}
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
    );
  }

  return (
    <aside className="lg:col-span-4 xl:col-span-3">
      <div className="sticky top-32 space-y-8">
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
            <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
            <p className="text-gold font-medium mb-3">{profile.title}</p>
            <p className="text-softgray leading-relaxed text-sm">{profile.bio}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 px-4 bg-card rounded-xl border border-border">
            <div className="text-center">
              <div className="text-xl font-bold text-gold">{profile.stats.projects}</div>
              <div className="text-xs text-softgray">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gold">{profile.stats.followers.toLocaleString()}</div>
              <div className="text-xs text-softgray">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gold">{profile.stats.posts}</div>
              <div className="text-xs text-softgray">Posts</div>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href={profile.socialLinks.linkedin}
              className="flex items-center space-x-3 p-3 bg-card rounded-xl border border-border hover:border-gold transition-all duration-300 group"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Linkedin className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium group-hover:text-gold">LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-softgray group-hover:text-gold ml-auto" />
            </a>

            <a
              href={profile.socialLinks.github}
              className="flex items-center space-x-3 p-3 bg-card rounded-xl border border-border hover:border-gold transition-all duration-300 group"
            >
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <Github className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium group-hover:text-gold">GitHub</span>
              <ExternalLink className="w-3 h-3 text-softgray group-hover:text-gold ml-auto" />
            </a>

            <a
              href={profile.socialLinks.portfolio}
              className="flex items-center space-x-3 p-3 bg-card rounded-xl border border-border hover:border-gold transition-all duration-300 group"
            >
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-charcoal" />
              </div>
              <span className="font-medium group-hover:text-gold">Portfolio</span>
              <ExternalLink className="w-3 h-3 text-softgray group-hover:text-gold ml-auto" />
            </a>

            <a
              href={profile.socialLinks.email}
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
  );
}