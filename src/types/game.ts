import { ReactNode } from 'react';

export interface Game {
  title: string;
  description: string;
  url: string;
  icon: ReactNode;
  color: string;
  darkColor: string;
}