import React from 'react'

function CountdownTimer() {
  return (
    <div>
      
<div id="countdown-timer" className="bg-gray-100 p-4 rounded-md shadow-md text-center">
  <h2 className="text-xl font-semibold text-gray-800 mb-2">Auction Ends In:</h2>
  <div className="flex justify-center space-x-4 mb-4">
    <div className="flex flex-col items-center">
      <span id="days" className="text-3xl font-bold text-indigo-600">00</span>
      <span className="text-sm text-gray-600">Days</span>
    </div>
    <div className="flex flex-col items-center">
      <span id="hours" className="text-3xl font-bold text-indigo-600">00</span>
      <span className="text-sm text-gray-600">Hours</span>
    </div>
    <div className="flex flex-col items-center">
      <span id="minutes" className="text-3xl font-bold text-indigo-600">00</span>
      <span className="text-sm text-gray-600">Minutes</span>
    </div>
    <div className="flex flex-col items-center">
      <span id="seconds" className="text-3xl font-bold text-indigo-600">00</span>
      <span className="text-sm text-gray-600">Seconds</span>
    </div>
  </div>
</div>

    </div>
  )
}

export default CountdownTimer
