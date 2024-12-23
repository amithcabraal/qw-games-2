import React from 'react';
import { Game } from '../types/game';

export function GameCard({ game }: { game: Game }) {
  return (
    <a
      href={game.url}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className={`${game.color} ${game.darkColor} p-6 flex justify-center items-center text-white`}>
        {game.icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">QuizWordz {game.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{game.description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </a>
  );
}