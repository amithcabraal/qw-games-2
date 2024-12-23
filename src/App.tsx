import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { GameCard } from './components/GameCard';
import { ThemeToggle } from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';
import { games } from './data/games';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <ThemeToggle isDark={isDark} toggle={toggleTheme} />
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gamepad2 className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
              QuizWordz Games
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Challenge your mind with our collection of engaging puzzle and quiz games.
            Each game offers a unique way to test your knowledge and skills.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {games.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p>More games coming soon!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;