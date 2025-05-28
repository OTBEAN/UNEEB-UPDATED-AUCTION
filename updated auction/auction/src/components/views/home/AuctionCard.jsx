import React from 'react';
import { motion } from 'framer-motion';

function AuctionCard() {
  return (
    <motion.div 
      className="auction-card bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="image-container relative">
        <img 
          src="https://images.unsplash.com/photo-1618354691373-62c68b4e5c5e" 
          alt="Auction Item" 
          className="w-full h-60 object-cover"
        />
        <span className="status absolute top-3 left-3 bg-green-600 text-white text-xs font-bold rounded-full px-3 py-1 shadow-md animate-pulse">
          🔴 Live
        </span>
      </div>

      <div className="details p-5">
        <h3 className="item-title text-xl font-bold text-gray-800 mb-2">
          Vintage Leather Jacket
        </h3>
        <p className="description text-gray-600 text-sm mb-4">
          A beautifully aged leather jacket with unique character and classic style.
        </p>

        <div className="bid-info flex justify-between items-center mb-3">
          <span className="current-bid text-sm text-gray-700">
            Current Bid: <strong className="text-indigo-600">$150</strong>
          </span>
          <span className="bid-count text-gray-500 text-xs">(5 Bids)</span>
        </div>

        <div className="time-left text-sm text-gray-500 mb-4">
          Time Left: <span className="font-semibold text-orange-500">2 days 10 hours</span>
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          className="bid-button bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300 shadow-sm"
          onClick={() => alert('Bid Placed!')}
        >
          💰 Place Bid
        </motion.button>
      </div>
    </motion.div>
  );
}

export default AuctionCard;
