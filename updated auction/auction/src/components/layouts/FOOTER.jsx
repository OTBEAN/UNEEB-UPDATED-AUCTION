import React from 'react'

function FOOTER() {
  return (
    <div>


<footer className="bg-gray-900 text-white pt-16 pb-8">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      {/* About Section */}
      <div>
        <div className="flex items-center mb-4">
          <svg className="w-6 h-6 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h3 className="text-xl font-bold">Auction<span className="text-indigo-400">Hub</span></h3>
        </div>
        <p className="text-gray-400 mb-4">The premier online auction platform for luxury goods and rare collectibles.</p>
        <div className="flex space-x-4">
          {['facebook', 'twitter', 'instagram', 'pinterest'].map((social) => (
            <a 
              key={social}
              href="#" 
              className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
              aria-label={social}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links Section */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {['About Us', 'How It Works', 'Testimonials', 'Careers', 'Blog'].map((link) => (
            <li key={link}>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Help Section */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Help & Support</h4>
        <ul className="space-y-2">
          {['FAQs', 'Contact Us', 'Shipping Info', 'Returns Policy', 'Payment Methods'].map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Section */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
        <p className="text-gray-400 mb-4">Subscribe for exclusive auctions and updates.</p>
        <form className="flex">
          <input 
            type="email" 
            placeholder="Your email" 
            className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800" 
            required
          />
          <button 
            type="submit" 
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition-colors duration-300"
            aria-label="Subscribe"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} AuctionHub. All rights reserved.</p>
      <div className="flex space-x-6">
        {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
          <a 
            key={link}
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </div>
</footer>

      
    </div>
  )
}

export default FOOTER
