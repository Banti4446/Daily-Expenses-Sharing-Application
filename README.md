Daily Expenses Sharing Application
Project Overview
The Daily Expenses Sharing Application is a backend service that allows users to manage shared expenses. It provides features for user management, expense tracking, and splitting costs among participants using three methods:

Equal Split: Expenses are split equally among all participants.
Exact Split: Each participant pays a specified amount.
Percentage Split: Participants split the expenses based on percentages (ensuring the total is 100%).
Additionally, the app can generate and download balance sheets, showing detailed individual and overall expenses.

Technologies Used
Node.js: Backend runtime
Express.js: Web framework for building APIs
MongoDB: NoSQL database for storing users and expenses
Mongoose: ODM library for MongoDB
dotenv: For environment variables
Git: Version control
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or above)
MongoDB (local instance or MongoDB Atlas)
Git

Setup Instructions
git clone https://github.com/Banti4446/Daily-Expenses-Sharing-Application.git
cd Daily-Expenses-Sharing-Application
npm install
DB_URI=mongodb://127.0.0.1:27017/expenses-app
PORT=5000
net start MongoDB
node app.js
