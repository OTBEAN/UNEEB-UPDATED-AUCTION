import { useState } from 'react'
import AuctionCard from '../views/home/AuctionCard'
import BidForm from '../views/home/BidForm'
import BidHistory from '../views/home/BidHistory'
import CountdownTimer from '../views/home/CountdownTimer'
import ProductCard from '../views/home/ProductCard'
import TestimonialBox from '../views/home/TestimonialBox'
import CardLayout from '../layouts/CardLayout'
import SectionContainer from '../layouts/SectionContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Existing components */}
      <AuctionCard />
      
      <BidForm />
      <BidHistory />
      <CountdownTimer />

      {/* New components with props */}
      <SectionContainer title="Featured Auctions" subtitle="Discover rare and valuable items up for bid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard
            title="Vintage Leather Jacket"
            description="A beautifully aged leather jacket with unique character."
            currentBid="150"
            imageUrl="https://images.unsplash.com/photo-1551028719-00167b16eac5"
            bidCount={5}
            timeLeft="2 days 10 hours"
          />
          <ProductCard
            title="Rare First Edition Book"
            description="First edition of a classic novel in excellent condition."
            currentBid="275"
            imageUrl="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
            bidCount={12}
            timeLeft="1 day 5 hours"
          />
        </div>
      </SectionContainer>

      <SectionContainer title="What Our Users Say" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialBox
            name="Sarah Johnson"
            role="Collector"
            content="I've found incredible pieces on AuctionHub that I couldn't find anywhere else. The bidding process is so smooth!"
            rating={5}
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <TestimonialBox
            name="Michael Chen"
            role="Antique Dealer"
            content="As a professional, I appreciate the authenticity guarantees and detailed item descriptions."
            rating={4}
            avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
          />
        </div>
      </SectionContainer>

      {/* Using children props components */}
      <SectionContainer>
        <CardLayout title="Auction Tips">
          <p className="text-gray-600 mb-4">
            Here are some tips to help you succeed in online auctions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Research the item's market value before bidding</li>
            <li>Set a maximum bid amount and stick to it</li>
            <li>Watch the auction closely as it nears the end time</li>
            <li>Read all terms and conditions carefully</li>
          </ul>
        </CardLayout>
      </SectionContainer>
    </>
  )
}

export default App
