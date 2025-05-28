# UNEEB-UPDATED-AUCTION
 Documentation
API Docs: POSTMAN/Insomnia collection included

Database Schema: MongoDB collections for users, products, bids

Tech Stack: MERN (MongoDB, Express, React, Node.js)

🔄 CRUD Operations
Products
Create: Sellers list new items (POST /api/products)

Read: View all auctions (GET /api/products)

Update: Modify listings (PUT /api/products/:id)

Delete: Remove items (DELETE /api/products/:id)

Bids
Create: Place bids (POST /api/bids)

Read: Fetch bid history (GET /api/bids/:productId)

Update/Delete: Admin-only for corrections

👥 Role Management
Role	Permissions
Guest	Browse auctions
User	Bid, view history
Seller	List products, manage auctions
Admin	Full control, ban users, resolve disputes
🔑 Admin Credentials
plaintext
Email: admin@auction.com  
Password: Admin@Auction123  
Note: Change after first login.

🚀 Quick Start
Clone repo

npm install

Set up .env (copy from .env.example)

npm run dev
