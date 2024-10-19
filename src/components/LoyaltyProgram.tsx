'use client'
import { useState } from 'react';

const LoyaltyProgram = ({ userPoints = 0 }) => {
  const [showRewards, setShowRewards] = useState(false);

  const rewards = [
    { name: '10% Off Next Booking', points: 1000 },
    { name: 'Free Airport Transfer', points: 2500 },
    { name: 'Complimentary Hotel Upgrade', points: 5000 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Nomadic Rewards</h2>
      <p className="mb-4">Your current points: <span className="font-bold text-blue-600">{userPoints}</span></p>
      <button
        onClick={() => setShowRewards(!showRewards)}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        {showRewards ? 'Hide Rewards' : 'View Available Rewards'}
      </button>
      {showRewards && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Available Rewards:</h3>
          <ul className="space-y-2">
            {rewards.map((reward, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{reward.name}</span>
                <span className="font-medium">{reward.points} points</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoyaltyProgram;