import React from 'react'

function BidHistory() {
  return (
    <>

<div className="bid-history-container bg-white rounded-md shadow-md p-6">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Bid History</h2>
  <div className="overflow-y-auto max-h-96">
    <ul className="divide-y divide-gray-200">
      <li className="py-3 flex items-center justify-between">
        <div className="flex-grow">
          <p className="text-sm font-medium text-gray-700">User A</p>
          <p className="text-xs text-gray-500">April 25, 2025 - 1:10 PM</p>
        </div>
        <span className="font-semibold text-indigo-600">$180.00</span>
      </li>
      <li className="py-3 flex items-center justify-between">
        <div className="flex-grow">
          <p className="text-sm font-medium text-gray-700">User B</p>
          <p className="text-xs text-gray-500">April 25, 2025 - 1:05 PM</p>
        </div>
        <span className="font-semibold text-indigo-600">$175.00</span>
      </li>
      <li className="py-3 flex items-center justify-between">
        <div className="flex-grow">
          <p className="text-sm font-medium text-gray-700">User C</p>
          <p className="text-xs text-gray-500">April 25, 2025 - 1:00 PM</p>
        </div>
        <span className="font-semibold text-indigo-600">$170.00</span>
      </li>
      <li className="py-3 flex items-center justify-between">
        <div className="flex-grow">
          <p className="text-sm font-medium text-gray-700">User A</p>
          <p className="text-xs text-gray-500">April 25, 2025 - 12:55 PM</p>
        </div>
        <span className="font-semibold text-indigo-600">$165.00</span>
      </li>
    </ul>
    <div className="text-center mt-4 text-gray-500 text-sm" id="no-bids" style={{display: 'none'}}>
      No bids placed yet.
    </div>
  </div>
</div>

      
    </>
  )
}

export default BidHistory
