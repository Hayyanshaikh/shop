# Ecommerce Website using MERN Stack

## Introduction

Ye project ek Ecommerce website ka initial structure hai, jo MERN (MongoDB, Express.js, React, Node.js) stack ka istemal karti hai. Abhi tak sirf client-side (frontend) ka development kiya gaya hai. Backend ka development aapko karna hoga.

## Setup

1. **Clone Repository:**
```
git clone https://github.com/Hayyanshaikh/shop.git
```
2. **Client-side Setup:**
- Client-side code `/client` directory mein mojood hai.
- Terminal mein jaakar ye commands run karein:
  ```
  cd client
  npm install
  ```

3. **Environment Variables:**
- `/client` directory mein `.env` file create karein aur isme apne frontend ke liye required variables set karein.

4. **Start Client-side:**
- Terminal mein ye command run karein:
  ```
  npm run dev
  ```
- Frontend aapke default browser mein open hoga.

## Backend Development

Backend development ke liye, aapko MongoDB database setup karna hoga, Express.js server create karna hoga, aur routes define karna hoga.

1. **MongoDB Setup:**
- MongoDB database create karein aur connection string ko `/server/config/keys.js` mein set karein.

2. **Express.js Server:**
- `/server` directory mein mojood hai.
- Terminal mein jaakar ye commands run karein:
  ```
  cd server
  npm install
  ```

3. **Environment Variables:**
- `/server` directory mein `.env` file create karein aur apne backend ke liye required variables set karein.

4. **Start Server:**
- Terminal mein ye command run karein:
  ```
  nodmon server.js
  ```
- Server aapke specified port par chalega.

## Conclusion

Ab aapke paas ek MERN stack ke sath basic ecommerce website ka structure hai. Backend ko develop karne ke liye Express.js ka istemal karein aur MongoDB ka use karein. Iske alawa, authentication, product management, aur order processing jaise features ko add karein.

Happy coding!
