import React from 'react';

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: React.ReactNode;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}