import React from 'react';
import {
  Brain,
  Music,
  Globe2,
  Link,
  Grid3x3,
  TreePine,
  Shapes,
  Search,
  Clock,
  Calculator,
  Square,
  User,
  Timer,
  LayoutGrid,
  Equal,
  Box,
} from 'lucide-react';
import { Game } from '../types/game';

export const games: Game[] = [
  {
    title: 'Globe',
    description: 'Test your geography knowledge in this country guessing challenge',
    url: 'https://qw-globe-6.netlify.app',
    icon: <Globe2 className="w-8 h-8" />,
    color: 'bg-blue-500',
    darkColor: 'dark:bg-blue-600',
  },
  {
    title: 'Intro',
    description: 'How fast can you recognize these famous song intros?',
    url: 'https://qw-track.netlify.app/',
    icon: <Music className="w-8 h-8" />,
    color: 'bg-purple-500',
    darkColor: 'dark:bg-purple-600',
  },
  {
    title: 'Chain',
    description: 'Create word chains by filling in the missing vowels',
    url: 'https://qw-chain.netlify.app',
    icon: <Link className="w-8 h-8" />,
    color: 'bg-green-500',
    darkColor: 'dark:bg-green-600',
  },
  {
    title: 'Atlas',
    description: 'Challenge friends in this multiplayer geography adventure',
    url: 'https://qw-atlas4.netlify.app',
    icon: <Globe2 className="w-8 h-8" />,
    color: 'bg-indigo-500',
    darkColor: 'dark:bg-indigo-600',
  },
  {
    title: 'Cross Tree',
    description: 'Strategic tree placement puzzle',
    url: 'https://qw-cross-tree-7.netlify.app',
    icon: <TreePine className="w-8 h-8" />,
    color: 'bg-emerald-500',
    darkColor: 'dark:bg-emerald-600',
  },
  {
    title: '5x5',
    description: 'Find five 5-letter words hidden in the grid',
    url: 'https://qw-five-by-five.netlify.app',
    icon: <Grid3x3 className="w-8 h-8" />,
    color: 'bg-rose-500',
    darkColor: 'dark:bg-rose-600',
  },
  {
    title: 'Shape',
    description: 'Solve the puzzle by fitting shapes in the available space',
    url: 'https://qw-shape-9.netlify.app',
    icon: <Shapes className="w-8 h-8" />,
    color: 'bg-orange-500',
    darkColor: 'dark:bg-orange-600',
  },
  {
    title: 'Truth',
    description: 'Can you find the one truth among the lies?',
    url: 'https://qw-truth-4.netlify.app',
    icon: <Search className="w-8 h-8" />,
    color: 'bg-cyan-500',
    darkColor: 'dark:bg-cyan-600',
  },
  {
    title: 'Older',
    description: 'Test your knowledge of historical chronology',
    url: 'https://qw-older-10.netlify.app',
    icon: <Clock className="w-8 h-8" />,
    color: 'bg-pink-500',
    darkColor: 'dark:bg-pink-600',
  },
  {
    title: 'Chimp',
    description: 'Challenge your memory like a chimp',
    url: 'https://qw-chimp.netlify.app',
    icon: <Calculator className="w-8 h-8" />,
    color: 'bg-teal-500',
    darkColor: 'dark:bg-teal-600',
  },
  {
    title: 'Boxes',
    description: 'Classic dots and boxes game',
    url: 'https://qw-boxes-7.netlify.app',
    icon: <Square className="w-8 h-8" />,
    color: 'bg-violet-500',
    darkColor: 'dark:bg-violet-600',
  },
  {
    title: 'Celeb',
    description: 'Name the celebrity',
    url: 'https://qw-secret-celeb.netlify.app',
    icon: <User className="w-8 h-8" />,
    color: 'bg-amber-500',
    darkColor: 'dark:bg-amber-600',
  },
  {
    title: 'First',
    description: 'Which came first',
    url: 'https://qw-first-5.netlify.app',
    icon: <Timer className="w-8 h-8" />,
    color: 'bg-lime-500',
    darkColor: 'dark:bg-lime-600',
  },
  {
    title: 'Search',
    description: 'Solve the wordsearch',
    url: 'https://qw-search-3.netlify.app',
    icon: <LayoutGrid className="w-8 h-8" />,
    color: 'bg-fuchsia-500',
    darkColor: 'dark:bg-fuchsia-600',
  },
  {
    title: 'Equal',
    description: 'Get the biggest balancing equation',
    url: 'https://qw-equal-9.netlify.app',
    icon: <Equal className="w-8 h-8" />,
    color: 'bg-sky-500',
    darkColor: 'dark:bg-sky-600',
  },
  {
    title: 'All Fours',
    description: 'Four in a line 3D',
    url: 'https://qw-all-fours-2.netlify.app',
    icon: <Box className="w-8 h-8" />,
    color: 'bg-purple-500',
    darkColor: 'dark:bg-purple-600',
  },
];