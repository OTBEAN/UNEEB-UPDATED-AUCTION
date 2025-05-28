import React from 'react'

function BidForm() {
  return (
    <>
      
  <div className="bid-form-container bg-gray-100 p-6 rounded-md shadow-md">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Place Your Bid</h2>
  <form className="space-y-4">
    <div>
      <label htmlFor="bid-amount" className="block text-gray-700 text-sm font-bold mb-2">
        Your Bid Amount ($)
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          $
        </div>
        <input type="number" id="bid-amount" className="shadow appearance-none border rounded w-full py-2 pl-7 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your bid" min={0} step="0.01" />
      </div>
    </div>
    <div className="text-sm text-gray-600">
      Current Bid: <span className="font-semibold text-indigo-600">$175.00</span>
    </div>
    <div className="text-sm text-gray-600">
      Minimum Bid Increment: <span className="font-semibold text-green-600">$5.00</span>
    </div>
    <div>
      <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
        Place Bid
      </button>
    </div>
    <div className="text-center text-gray-500 text-xs">
      By placing a bid, you agree to our <a href="#" className="text-indigo-600 hover:underline">auction terms</a>.
    </div>
  </form>
</div>

    </>
  )
}

export default BidForm
