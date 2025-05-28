import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart, FaShare, FaClock, FaGavel } from 'react-icons/fa';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Auctions = () => {
  const [currentBid, setCurrentBid] = useState(1250);
  const [bidAmount, setBidAmount] = useState('');
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 23, seconds: 45 });
  const [isWatched, setIsWatched] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [bidHistory, setBidHistory] = useState([
    { bidder: 'JaneDoe', amount: 1250, time: '2 hours ago' },
    { bidder: 'JohnSmith', amount: 1200, time: '3 hours ago' },
    { bidder: 'ArtLover', amount: 1100, time: '4 hours ago' },
  ]);

  const itemImages = [
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  ];

  const itemDetails = {
    title: 'Rare 19th Century Oil Painting',
    artist: 'Jean-Léon Gérôme',
    year: '1878',
    description: 'This exquisite oil painting depicts a classical scene with remarkable detail and vibrant colors. The artwork has been professionally appraised and comes with a certificate of authenticity.',
    dimensions: '24" x 36"',
    medium: 'Oil on canvas',
    provenance: 'Private European collection'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        const newMinutes = newSeconds < 0 ? prev.minutes - 1 : prev.minutes;
        const newHours = newMinutes < 0 ? prev.hours - 1 : prev.hours;
        
        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : (newMinutes >= 0 ? newMinutes : 59),
          seconds: newSeconds < 0 ? 59 : (newSeconds >= 0 ? newSeconds : 59)
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    if (bidAmount && parseFloat(bidAmount) > currentBid) {
      setCurrentBid(parseFloat(bidAmount));
      setBidHistory([{ bidder: 'You', amount: parseFloat(bidAmount), time: 'Just now' }, ...bidHistory]);
      setBidAmount('');
    }
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev === itemImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? itemImages.length - 1 : prev - 1));
  };

  const quickBid = (amount) => {
    setBidAmount(currentBid + amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Gallery */}
            <div className="md:w-1/2 relative">
              <div className="relative h-96 md:h-full overflow-hidden">
                <img 
                  src={itemImages[activeImage]} 
                  alt={itemDetails.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                >
                  <BiLeftArrow size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                >
                  <BiRightArrow size={24} />
                </button>
              </div>
              <div className="flex p-2 space-x-2 overflow-x-auto">
                {itemImages.map((img, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Auction Details */}
            <div className="md:w-1/2 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{itemDetails.title}</h1>
                  <p className="text-lg text-gray-600">{itemDetails.artist}, {itemDetails.year}</p>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setIsWatched(!isWatched)}
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    {isWatched ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
                  </button>
                  <button className="text-gray-500 hover:text-gray-600 transition">
                    <FaShare size={24} />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaClock />
                  <span className="font-medium">Time remaining:</span>
                  <span className="font-bold">
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>

                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Current bid</p>
                      <p className="text-3xl font-bold text-blue-600">${currentBid.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <FaGavel />
                      <span>{bidHistory.length} bids</span>
                    </div>
                  </div>

                  <form onSubmit={handleBidSubmit} className="mt-4">
                    <div className="flex">
                      <div className="relative flex-grow">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
                          min={currentBid + 1}
                          step="10"
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder={`Enter ${currentBid + 10} or more`}
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg font-medium transition"
                      >
                        Place Bid
                      </button>
                    </div>
                  </form>

                  <div className="mt-3 flex space-x-2">
                    <button 
                      onClick={() => quickBid(10)}
                      className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm transition"
                    >
                      +$10
                    </button>
                    <button 
                      onClick={() => quickBid(50)}
                      className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm transition"
                    >
                      +$50
                    </button>
                    <button 
                      onClick={() => quickBid(100)}
                      className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm transition"
                    >
                      +$100
                    </button>
                  </div>
                </div>
              </div>

              {/* Item Details */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900">Details</h2>
                <p className="mt-2 text-gray-600">{itemDetails.description}</p>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Dimensions</p>
                    <p className="text-gray-900">{itemDetails.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Medium</p>
                    <p className="text-gray-900">{itemDetails.medium}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Provenance</p>
                    <p className="text-gray-900">{itemDetails.provenance}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bid History */}
          <div className="border-t border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">Bid History</h2>
            <div className="mt-4 space-y-3">
              {bidHistory.map((bid, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{bid.bidder}</p>
                    <p className="text-sm text-gray-500">{bid.time}</p>
                  </div>
                  <p className="font-bold text-blue-600">${bid.amount.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
